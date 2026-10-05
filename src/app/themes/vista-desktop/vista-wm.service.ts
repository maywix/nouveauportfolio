import { Injectable, computed, signal } from "@angular/core";

export type AppId =
  | "welcome"
  | "explorer"
  | "control"
  | "mail"
  | "messenger"
  | "player";

export interface AppDef {
  title: string;
  icon: string;
  w: number;
  h: number;
}

export const APP_DEFS: Record<AppId, AppDef> = {
  welcome: { title: "Centre de bienvenue", icon: "welcome", w: 800, h: 540 },
  explorer: { title: "Projets", icon: "projects", w: 900, h: 590 },
  control: {
    title: "Panneau de configuration — Compétences",
    icon: "skills",
    w: 840,
    h: 570,
  },
  mail: { title: "Courrier — Parcours", icon: "mail", w: 900, h: 570 },
  messenger: {
    title: "Maxime Farruggia — Conversation",
    icon: "messenger",
    w: 680,
    h: 560,
  },
  player: { title: "Lecteur multimédia", icon: "player", w: 780, h: 540 },
};

export interface WinState {
  id: AppId;
  title: string;
  icon: string;
  x: number;
  y: number;
  w: number;
  h: number;
  z: number;
  minimized: boolean;
  maximized: boolean;
  /** Paramètres transmis à l'application (catégorie, sélection…). */
  props: Record<string, unknown>;
}

/** Gestionnaire de fenêtres du bureau (une instance par bureau). */
@Injectable()
export class VistaWm {
  readonly windows = signal<WinState[]>([]);
  /** Dimensions de la zone de bureau (hors barre des tâches). */
  readonly area = signal({ w: 1280, h: 720 });
  readonly compact = signal(false);
  /** Incrémenté pour faire trembler une fenêtre (« wizz »). */
  readonly shakeTick = signal<{ id: AppId; n: number } | null>(null);

  readonly activeId = computed<AppId | null>(() => {
    const visible = this.windows().filter((win) => !win.minimized);
    if (!visible.length) {
      return null;
    }
    return visible.reduce((top, win) => (win.z > top.z ? win : top)).id;
  });

  private z = 10;
  private nonce = 0;

  open(app: AppId, props: Record<string, unknown> = {}): void {
    const existing = this.windows().find((win) => win.id === app);
    if (existing) {
      this.windows.update((list) =>
        list.map((win) =>
          win.id === app
            ? {
                ...win,
                minimized: false,
                z: ++this.z,
                props: { ...win.props, ...props, nonce: ++this.nonce },
              }
            : win
        )
      );
      return;
    }

    const def = APP_DEFS[app];
    const area = this.area();
    const w = Math.min(def.w, Math.max(320, area.w - 24));
    const h = Math.min(def.h, Math.max(260, area.h - 24));
    const n = this.windows().length;
    const x = Math.max(8, Math.round((area.w - w) / 2) + (n % 5) * 28 - 56);
    const y = Math.max(8, Math.round((area.h - h) / 2) + (n % 5) * 24 - 48);
    this.windows.update((list) => [
      ...list,
      {
        id: app,
        title: def.title,
        icon: def.icon,
        x,
        y,
        w,
        h,
        z: ++this.z,
        minimized: false,
        maximized: false,
        props: { ...props, nonce: ++this.nonce },
      },
    ]);
  }

  focus(id: AppId): void {
    const win = this.windows().find((entry) => entry.id === id);
    if (!win || (this.activeId() === id && !win.minimized)) {
      return;
    }
    this.patch(id, { z: ++this.z, minimized: false });
  }

  minimize(id: AppId): void {
    this.patch(id, { minimized: true });
  }

  /** Clic sur le bouton de la barre des tâches. */
  toggleFromTaskbar(id: AppId): void {
    const win = this.windows().find((entry) => entry.id === id);
    if (!win) {
      return;
    }
    if (win.minimized || this.activeId() !== id) {
      this.patch(id, { minimized: false, z: ++this.z });
    } else {
      this.patch(id, { minimized: true });
    }
  }

  toggleMaximize(id: AppId): void {
    const win = this.windows().find((entry) => entry.id === id);
    if (win) {
      this.patch(id, { maximized: !win.maximized, z: ++this.z });
    }
  }

  close(id: AppId): void {
    this.windows.update((list) => list.filter((win) => win.id !== id));
  }

  move(id: AppId, x: number, y: number): void {
    this.patch(id, { x, y });
  }

  resize(id: AppId, x: number, y: number, w: number, h: number): void {
    this.patch(id, { x, y, w, h });
  }

  minimizeAll(): void {
    this.windows.update((list) =>
      list.map((win) => ({ ...win, minimized: true }))
    );
  }

  restoreAll(): void {
    this.windows.update((list) =>
      list.map((win) => ({ ...win, minimized: false }))
    );
  }

  closeAll(): void {
    this.windows.set([]);
  }

  shake(id: AppId): void {
    this.shakeTick.set({ id, n: ++this.nonce });
  }

  private patch(id: AppId, changes: Partial<WinState>): void {
    this.windows.update((list) =>
      list.map((win) => (win.id === id ? { ...win, ...changes } : win))
    );
  }
}
