import {
  AfterViewChecked,
  Component,
  ElementRef,
  ViewChild,
  inject,
  signal,
} from "@angular/core";
import { SITE_CONFIG } from "../config/site.config";
import { ThemeId, ThemeInfo } from "../config/themes";
import { ThemeService } from "../core/theme.service";

@Component({
  selector: "app-admin",
  standalone: true,
  imports: [],
  templateUrl: "./admin.component.html",
  styleUrl: "./admin.component.css",
})
export class AdminComponent implements AfterViewChecked {
  readonly theme = inject(ThemeService);
  readonly publicTheme = SITE_CONFIG.publicTheme;

  passcode = "";
  readonly error = signal(false);
  readonly busy = signal(false);
  readonly copied = signal<ThemeId | null>(null);

  @ViewChild("passInput") private passInput?: ElementRef<HTMLInputElement>;
  @ViewChild("dialog") private dialog?: ElementRef<HTMLElement>;
  private focusedOnce = false;

  ngAfterViewChecked(): void {
    if (!this.theme.panelOpen()) {
      this.focusedOnce = false;
      return;
    }
    if (this.focusedOnce) {
      return;
    }
    const target = this.passInput?.nativeElement ?? this.dialog?.nativeElement;
    if (target) {
      this.focusedOnce = true;
      target.focus();
    }
  }

  onPasscodeInput(event: Event): void {
    this.passcode = (event.target as HTMLInputElement).value;
    this.error.set(false);
  }

  async submit(event: Event): Promise<void> {
    event.preventDefault();
    if (this.busy()) {
      return;
    }
    this.busy.set(true);
    const ok = await this.theme.login(this.passcode);
    this.busy.set(false);
    this.error.set(!ok);
    if (ok) {
      this.passcode = "";
      this.focusedOnce = false;
    }
  }

  isActive(info: ThemeInfo): boolean {
    return this.theme.current() === info.id;
  }

  choose(info: ThemeInfo): void {
    this.theme.set(info.id);
    // Le bouton cliqué devient désactivé (thème actif) : on garde le focus
    // dans la boîte de dialogue pour que le clavier (Échap, Tab) continue de marcher.
    this.dialog?.nativeElement.focus();
  }

  async copyConfig(info: ThemeInfo, event: Event): Promise<void> {
    event.stopPropagation();
    const snippet = `publicTheme: "${info.id}",`;
    try {
      await navigator.clipboard.writeText(snippet);
    } catch {
      window.prompt("Copie cette ligne dans site.config.ts :", snippet);
    }
    this.copied.set(info.id);
    window.setTimeout(() => this.copied.set(null), 2200);
  }

  themeLabel(id: ThemeId): string {
    return this.theme.themes.find((entry) => entry.id === id)?.name ?? id;
  }
}
