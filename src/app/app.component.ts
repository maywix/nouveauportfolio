import { Component, inject } from "@angular/core";
import { AdminComponent } from "./admin/admin.component";
import { ThemeService } from "./core/theme.service";
import { AeroCinemaComponent } from "./themes/aero-cinema/aero-cinema.component";
import { AeroHorizonComponent } from "./themes/aero-horizon/aero-horizon.component";
import { ClassicThemeComponent } from "./themes/classic/classic-theme.component";
import { VistaDesktopComponent } from "./themes/vista-desktop/vista-desktop.component";

/**
 * Sélecteur de thème : monte le layout correspondant au thème actif.
 * Les thèmes Aero sont chargés à la demande (@defer) : un visiteur du
 * « mode normal » ne télécharge jamais leur code.
 */
@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    AdminComponent,
    ClassicThemeComponent,
    VistaDesktopComponent,
    AeroHorizonComponent,
    AeroCinemaComponent,
  ],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  readonly theme = inject(ThemeService);
}
