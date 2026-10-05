import { Component, ViewEncapsulation, inject } from "@angular/core";
import { PROFILE } from "../../../data/portfolio.data";
import { AeroBuddyComponent } from "../../../shared/aero-buddy.component";
import { VdIconComponent } from "../vista-icons.component";
import { VistaWm } from "../vista-wm.service";

interface Tile {
  icon: string;
  title: string;
  text: string;
  action: () => void;
}

/** « Centre de bienvenue » : la présentation + les raccourcis vers les apps. */
@Component({
  selector: "vd-welcome",
  standalone: true,
  imports: [VdIconComponent, AeroBuddyComponent],
  encapsulation: ViewEncapsulation.None,
  template: `
    <div class="vd-wc">
      <header class="vd-wc__hero">
        <div class="vd-wc__avatar"><app-aero-buddy tone="green" /></div>
        <div class="vd-wc__who">
          <p class="vd-wc__hello">Bienvenue</p>
          <h1 class="vd-wc__name">{{ profile.fullName }}</h1>
          <p class="vd-wc__role">{{ profile.role }}</p>
        </div>
      </header>

      <div class="vd-wc__scroll">
        <section class="vd-wc__panel" aria-labelledby="vd-wc-about">
          <h2 id="vd-wc-about" class="vd-wc__h">Afficher les détails de ce portfolio</h2>
          <dl class="vd-wc__dl">
            <dt>À propos</dt>
            <dd>{{ profile.about }}</dd>
            <dt>Spécialités</dt>
            <dd class="vd-wc__chips">
              @for (chip of profile.chips; track chip) {
                <span class="vd-chip">{{ chip }}</span>
              }
            </dd>
            <dt>Disponibilité</dt>
            <dd>
              <span class="vd-led" aria-hidden="true"></span>
              {{ profile.availability }}
            </dd>
          </dl>
        </section>

        <h2 class="vd-wc__h vd-wc__h--big">Pour commencer</h2>
        <div class="vd-wc__tiles">
          @for (tile of tiles; track tile.title) {
            <button type="button" class="vd-tile" (click)="tile.action()">
              <vd-icon [name]="tile.icon" [size]="44" />
              <span class="vd-tile__txt">
                <strong>{{ tile.title }}</strong>
                <small>{{ tile.text }}</small>
              </span>
            </button>
          }
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .vd-wc {
        display: flex;
        flex-direction: column;
        height: 100%;
        min-height: 0;
        background: #fff;
      }
      .vd-wc__hero {
        flex: none;
        display: flex;
        align-items: center;
        gap: 18px;
        padding: 16px 24px 14px;
        background: linear-gradient(105deg, #d6ecff 0%, #f1f8ff 55%, #fff 100%);
        border-bottom: 1px solid #c3d8ec;
        position: relative;
        overflow: hidden;
      }
      .vd-wc__hero::after {
        content: "";
        position: absolute;
        right: -60px;
        top: -80px;
        width: 260px;
        height: 260px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(120, 210, 255, 0.5), transparent 70%);
      }
      .vd-wc__avatar {
        width: 62px;
        flex: none;
      }
      .vd-wc__hello {
        margin: 0;
        font: 300 15px/1 "Segoe UI", "Open Sans", sans-serif;
        letter-spacing: 0.06em;
        color: #3a78b8;
        text-transform: uppercase;
      }
      .vd-wc__name {
        margin: 2px 0 0;
        font: 300 34px/1.1 "Segoe UI", "Open Sans", sans-serif;
        color: #0b3d80;
      }
      .vd-wc__role {
        margin: 3px 0 0;
        font-size: 13.5px;
        color: #345;
      }
      .vd-wc__scroll {
        flex: 1;
        min-height: 0;
        overflow: auto;
        padding: 16px 24px 22px;
      }
      .vd-wc__panel {
        border: 1px solid #b9cfe4;
        border-radius: 5px;
        background: linear-gradient(#fbfdff, #eef5fb);
        padding: 10px 16px 12px;
        box-shadow: inset 0 1px 0 #fff;
      }
      .vd-wc__h {
        margin: 0 0 8px;
        font: 400 14px/1.3 "Segoe UI", "Open Sans", sans-serif;
        color: #0b4fb5;
      }
      .vd-wc__h--big {
        margin: 20px 0 10px;
        font-size: 22px;
        font-weight: 300;
        color: #1a3f78;
        padding-bottom: 6px;
        border-bottom: 1px solid #d3e1ef;
      }
      .vd-wc__dl {
        display: grid;
        grid-template-columns: 110px 1fr;
        gap: 6px 14px;
        margin: 0;
        font-size: 13px;
        line-height: 1.5;
        color: #222;
      }
      .vd-wc__dl dt {
        color: #55677a;
      }
      .vd-wc__dl dd {
        margin: 0;
      }
      .vd-wc__chips {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
      }
      .vd-chip {
        padding: 2px 10px;
        border-radius: 999px;
        border: 1px solid #8fb1d3;
        background: linear-gradient(#fff, #dcebf8 52%, #c8def2 54%, #e3effa);
        font-size: 12px;
        color: #17406e;
        box-shadow: inset 0 1px 0 #fff;
      }
      .vd-led {
        display: inline-block;
        width: 10px;
        height: 10px;
        margin-right: 6px;
        border-radius: 50%;
        vertical-align: -1px;
        background: radial-gradient(circle at 35% 30%, #eaffd8, #3ed02a 55%, #0c7a0a);
        box-shadow: 0 0 6px #4cff35;
        animation: vd-pulse 2.4s ease-in-out infinite;
      }
      .vd-wc__tiles {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 8px 14px;
      }
      @media (max-width: 640px) {
        .vd-wc__tiles {
          grid-template-columns: 1fr;
        }
        .vd-wc__dl {
          grid-template-columns: 1fr;
          gap: 0;
        }
        .vd-wc__dl dd {
          margin-bottom: 8px;
        }
        .vd-wc__name {
          font-size: 26px;
        }
      }
      .vd-tile {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 9px 12px;
        border: 1px solid transparent;
        border-radius: 5px;
        background: transparent;
        text-align: left;
        cursor: pointer;
        font-family: inherit;
        color: #111;
        transition: background 0.15s, border-color 0.15s, box-shadow 0.15s;
      }
      .vd-tile:hover,
      .vd-tile:focus-visible {
        outline: none;
        border-color: #7da2ce;
        background: linear-gradient(#f4faff, #d8ebfb 50%, #c9e2f8 52%, #dcedfb);
        box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.8), 0 0 8px rgba(80, 170, 255, 0.35);
      }
      .vd-tile__txt {
        display: flex;
        flex-direction: column;
        gap: 1px;
      }
      .vd-tile__txt strong {
        font-weight: 400;
        font-size: 14px;
        color: #0b4fb5;
      }
      .vd-tile__txt small {
        font-size: 12px;
        color: #556;
      }
      @keyframes vd-pulse {
        50% {
          box-shadow: 0 0 11px #7dff5e;
          filter: brightness(1.15);
        }
      }
    `,
  ],
})
export class VdWelcomeComponent {
  readonly profile = PROFILE;
  private readonly wm = inject(VistaWm);

  readonly tiles: Tile[] = [
    {
      icon: "projects",
      title: "Parcourir mes projets",
      text: "Vidéo, graphic design, 3D et développement web",
      action: () => this.wm.open("explorer"),
    },
    {
      icon: "skills",
      title: "Voir mes compétences",
      text: "Design, vidéo, motion, front-end et back-end",
      action: () => this.wm.open("control"),
    },
    {
      icon: "mail",
      title: "Lire mon parcours",
      text: "Expériences professionnelles, formation et diplômes",
      action: () => this.wm.open("mail"),
    },
    {
      icon: "messenger",
      title: "Discuter avec moi",
      text: "Une idée de projet ? Une collaboration ?",
      action: () => this.wm.open("messenger"),
    },
  ];
}
