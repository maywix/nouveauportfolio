import {
  AfterViewChecked,
  Component,
  DestroyRef,
  ElementRef,
  ViewChild,
  ViewEncapsulation,
  inject,
  signal,
} from "@angular/core";
import { PROFILE } from "../../../data/portfolio.data";
import { AeroBuddyComponent } from "../../../shared/aero-buddy.component";
import { VdIconComponent } from "../vista-icons.component";
import { VistaWm } from "../vista-wm.service";

interface Message {
  from: "me" | "you" | "sys";
  text?: string;
  actions?: boolean;
  time: string;
}

function stamp(): string {
  return new Date().toLocaleTimeString("fr-FR", {
    hour: "2-digit",
    minute: "2-digit",
  });
}

/** Fenêtre de discussion : la section Contact. */
@Component({
  selector: "vd-messenger",
  standalone: true,
  imports: [VdIconComponent, AeroBuddyComponent],
  encapsulation: ViewEncapsulation.None,
  templateUrl: "./vista-messenger.component.html",
  styleUrl: "./vista-messenger.component.css",
})
export class VdMessengerComponent implements AfterViewChecked {
  readonly profile = PROFILE;
  readonly messages = signal<Message[]>([
    { from: "sys", text: "Maxime Farruggia est en ligne.", time: stamp() },
  ]);
  readonly typing = signal(true);
  draft = "";

  @ViewChild("log") private log?: ElementRef<HTMLElement>;

  private readonly wm = inject(VistaWm);
  private stickToBottom = true;
  private readonly timers: number[] = [];

  constructor() {
    const script: string[] = [
      "Salut ! 👋 Je suis Maxime, motion designer & développeur web.",
      this.profile.contactIntro,
      "Je suis actuellement à la recherche d'un stage de 13 semaines dans le domaine de l'audiovisuel ou du développement web.",
    ];
    let delay = 650;
    script.forEach((text, i) => {
      this.timers.push(
        window.setTimeout(() => {
          this.push({ from: "me", text, time: stamp() });
          if (i === script.length - 1) {
            this.typing.set(false);
            this.push({ from: "me", actions: true, time: stamp() });
          }
        }, delay)
      );
      delay += 900 + text.length * 12;
    });
    inject(DestroyRef).onDestroy(() =>
      this.timers.forEach((id) => window.clearTimeout(id))
    );
  }

  ngAfterViewChecked(): void {
    if (this.stickToBottom && this.log) {
      const el = this.log.nativeElement;
      el.scrollTop = el.scrollHeight;
    }
  }

  private push(message: Message): void {
    this.stickToBottom = true;
    this.messages.update((list) => [...list, message]);
  }

  onDraft(event: Event): void {
    this.draft = (event.target as HTMLTextAreaElement).value;
  }

  onKey(event: KeyboardEvent): void {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      this.send();
    }
  }

  send(): void {
    const text = this.draft.trim();
    if (!text) {
      return;
    }
    this.push({ from: "you", text, time: stamp() });
    this.push({
      from: "sys",
      text: "Ouverture de votre messagerie pour envoyer ce message…",
      time: stamp(),
    });
    this.draft = "";
    const subject = encodeURIComponent("Contact depuis votre portfolio");
    const body = encodeURIComponent(text);
    const a = document.createElement("a");
    a.href = `mailto:${this.profile.email}?subject=${subject}&body=${body}`;
    a.click();
  }

  wizz(): void {
    this.wm.shake("messenger");
    this.push({ from: "sys", text: "Vous avez envoyé un wizz !", time: stamp() });
  }
}
