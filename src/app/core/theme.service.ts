import { Injectable, effect, signal } from "@angular/core";
import { SITE_CONFIG } from "../config/site.config";
import { ThemeId, THEMES, isThemeId } from "../config/themes";

const THEME_KEY = "mw.theme";
const ADMIN_KEY = "mw.admin";
const FONT_LINK_ID = "mw-aero-fonts";
const FONT_HREF =
  "https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap";

function readStorage(key: string): string | null {
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
}

function writeStorage(key: string, value: string | null): void {
  try {
    if (value === null) {
      window.localStorage.removeItem(key);
    } else {
      window.localStorage.setItem(key, value);
    }
  } catch {
    /* stockage indisponible (navigation privée…) : on ignore */
  }
}

@Injectable({ providedIn: "root" })
export class ThemeService {
  readonly themes = THEMES;

  /** Vrai quand l'admin s'est authentifié dans ce navigateur. */
  readonly isAdmin = signal(readStorage(ADMIN_KEY) === "1");

  /** Thème actuellement affiché. */
  readonly current = signal<ThemeId>(this.initialTheme());

  /** Panneau de personnalisation ouvert ? */
  readonly panelOpen = signal(false);

  constructor() {
    effect(() => {
      const theme = this.current();
      const root = document.documentElement;
      root.dataset["theme"] = theme;
      root.dataset["admin"] = this.isAdmin() ? "1" : "0";
      if (theme !== "classic") {
        this.ensureAeroFonts();
      }
    });

    window.addEventListener("hashchange", () => this.consumeAdminHash());
    window.addEventListener("keydown", (event) => {
      if (event.ctrlKey && event.altKey && event.key.toLowerCase() === "a") {
        event.preventDefault();
        this.panelOpen.update((open) => !open);
      } else if (event.key === "Escape" && this.panelOpen()) {
        this.panelOpen.set(false);
      }
    });
    this.consumeAdminHash();
  }

  /** Active un thème. Réservé à l'admin authentifié. */
  set(theme: ThemeId): void {
    if (!this.isAdmin()) {
      return;
    }
    this.current.set(theme);
    writeStorage(THEME_KEY, theme);
  }

  /** Retour au mode normal (le site classique), à tout moment. */
  resetToNormal(): void {
    this.set("classic");
  }

  openPanel(): void {
    this.panelOpen.set(true);
  }

  closePanel(): void {
    this.panelOpen.set(false);
  }

  async login(passcode: string): Promise<boolean> {
    const hash = await sha256(`maywix:${passcode}`);
    if (hash !== SITE_CONFIG.adminPasscodeHash) {
      return false;
    }
    writeStorage(ADMIN_KEY, "1");
    this.isAdmin.set(true);
    return true;
  }

  /** Quitte la session admin : le visiteur revoit le thème public. */
  logout(): void {
    writeStorage(ADMIN_KEY, null);
    writeStorage(THEME_KEY, null);
    this.isAdmin.set(false);
    this.current.set(SITE_CONFIG.publicTheme);
    this.panelOpen.set(false);
  }

  private initialTheme(): ThemeId {
    if (readStorage(ADMIN_KEY) === "1") {
      const stored = readStorage(THEME_KEY);
      if (isThemeId(stored)) {
        return stored;
      }
    }
    return SITE_CONFIG.publicTheme;
  }

  private consumeAdminHash(): void {
    if (window.location.hash.toLowerCase() === "#admin") {
      history.replaceState(
        null,
        "",
        window.location.pathname + window.location.search
      );
      this.panelOpen.set(true);
    }
  }

  private ensureAeroFonts(): void {
    if (document.getElementById(FONT_LINK_ID)) {
      return;
    }
    const link = document.createElement("link");
    link.id = FONT_LINK_ID;
    link.rel = "stylesheet";
    link.href = FONT_HREF;
    document.head.appendChild(link);
  }
}

/* ---------------------------------------------------------------- */
/* SHA-256 — Web Crypto quand disponible (HTTPS/localhost), sinon JS  */
/* ---------------------------------------------------------------- */

async function sha256(text: string): Promise<string> {
  const bytes = new TextEncoder().encode(text);
  if (window.crypto?.subtle) {
    const digest = await window.crypto.subtle.digest("SHA-256", bytes);
    return Array.from(new Uint8Array(digest))
      .map((byte) => byte.toString(16).padStart(2, "0"))
      .join("");
  }
  return sha256Fallback(bytes);
}

const K = [
  0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1,
  0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3,
  0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174, 0xe49b69c1, 0xefbe4786,
  0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da,
  0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147,
  0x06ca6351, 0x14292967, 0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13,
  0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85, 0xa2bfe8a1, 0xa81a664b,
  0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070,
  0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a,
  0x5b9cca4f, 0x682e6ff3, 0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208,
  0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2,
];

function sha256Fallback(message: Uint8Array): string {
  const rotr = (value: number, bits: number) =>
    (value >>> bits) | (value << (32 - bits));
  const length = message.length;
  const paddedLength = (((length + 9 + 63) >> 6) << 6) >>> 0;
  const data = new Uint8Array(paddedLength);
  data.set(message);
  data[length] = 0x80;
  const view = new DataView(data.buffer);
  view.setUint32(paddedLength - 8, Math.floor((length * 8) / 0x100000000));
  view.setUint32(paddedLength - 4, (length * 8) >>> 0);

  const h = [
    0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c,
    0x1f83d9ab, 0x5be0cd19,
  ];
  const w = new Array<number>(64);
  for (let offset = 0; offset < paddedLength; offset += 64) {
    for (let i = 0; i < 16; i++) {
      w[i] = view.getUint32(offset + i * 4);
    }
    for (let i = 16; i < 64; i++) {
      const s0 = rotr(w[i - 15], 7) ^ rotr(w[i - 15], 18) ^ (w[i - 15] >>> 3);
      const s1 = rotr(w[i - 2], 17) ^ rotr(w[i - 2], 19) ^ (w[i - 2] >>> 10);
      w[i] = (w[i - 16] + s0 + w[i - 7] + s1) >>> 0;
    }
    let [a, b, c, d, e, f, g, hh] = h;
    for (let i = 0; i < 64; i++) {
      const s1 = rotr(e, 6) ^ rotr(e, 11) ^ rotr(e, 25);
      const ch = (e & f) ^ (~e & g);
      const t1 = (hh + s1 + ch + K[i] + w[i]) >>> 0;
      const s0 = rotr(a, 2) ^ rotr(a, 13) ^ rotr(a, 22);
      const maj = (a & b) ^ (a & c) ^ (b & c);
      const t2 = (s0 + maj) >>> 0;
      hh = g;
      g = f;
      f = e;
      e = (d + t1) >>> 0;
      d = c;
      c = b;
      b = a;
      a = (t1 + t2) >>> 0;
    }
    h[0] = (h[0] + a) >>> 0;
    h[1] = (h[1] + b) >>> 0;
    h[2] = (h[2] + c) >>> 0;
    h[3] = (h[3] + d) >>> 0;
    h[4] = (h[4] + e) >>> 0;
    h[5] = (h[5] + f) >>> 0;
    h[6] = (h[6] + g) >>> 0;
    h[7] = (h[7] + hh) >>> 0;
  }
  return h.map((value) => value.toString(16).padStart(8, "0")).join("");
}
