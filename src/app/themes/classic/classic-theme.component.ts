import { CommonModule } from "@angular/common";
import {
  AfterViewInit,
  Component,
  NgZone,
  OnDestroy,
  ViewChild,
} from "@angular/core";
import gsap from "gsap";
import { CompetencesComponent } from "../../components/competences/competences.component";
import { ContactComponent } from "../../components/contact/contact.component";
import { HeaderComponent } from "../../components/header/header.component";
import { HeroComponent } from "../../components/hero/hero.component";
import { ProjectsComponent } from "../../components/projects/projects.component";
import { SiteFooterComponent } from "../../components/site-footer/site-footer.component";
import { TimelineComponent } from "../../components/timeline/timeline.component";

/**
 * Thème « mode normal » : le portfolio d'origine, à l'identique.
 * La logique (animations GSAP, reveal des sections) vient de l'ancien
 * AppComponent, déplacée ici pour pouvoir être montée/démontée par le
 * sélecteur de thèmes.
 */
@Component({
  selector: "app-classic-theme",
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    HeroComponent,
    CompetencesComponent,
    ProjectsComponent,
    TimelineComponent,
    ContactComponent,
    SiteFooterComponent,
  ],
  templateUrl: "./classic-theme.component.html",
  styles: [":host { display: block; }"],
})
export class ClassicThemeComponent implements AfterViewInit, OnDestroy {
  @ViewChild(HeroComponent) private heroComponent?: HeroComponent;

  private observer?: IntersectionObserver;

  constructor(private readonly zone: NgZone) {}

  ngAfterViewInit(): void {
    this.prepareSectionsForReveal();
    this.setupSectionObserver();
    this.heroComponent?.animateIntro();
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  private prepareSectionsForReveal(): void {
    this.zone.runOutsideAngular(() => {
      const sections = Array.from(
        document.querySelectorAll<HTMLElement>("main section")
      );
      sections.forEach((section) => {
        gsap.set(section, { autoAlpha: 0, y: 20 });
      });
    });
  }

  private setupSectionObserver(): void {
    this.zone.runOutsideAngular(() => {
      const sections = Array.from(
        document.querySelectorAll<HTMLElement>("main section")
      );
      const observer = new IntersectionObserver(
        (entries: IntersectionObserverEntry[]) => {
          entries.forEach((entry: IntersectionObserverEntry) => {
            if (entry.isIntersecting) {
              gsap.to(entry.target, {
                autoAlpha: 1,
                y: 0,
                duration: 0.8,
                ease: "power2.out",
              });
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12 }
      );
      this.observer = observer;

      sections.forEach((section) => observer.observe(section));
    });
  }
}
