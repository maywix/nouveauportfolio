import {
  Component,
  DestroyRef,
  ViewEncapsulation,
  computed,
  inject,
  signal,
} from "@angular/core";

function useNow(intervalMs: number) {
  const now = signal(new Date());
  const destroyRef = inject(DestroyRef);
  const id = window.setInterval(() => now.set(new Date()), intervalMs);
  destroyRef.onDestroy(() => window.clearInterval(id));
  return now;
}

/** Gadget horloge analogique (verre + aiguilles). */
@Component({
  selector: "vd-clock",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  template: `
    <div class="vd-clock" role="img" [attr.aria-label]="label()">
      <div class="vd-clock__face">
        @for (tick of ticks; track tick) {
          <i class="vd-clock__tick" [style.transform]="'rotate(' + tick * 30 + 'deg)'"></i>
        }
        <b class="vd-clock__hand vd-clock__hand--h" [style.transform]="'rotate(' + hourDeg() + 'deg)'"></b>
        <b class="vd-clock__hand vd-clock__hand--m" [style.transform]="'rotate(' + minuteDeg() + 'deg)'"></b>
        <b class="vd-clock__hand vd-clock__hand--s" [style.transform]="'rotate(' + secondDeg() + 'deg)'"></b>
        <span class="vd-clock__pin"></span>
        <span class="vd-clock__gloss"></span>
      </div>
    </div>
  `,
  styles: [
    `
      .vd-clock {
        width: 124px;
        height: 124px;
        padding: 6px;
        border-radius: 50%;
        background: linear-gradient(145deg, #dbe9f5, #6d8aa6 55%, #2c3e52);
        box-shadow: 0 6px 16px rgba(0, 0, 0, 0.55),
          inset 0 1px 2px rgba(255, 255, 255, 0.9);
      }
      .vd-clock__face {
        position: relative;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background: radial-gradient(circle at 50% 38%, #25496e, #0a1b30 75%);
        box-shadow: inset 0 3px 10px rgba(0, 0, 0, 0.8);
        overflow: hidden;
      }
      .vd-clock__tick {
        position: absolute;
        left: 50%;
        top: 4px;
        width: 2px;
        height: 7px;
        margin-left: -1px;
        border-radius: 1px;
        background: #bfe6ff;
        transform-origin: 50% 52px;
      }
      .vd-clock__hand {
        position: absolute;
        left: 50%;
        bottom: 50%;
        display: block;
        border-radius: 3px;
        transform-origin: 50% 100%;
      }
      .vd-clock__hand--h {
        width: 4px;
        height: 26px;
        margin-left: -2px;
        background: linear-gradient(#fff, #bfe3ff);
        box-shadow: 0 0 4px rgba(120, 200, 255, 0.8);
      }
      .vd-clock__hand--m {
        width: 3px;
        height: 38px;
        margin-left: -1.5px;
        background: linear-gradient(#fff, #bfe3ff);
        box-shadow: 0 0 4px rgba(120, 200, 255, 0.8);
      }
      .vd-clock__hand--s {
        width: 1.5px;
        height: 42px;
        margin-left: -0.75px;
        background: #ff5a3c;
      }
      .vd-clock__pin {
        position: absolute;
        left: 50%;
        top: 50%;
        width: 9px;
        height: 9px;
        margin: -4.5px 0 0 -4.5px;
        border-radius: 50%;
        background: radial-gradient(circle at 35% 30%, #fff, #7fb8e8 60%, #2c5d8f);
      }
      .vd-clock__gloss {
        position: absolute;
        left: 8%;
        top: 2%;
        width: 84%;
        height: 50%;
        border-radius: 50% 50% 46% 46% / 60% 60% 40% 40%;
        background: linear-gradient(rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.02));
        pointer-events: none;
      }
    `,
  ],
})
export class VdClockComponent {
  readonly ticks = Array.from({ length: 12 }, (_, i) => i);
  private readonly now = useNow(1000);

  readonly secondDeg = computed(() => this.now().getSeconds() * 6);
  readonly minuteDeg = computed(
    () => this.now().getMinutes() * 6 + this.now().getSeconds() / 10
  );
  readonly hourDeg = computed(
    () => (this.now().getHours() % 12) * 30 + this.now().getMinutes() / 2
  );
  readonly label = computed(
    () =>
      `Il est ${this.now().toLocaleTimeString("fr-FR", {
        hour: "2-digit",
        minute: "2-digit",
      })}`
  );
}

/** Horloge numérique de la zone de notification. */
@Component({
  selector: "vd-tray-clock",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  template: `
    <div class="vd-tray-clock" [attr.title]="full()">
      <span>{{ time() }}</span>
      <span class="vd-tray-clock__date">{{ date() }}</span>
    </div>
  `,
  styles: [
    `
      .vd-tray-clock {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-width: 56px;
        font: 400 11.5px/1.25 "Segoe UI", "Open Sans", sans-serif;
        color: #fff;
        text-shadow: 0 0 6px rgba(0, 0, 0, 0.9);
      }
      .vd-tray-clock__date {
        font-size: 10.5px;
        opacity: 0.92;
      }
    `,
  ],
})
export class VdTrayClockComponent {
  private readonly now = useNow(15000);
  readonly time = computed(() =>
    this.now().toLocaleTimeString("fr-FR", {
      hour: "2-digit",
      minute: "2-digit",
    })
  );
  readonly date = computed(() => this.now().toLocaleDateString("fr-FR"));
  readonly full = computed(() =>
    this.now().toLocaleDateString("fr-FR", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    })
  );
}
