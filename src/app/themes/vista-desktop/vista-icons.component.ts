import { Component, Input, ViewEncapsulation } from "@angular/core";

/**
 * Sprite d'icônes « badges glossy » (à monter UNE fois dans le bureau) et
 * composant <vd-icon name="…"> pour les afficher.
 */
@Component({
  selector: "vd-sprite",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  template: `
    <svg
      width="0"
      height="0"
      style="position:absolute"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id="vdg-blue" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#9ee3ff" />
          <stop offset=".5" stop-color="#2d9be0" />
          <stop offset="1" stop-color="#0a4c9e" />
        </linearGradient>
        <linearGradient id="vdg-green" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#c8f79a" />
          <stop offset=".5" stop-color="#4cb82a" />
          <stop offset="1" stop-color="#16670f" />
        </linearGradient>
        <linearGradient id="vdg-orange" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#ffe29a" />
          <stop offset=".5" stop-color="#ff9a1f" />
          <stop offset="1" stop-color="#b24a05" />
        </linearGradient>
        <linearGradient id="vdg-red" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#ffb5a6" />
          <stop offset=".5" stop-color="#e5412b" />
          <stop offset="1" stop-color="#8e1408" />
        </linearGradient>
        <linearGradient id="vdg-purple" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#e2c4ff" />
          <stop offset=".5" stop-color="#9a52e0" />
          <stop offset="1" stop-color="#4a1a8f" />
        </linearGradient>
        <linearGradient id="vdg-teal" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#b3fff0" />
          <stop offset=".5" stop-color="#1fbfa6" />
          <stop offset="1" stop-color="#075e5a" />
        </linearGradient>
        <linearGradient id="vdg-gloss" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#fff" stop-opacity=".85" />
          <stop offset="1" stop-color="#fff" stop-opacity=".08" />
        </linearGradient>
        <linearGradient id="vdg-folder-back" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#e3a934" />
          <stop offset="1" stop-color="#b57813" />
        </linearGradient>
        <linearGradient id="vdg-folder-front" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#ffec9a" />
          <stop offset=".55" stop-color="#ffc93c" />
          <stop offset="1" stop-color="#eba117" />
        </linearGradient>
        <linearGradient id="vdg-paper" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#ffffff" />
          <stop offset="1" stop-color="#cfdbe8" />
        </linearGradient>
        <radialGradient id="vdg-orb" cx="40%" cy="30%" r="80%">
          <stop offset="0" stop-color="#ffe8b0" />
          <stop offset=".4" stop-color="#ff9a1f" />
          <stop offset="1" stop-color="#a23d00" />
        </radialGradient>
        <radialGradient id="vdg-head" cx="40%" cy="30%" r="80%">
          <stop offset="0" stop-color="#e5ffd5" />
          <stop offset=".45" stop-color="#4fd142" />
          <stop offset="1" stop-color="#0c6a18" />
        </radialGradient>
      </defs>

      <!-- Dossier -->
      <symbol id="vdi-projects" viewBox="0 0 64 64">
        <path d="M5 14a4 4 0 0 1 4-4h15l6 6h25a4 4 0 0 1 4 4v32a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4Z" fill="url(#vdg-folder-back)" stroke="#8a5a0b" stroke-opacity=".8" />
        <rect x="9" y="19" width="46" height="26" rx="2" fill="url(#vdg-paper)" stroke="#8a97a8" stroke-opacity=".7" />
        <path d="M5 26a4 4 0 0 1 4-4h46a4 4 0 0 1 4 4l-3 28a4 4 0 0 1-4 3.4H12a4 4 0 0 1-4-3.4Z" fill="url(#vdg-folder-front)" stroke="#a8700f" stroke-opacity=".85" />
        <path d="M6 28c0-3 2-5 5-5h42c3 0 5 2 5 5-14 8-38 8-52 0Z" fill="#fff" opacity=".5" />
      </symbol>

      <!-- Bienvenue (étoile) -->
      <symbol id="vdi-welcome" viewBox="0 0 64 64">
        <rect x="4" y="4" width="56" height="56" rx="15" fill="url(#vdg-blue)" stroke="#0b3a73" stroke-opacity=".7" />
        <path d="M8 26C8 12 17 6 32 6s24 6 24 20c-12 10-36 10-48 0Z" fill="url(#vdg-gloss)" />
        <path d="m32 14 5.4 11 12.1 1.7-8.8 8.5 2.1 12L32 41.500 21.200 47.200l2.100-12-8.800-8.500 12.100-1.700Z" fill="#fff" stroke="#0b3a73" stroke-opacity=".5" />
        <rect x="4.500" y="4.500" width="55" height="55" rx="14.500" fill="none" stroke="#fff" stroke-opacity=".55" />
      </symbol>

      <!-- Compétences (curseurs) -->
      <symbol id="vdi-skills" viewBox="0 0 64 64">
        <rect x="4" y="4" width="56" height="56" rx="15" fill="url(#vdg-teal)" stroke="#07514d" stroke-opacity=".7" />
        <path d="M8 26C8 12 17 6 32 6s24 6 24 20c-12 10-36 10-48 0Z" fill="url(#vdg-gloss)" />
        <g stroke="#fff" stroke-width="4" stroke-linecap="round">
          <path d="M14 22h36M14 32h36M14 42h36" />
        </g>
        <g fill="#ffd54a" stroke="#7a5200">
          <circle cx="24" cy="22" r="5" />
          <circle cx="40" cy="32" r="5" />
          <circle cx="28" cy="42" r="5" />
        </g>
        <rect x="4.500" y="4.500" width="55" height="55" rx="14.500" fill="none" stroke="#fff" stroke-opacity=".55" />
      </symbol>

      <!-- Courrier -->
      <symbol id="vdi-mail" viewBox="0 0 64 64">
        <rect x="4" y="12" width="56" height="42" rx="7" fill="url(#vdg-paper)" stroke="#6d7f95" />
        <path d="M6 16 32 38 58 16" fill="none" stroke="#7e92a8" stroke-width="2.500" stroke-linejoin="round" />
        <path d="M4 19c0-4 3-7 7-7h42c4 0 7 3 7 7L32 38Z" fill="url(#vdg-blue)" opacity=".92" stroke="#0b3a73" stroke-opacity=".6" />
        <path d="M8 16h48c-6 6-14 10-24 10S14 22 8 16Z" fill="#fff" opacity=".45" />
      </symbol>

      <!-- Discussion (mini mascotte) -->
      <symbol id="vdi-messenger" viewBox="0 0 64 64">
        <path d="M17 36c-8 3-11 10-12 22 8 4 46 4 54 0-1-12-4-19-12-22-8-3-22-3-30 0Z" fill="url(#vdg-green)" stroke="#0b4f12" stroke-opacity=".7" />
        <circle cx="32" cy="22" r="14" fill="url(#vdg-head)" stroke="#0b4f12" stroke-opacity=".7" />
        <ellipse cx="27" cy="14" rx="8" ry="4.500" fill="#fff" opacity=".7" transform="rotate(-20 27 14)" />
        <path d="M18 40c5-3 23-3 28 0-4 3-24 3-28 0Z" fill="#fff" opacity=".35" />
      </symbol>

      <!-- Lecteur -->
      <symbol id="vdi-player" viewBox="0 0 64 64">
        <circle cx="32" cy="32" r="28" fill="url(#vdg-orb)" stroke="#7d2f00" stroke-opacity=".8" />
        <path d="M8 30C8 15 18 6 32 6s24 9 24 24c-14 9-34 9-48 0Z" fill="url(#vdg-gloss)" />
        <path d="M26 20v24l20-12Z" fill="#fff" stroke="#7d2f00" stroke-opacity=".6" stroke-linejoin="round" />
        <circle cx="32" cy="32" r="27.500" fill="none" stroke="#fff" stroke-opacity=".5" />
      </symbol>

      <!-- Vidéo / film -->
      <symbol id="vdi-film" viewBox="0 0 64 64">
        <rect x="4" y="4" width="56" height="56" rx="15" fill="url(#vdg-red)" stroke="#6a0e05" stroke-opacity=".7" />
        <path d="M8 26C8 12 17 6 32 6s24 6 24 20c-12 10-36 10-48 0Z" fill="url(#vdg-gloss)" />
        <rect x="13" y="19" width="38" height="28" rx="4" fill="#fff" stroke="#6a0e05" stroke-opacity=".5" />
        <path d="M27 26v14l12-7Z" fill="#c4301c" />
        <g fill="#c4301c"><rect x="16" y="22" width="3" height="3" /><rect x="16" y="29" width="3" height="3" /><rect x="16" y="36" width="3" height="3" /><rect x="45" y="22" width="3" height="3" /><rect x="45" y="29" width="3" height="3" /><rect x="45" y="36" width="3" height="3" /></g>
        <rect x="4.500" y="4.500" width="55" height="55" rx="14.500" fill="none" stroke="#fff" stroke-opacity=".55" />
      </symbol>

      <!-- Graphic design / palette -->
      <symbol id="vdi-palette" viewBox="0 0 64 64">
        <rect x="4" y="4" width="56" height="56" rx="15" fill="url(#vdg-purple)" stroke="#2f0f66" stroke-opacity=".7" />
        <path d="M8 26C8 12 17 6 32 6s24 6 24 20c-12 10-36 10-48 0Z" fill="url(#vdg-gloss)" />
        <path d="M32 13c-11 0-19 7-19 17 0 9 7 17 16 17 4 0 5-3 3-5-2-3 0-6 4-6h6c4 0 7-3 7-7 0-9-8-16-17-16Z" fill="#fff" stroke="#2f0f66" stroke-opacity=".5" />
        <g stroke="#2f0f66" stroke-opacity=".35"><circle cx="22" cy="28" r="3.500" fill="#ff5a4d" /><circle cx="31" cy="21" r="3.500" fill="#ffd23c" /><circle cx="41" cy="25" r="3.500" fill="#3fc15a" /><circle cx="22" cy="38" r="3.500" fill="#2f8cf0" /></g>
        <rect x="4.500" y="4.500" width="55" height="55" rx="14.500" fill="none" stroke="#fff" stroke-opacity=".55" />
      </symbol>

      <!-- 3D / cube -->
      <symbol id="vdi-cube" viewBox="0 0 64 64">
        <rect x="4" y="4" width="56" height="56" rx="15" fill="url(#vdg-blue)" stroke="#0b3a73" stroke-opacity=".7" />
        <path d="M8 26C8 12 17 6 32 6s24 6 24 20c-12 10-36 10-48 0Z" fill="url(#vdg-gloss)" />
        <path d="M32 13 49 22v20L32 51 15 42V22Z" fill="#fff" stroke="#0b3a73" stroke-opacity=".55" stroke-linejoin="round" />
        <path d="M15 22 32 31 49 22M32 31v20" fill="none" stroke="#0b3a73" stroke-opacity=".5" />
        <path d="M32 31 49 22v20L32 51Z" fill="#9fc6ee" opacity=".7" />
        <rect x="4.500" y="4.500" width="55" height="55" rx="14.500" fill="none" stroke="#fff" stroke-opacity=".55" />
      </symbol>

      <!-- Web / globe -->
      <symbol id="vdi-globe" viewBox="0 0 64 64">
        <rect x="4" y="4" width="56" height="56" rx="15" fill="url(#vdg-green)" stroke="#0b4f12" stroke-opacity=".7" />
        <path d="M8 26C8 12 17 6 32 6s24 6 24 20c-12 10-36 10-48 0Z" fill="url(#vdg-gloss)" />
        <circle cx="32" cy="32" r="17" fill="#fff" stroke="#0b4f12" stroke-opacity=".5" />
        <g fill="none" stroke="#2c8f1c" stroke-width="2"><ellipse cx="32" cy="32" rx="7" ry="17" /><path d="M15 32h34M18 24h28M18 40h28" /></g>
        <rect x="4.500" y="4.500" width="55" height="55" rx="14.500" fill="none" stroke="#fff" stroke-opacity=".55" />
      </symbol>

      <!-- Base de données -->
      <symbol id="vdi-database" viewBox="0 0 64 64">
        <rect x="4" y="4" width="56" height="56" rx="15" fill="url(#vdg-orange)" stroke="#6e3000" stroke-opacity=".7" />
        <path d="M8 26C8 12 17 6 32 6s24 6 24 20c-12 10-36 10-48 0Z" fill="url(#vdg-gloss)" />
        <g fill="#fff" stroke="#6e3000" stroke-opacity=".5"><path d="M17 20v24c0 4 6 7 15 7s15-3 15-7V20c0 4-6 7-15 7s-15-3-15-7Z" /><ellipse cx="32" cy="20" rx="15" ry="6" /></g>
        <path d="M17 31c0 4 6 7 15 7s15-3 15-7M17 40c0 4 6 7 15 7s15-3 15-7" fill="none" stroke="#e08a1f" stroke-width="1.800" />
        <rect x="4.500" y="4.500" width="55" height="55" rx="14.500" fill="none" stroke="#fff" stroke-opacity=".55" />
      </symbol>

      <!-- Couches (frameworks) -->
      <symbol id="vdi-layers" viewBox="0 0 64 64">
        <rect x="4" y="4" width="56" height="56" rx="15" fill="url(#vdg-purple)" stroke="#2f0f66" stroke-opacity=".7" />
        <path d="M8 26C8 12 17 6 32 6s24 6 24 20c-12 10-36 10-48 0Z" fill="url(#vdg-gloss)" />
        <g stroke="#2f0f66" stroke-opacity=".5" stroke-linejoin="round"><path d="m32 44 18-9-18-9-18 9Z" fill="#cfa8ff" /><path d="m32 37 18-9-18-9-18 9Z" fill="#e6d0ff" /><path d="m32 30 18-9-18-9-18 9Z" fill="#fff" /></g>
        <rect x="4.500" y="4.500" width="55" height="55" rx="14.500" fill="none" stroke="#fff" stroke-opacity=".55" />
      </symbol>

      <!-- PDF -->
      <symbol id="vdi-pdf" viewBox="0 0 64 64">
        <path d="M13 4h26l14 14v38a4 4 0 0 1-4 4H13a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4Z" fill="url(#vdg-paper)" stroke="#6d7f95" />
        <path d="M39 4v10a4 4 0 0 0 4 4h10Z" fill="#c7d4e3" stroke="#6d7f95" />
        <rect x="9" y="30" width="44" height="17" rx="2" fill="url(#vdg-red)" stroke="#6a0e05" stroke-opacity=".6" />
        <text x="31" y="43.500" text-anchor="middle" font-family="Arial, sans-serif" font-weight="700" font-size="12" fill="#fff">PDF</text>
        <path d="M9 31h44v5c-14 4-30 4-44 0Z" fill="#fff" opacity=".28" />
      </symbol>

      <!-- Corbeille -->
      <symbol id="vdi-trash" viewBox="0 0 64 64">
        <path d="M14 18h36l-3 38a4 4 0 0 1-4 3.600H21a4 4 0 0 1-4-3.600Z" fill="#cfeaff" fill-opacity=".72" stroke="#4d7ea8" />
        <path d="M17 24h30" stroke="#fff" stroke-opacity=".9" stroke-width="2" />
        <path d="M10 14c0-3 3-4 6-4h32c3 0 6 1 6 4v3H10Z" fill="url(#vdg-blue)" stroke="#0b3a73" stroke-opacity=".7" />
        <path d="M26 9v-2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2" fill="none" stroke="#4d7ea8" stroke-width="2.500" />
        <g fill="none" stroke="#3fb82a" stroke-width="3.500" stroke-linecap="round" stroke-linejoin="round"><path d="M26 38l5-8 5 8" /><path d="M24 44h16" /></g>
        <path d="M18 24h8l-2 32h-4Z" fill="#fff" opacity=".45" />
      </symbol>

      <!-- Réseaux -->
      <symbol id="vdi-github" viewBox="0 0 24 24">
        <path fill="currentColor" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.800 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.070 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.230.957-.266 1.983-.399 3.003-.404 1.020.005 2.047.138 3.006.404 2.291-1.552 3.297-1.230 3.297-1.230.653 1.653.242 2.874.118 3.176.770.840 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.430.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </symbol>
      <symbol id="vdi-linkedin" viewBox="0 0 24 24">
        <path fill="currentColor" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.500-12.268c-.966 0-1.750-.790-1.750-1.764s.784-1.764 1.750-1.764 1.750.790 1.750 1.764-.783 1.764-1.750 1.764zm13.500 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </symbol>
    </svg>
  `,
})
export class VdSpriteComponent {}

@Component({
  selector: "vd-icon",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  template: `<svg
    class="vd-ico"
    [attr.width]="size"
    [attr.height]="size"
    [attr.viewBox]="viewBox"
    aria-hidden="true"
    focusable="false"
  >
    <use [attr.href]="'#vdi-' + name" />
  </svg>`,
  styles: [
    `
      vd-icon {
        display: inline-flex;
        flex: none;
        line-height: 0;
      }
      .vd-ico {
        display: block;
        overflow: visible;
      }
    `,
  ],
})
export class VdIconComponent {
  @Input({ required: true }) name = "";
  @Input() size = 32;

  get viewBox(): string {
    return this.name === "github" || this.name === "linkedin"
      ? "0 0 24 24"
      : "0 0 64 64";
  }
}
