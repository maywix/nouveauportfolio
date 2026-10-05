import { Component, Input } from "@angular/core";

export type BuddyTone = "green" | "blue" | "orange" | "pink";

interface Palette {
  light: string;
  mid: string;
  dark: string;
  glow: string;
}

const PALETTES: Record<BuddyTone, Palette> = {
  green: { light: "#c9ffbd", mid: "#34c235", dark: "#075a14", glow: "#7dff6a" },
  blue: { light: "#cdf2ff", mid: "#2aa6ee", dark: "#073c8a", glow: "#70d4ff" },
  orange: { light: "#fff0c4", mid: "#ff9f1c", dark: "#8f4200", glow: "#ffd069" },
  pink: { light: "#ffe0f4", mid: "#ee4fb4", dark: "#7a0f58", glow: "#ff8fd8" },
};

let counter = 0;

/**
 * Petit personnage en gel/verre façon icône Messenger : tête sphérique,
 * collerette, corps bombé, reflets spéculaires. Pur SVG, recolorable.
 */
@Component({
  selector: "app-aero-buddy",
  standalone: true,
  template: `
    <svg
      viewBox="0 0 204 272"
      class="buddy"
      role="img"
      aria-label="Mascotte"
      [style.--glow]="p.glow"
    >
      <defs>
        <radialGradient [attr.id]="id('body')" cx="50%" cy="30%" r="80%">
          <stop offset="0" [attr.stop-color]="p.light" stop-opacity=".95" />
          <stop offset=".42" [attr.stop-color]="p.mid" />
          <stop offset="1" [attr.stop-color]="p.dark" />
        </radialGradient>
        <radialGradient [attr.id]="id('head')" cx="42%" cy="28%" r="78%">
          <stop offset="0" [attr.stop-color]="p.light" stop-opacity=".95" />
          <stop offset=".4" [attr.stop-color]="p.mid" />
          <stop offset="1" [attr.stop-color]="p.dark" />
        </radialGradient>
        <radialGradient [attr.id]="id('inner')" cx="50%" cy="55%" r="60%">
          <stop offset=".55" [attr.stop-color]="p.glow" stop-opacity="0" />
          <stop offset="1" [attr.stop-color]="p.glow" stop-opacity=".75" />
        </radialGradient>
        <linearGradient [attr.id]="id('shine')" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#fff" stop-opacity=".95" />
          <stop offset="1" stop-color="#fff" stop-opacity="0" />
        </linearGradient>
        <linearGradient [attr.id]="id('collar')" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#fff" stop-opacity=".85" />
          <stop offset=".5" [attr.stop-color]="p.light" stop-opacity=".55" />
          <stop offset="1" [attr.stop-color]="p.mid" stop-opacity=".8" />
        </linearGradient>
        <filter [attr.id]="id('blur')" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2.4" />
        </filter>
        <filter [attr.id]="id('glow')" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="7" />
        </filter>
        <clipPath [attr.id]="id('bodyclip')">
          <path [attr.d]="bodyPath" />
        </clipPath>
        <clipPath [attr.id]="id('headclip')">
          <circle cx="102" cy="62" r="54" />
        </clipPath>
      </defs>

      <!-- halo + ombre au sol -->
      <ellipse cx="102" cy="262" rx="92" ry="9" fill="#000" opacity=".28" [attr.filter]="'url(#' + id('blur') + ')'" />
      <path [attr.d]="bodyPath" [attr.fill]="p.glow" opacity=".45" [attr.filter]="'url(#' + id('glow') + ')'" />

      <!-- corps -->
      <path [attr.d]="bodyPath" [attr.fill]="'url(#' + id('body') + ')'" />
      <path [attr.d]="bodyPath" [attr.fill]="'url(#' + id('inner') + ')'" />
      <g [attr.clip-path]="'url(#' + id('bodyclip') + ')'">
        <!-- plis bras / torse -->
        <path d="M58 138C50 172 42 206 40 244" fill="none" stroke="#000" stroke-opacity=".28" stroke-width="3" [attr.filter]="'url(#' + id('blur') + ')'" />
        <path d="M146 138C154 172 162 206 164 244" fill="none" stroke="#000" stroke-opacity=".28" stroke-width="3" [attr.filter]="'url(#' + id('blur') + ')'" />
        <path d="M60 138C52 172 44 206 42 244" fill="none" stroke="#fff" stroke-opacity=".5" stroke-width="1.4" />
        <path d="M144 138C152 172 160 206 162 244" fill="none" stroke="#fff" stroke-opacity=".5" stroke-width="1.4" />
        <!-- reflets du sol -->
        <ellipse cx="102" cy="262" rx="70" ry="14" fill="#fff" opacity=".4" [attr.filter]="'url(#' + id('blur') + ')'" />
        <!-- reflet épaule gauche -->
        <path d="M30 150C36 134 52 124 70 120C54 132 44 152 40 182C34 176 28 164 30 150Z" fill="#fff" opacity=".55" />
        <!-- bandes verticales brillantes -->
        <rect x="118" y="160" width="7" height="48" rx="3.5" fill="#fff" opacity=".7" [attr.filter]="'url(#' + id('blur') + ')'" />
        <rect x="176" y="168" width="5" height="34" rx="2.5" fill="#fff" opacity=".45" [attr.filter]="'url(#' + id('blur') + ')'" />
        <rect x="26" y="200" width="5" height="22" rx="2.5" fill="#fff" opacity=".4" />
      </g>
      <path [attr.d]="bodyPath" fill="none" stroke="#fff" stroke-opacity=".6" stroke-width="1.6" />

      <!-- points spéculaires -->
      <g fill="#fff">
        <circle cx="84" cy="236" r="2.4" />
        <circle cx="62" cy="262" r="1.8" opacity=".8" />
        <circle cx="118" cy="252" r="1.5" opacity=".9" />
        <circle cx="106" cy="138" r="2" />
      </g>

      <!-- collerette -->
      <rect x="66" y="98" width="72" height="24" rx="12" [attr.fill]="'url(#' + id('collar') + ')'" stroke="#fff" stroke-opacity=".65" />
      <ellipse cx="102" cy="102" rx="28" ry="4" fill="#fff" opacity=".6" />

      <!-- tête -->
      <circle cx="102" cy="62" r="56" [attr.fill]="p.glow" opacity=".4" [attr.filter]="'url(#' + id('glow') + ')'" />
      <circle cx="102" cy="62" r="54" [attr.fill]="'url(#' + id('head') + ')'" />
      <circle cx="102" cy="62" r="54" [attr.fill]="'url(#' + id('inner') + ')'" />
      <g [attr.clip-path]="'url(#' + id('headclip') + ')'">
        <ellipse cx="86" cy="26" rx="30" ry="15" [attr.fill]="'url(#' + id('shine') + ')'" transform="rotate(-18 86 26)" />
        <ellipse cx="102" cy="116" rx="42" ry="14" fill="#fff" opacity=".28" [attr.filter]="'url(#' + id('blur') + ')'" />
        <path d="M128 92C142 82 150 66 148 48C156 70 150 90 132 104Z" fill="#fff" opacity=".45" />
      </g>
      <circle cx="102" cy="62" r="54" fill="none" stroke="#fff" stroke-opacity=".7" stroke-width="1.6" />
      <g fill="#fff">
        <circle cx="96" cy="82" r="2.2" />
        <circle cx="120" cy="58" r="2.2" />
        <circle cx="76" cy="78" r="1.6" opacity=".85" />
        <circle cx="116" cy="84" r="1.4" opacity=".7" />
      </g>
    </svg>
  `,
  styles: [
    `
      :host {
        display: inline-block;
        line-height: 0;
      }
      .buddy {
        width: 100%;
        height: auto;
        overflow: visible;
        filter: drop-shadow(0 0 10px color-mix(in srgb, var(--glow) 55%, transparent));
      }
    `,
  ],
})
export class AeroBuddyComponent {
  @Input() set tone(value: BuddyTone) {
    this.p = PALETTES[value] ?? PALETTES.green;
  }

  p: Palette = PALETTES.green;

  readonly bodyPath =
    "M70 114C48 118 28 128 18 156C10 180 6 206 4 226C3 236 12 241 20 238L26 252C30 262 50 266 102 266C154 266 174 262 178 252L184 238C192 241 201 236 200 226C198 206 194 180 186 156C176 128 156 118 134 114Q102 108 70 114Z";

  private readonly uid = ++counter;

  id(name: string): string {
    return `ab-${this.uid}-${name}`;
  }
}
