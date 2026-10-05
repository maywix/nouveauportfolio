import {
  Component,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges,
  ViewEncapsulation,
  effect,
  inject,
} from "@angular/core";
import { VdIconComponent } from "./vista-icons.component";
import { VistaWm, WinState } from "./vista-wm.service";

type ResizeEdge = "e" | "s" | "se" | "w" | "sw";

const MIN_W = 340;
const MIN_H = 240;

/** Fenêtre « Aero Glass » : verre dépoli, reflets, boutons de légende. */
@Component({
  selector: "vd-window",
  standalone: true,
  imports: [VdIconComponent],
  encapsulation: ViewEncapsulation.None,
  templateUrl: "./vista-window.component.html",
  styleUrl: "./vista-window.component.css",
})
export class VdWindowComponent implements OnChanges {
  @Input({ required: true }) win!: WinState;
  @Input() active = false;

  closing = false;
  shaking = false;

  private readonly wm = inject(VistaWm);
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);

  constructor() {
    effect(() => {
      const tick = this.wm.shakeTick();
      if (tick && tick.id === this.win?.id) {
        this.shaking = false;
        // Force le redémarrage de l'animation CSS.
        requestAnimationFrame(() => {
          this.shaking = true;
          window.setTimeout(() => (this.shaking = false), 650);
        });
      }
    });
  }

  get compact(): boolean {
    return this.wm.compact();
  }

  ngOnChanges(changes: SimpleChanges): void {
    const change = changes["win"];
    if (change && this.win.minimized) {
      this.aimAtTaskbarButton();
    }
  }

  focus(): void {
    this.wm.focus(this.win.id);
  }

  minimize(event: Event): void {
    event.stopPropagation();
    this.aimAtTaskbarButton();
    this.wm.minimize(this.win.id);
  }

  toggleMaximize(event?: Event): void {
    event?.stopPropagation();
    if (this.compact) {
      return;
    }
    this.wm.toggleMaximize(this.win.id);
  }

  close(event: Event): void {
    event.stopPropagation();
    this.closing = true;
    window.setTimeout(() => this.wm.close(this.win.id), 170);
  }

  /** Oriente l'animation de réduction vers le bouton de la barre des tâches. */
  private aimAtTaskbarButton(): void {
    const el = this.host.nativeElement.querySelector<HTMLElement>(".vd-win");
    const btn = document.querySelector<HTMLElement>(
      `[data-vd-task="${this.win.id}"]`
    );
    if (!el || !btn) {
      return;
    }
    const a = el.getBoundingClientRect();
    const b = btn.getBoundingClientRect();
    el.style.setProperty(
      "--vd-tx",
      `${Math.round(b.left + b.width / 2 - (a.left + a.width / 2))}px`
    );
    el.style.setProperty(
      "--vd-ty",
      `${Math.round(b.top + b.height / 2 - (a.top + a.height / 2))}px`
    );
  }

  startDrag(event: PointerEvent): void {
    if (
      event.button !== 0 ||
      this.win.maximized ||
      this.compact ||
      (event.target as HTMLElement).closest("button")
    ) {
      return;
    }
    const el = this.host.nativeElement.querySelector<HTMLElement>(".vd-win");
    if (!el) {
      return;
    }
    event.preventDefault();
    this.focus();
    const area = this.wm.area();
    const startX = event.clientX;
    const startY = event.clientY;
    const originX = this.win.x;
    const originY = this.win.y;
    let nx = originX;
    let ny = originY;
    el.classList.add("vd-win--dragging");

    const move = (e: PointerEvent): void => {
      nx = originX + e.clientX - startX;
      ny = originY + e.clientY - startY;
      nx = Math.min(Math.max(nx, 120 - this.win.w), area.w - 120);
      ny = Math.min(Math.max(ny, 0), area.h - 34);
      el.style.left = `${nx}px`;
      el.style.top = `${ny}px`;
    };
    const up = (): void => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
      window.removeEventListener("pointercancel", up);
      el.classList.remove("vd-win--dragging");
      this.wm.move(this.win.id, nx, ny);
    };
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
    window.addEventListener("pointercancel", up);
  }

  startResize(event: PointerEvent, edge: ResizeEdge): void {
    if (event.button !== 0 || this.win.maximized || this.compact) {
      return;
    }
    const el = this.host.nativeElement.querySelector<HTMLElement>(".vd-win");
    if (!el) {
      return;
    }
    event.preventDefault();
    event.stopPropagation();
    this.focus();
    const startX = event.clientX;
    const startY = event.clientY;
    const { x, y, w, h } = this.win;
    let nx = x;
    let nw = w;
    let nh = h;
    el.classList.add("vd-win--dragging");

    const move = (e: PointerEvent): void => {
      const dx = e.clientX - startX;
      const dy = e.clientY - startY;
      if (edge.includes("e")) {
        nw = Math.max(MIN_W, w + dx);
      }
      if (edge.includes("w")) {
        nw = Math.max(MIN_W, w - dx);
        nx = x + (w - nw);
      }
      if (edge.includes("s")) {
        nh = Math.max(MIN_H, h + dy);
      }
      el.style.left = `${nx}px`;
      el.style.width = `${nw}px`;
      el.style.height = `${nh}px`;
    };
    const up = (): void => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
      window.removeEventListener("pointercancel", up);
      el.classList.remove("vd-win--dragging");
      this.wm.resize(this.win.id, nx, y, nw, nh);
    };
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
    window.addEventListener("pointercancel", up);
  }
}
