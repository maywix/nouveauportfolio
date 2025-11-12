"use strict";
(self["webpackChunknouveauportfolio"] = self["webpackChunknouveauportfolio"] || []).push([[792],{

/***/ 92:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! gsap */ 9582);
/* harmony import */ var _components_competences_competences_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/competences/competences.component */ 7725);
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/contact/contact.component */ 1777);
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/header/header.component */ 385);
/* harmony import */ var _components_hero_hero_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/hero/hero.component */ 9307);
/* harmony import */ var _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/projects/projects.component */ 3607);
/* harmony import */ var _components_site_footer_site_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/site-footer/site-footer.component */ 6589);
/* harmony import */ var _components_timeline_timeline_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/timeline/timeline.component */ 5041);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7580);










class AppComponent {
  constructor(zone) {
    this.zone = zone;
  }
  ngAfterViewInit() {
    this.prepareSectionsForReveal();
    this.setupSectionObserver();
    this.heroComponent?.animateIntro();
  }
  prepareSectionsForReveal() {
    this.zone.runOutsideAngular(() => {
      const sections = Array.from(document.querySelectorAll("main section"));
      sections.forEach(section => {
        gsap__WEBPACK_IMPORTED_MODULE_7__["default"].set(section, {
          autoAlpha: 0,
          y: 20
        });
      });
    });
  }
  setupSectionObserver() {
    this.zone.runOutsideAngular(() => {
      const sections = Array.from(document.querySelectorAll("main section"));
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            gsap__WEBPACK_IMPORTED_MODULE_7__["default"].to(entry.target, {
              autoAlpha: 1,
              y: 0,
              duration: 0.8,
              ease: "power2.out"
            });
            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.12
      });
      sections.forEach(section => observer.observe(section));
    });
  }
  static {
    this.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgZone));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      viewQuery: function AppComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_components_hero_hero_component__WEBPACK_IMPORTED_MODULE_3__.HeroComponent, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.heroComponent = _t.first);
        }
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵStandaloneFeature"]],
      decls: 8,
      vars: 0,
      consts: [[1, "min-h-screen", "pt-24", "md:pt-28"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "app-header");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "main", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "app-hero")(3, "app-competences")(4, "app-projects")(5, "app-timeline")(6, "app-contact");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](7, "app-site-footer");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent, _components_hero_hero_component__WEBPACK_IMPORTED_MODULE_3__.HeroComponent, _components_competences_competences_component__WEBPACK_IMPORTED_MODULE_0__.CompetencesComponent, _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_4__.ProjectsComponent, _components_timeline_timeline_component__WEBPACK_IMPORTED_MODULE_6__.TimelineComponent, _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_1__.ContactComponent, _components_site_footer_site_footer_component__WEBPACK_IMPORTED_MODULE_5__.SiteFooterComponent],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0FBQ2hCIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 7725:
/*!*****************************************************************!*\
  !*** ./src/app/components/competences/competences.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CompetencesComponent: () => (/* binding */ CompetencesComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);


class CompetencesComponent {
  static {
    this.ɵfac = function CompetencesComponent_Factory(t) {
      return new (t || CompetencesComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CompetencesComponent,
      selectors: [["app-competences"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 119,
      vars: 0,
      consts: [["id", "competences", 1, "container", "mx-auto", "px-6", "py-20"], [1, "text-3xl", "mb-12"], [1, "grid", "grid-cols-1", "lg:grid-cols-2", "gap-8"], [1, "p-8", "bg-accent/5", "rounded-2xl", "backdrop-blur-sm", "border", "border-accent/10"], [1, "text-2xl", "mb-8"], [1, "mb-8"], [1, "text-xl", "mb-4", "text-accent/90"], [1, "space-y-4"], [1, "flex", "items-center", "gap-4"], ["viewBox", "0 0 24 24", "fill", "currentColor", 1, "w-6", "h-6", "text-accent/80"], ["d", "M6 2a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6H6zm0 2h7v5h5v11H6V4zm3 8v2h6v-2H9zm0 3v2h6v-2H9z"], ["d", "M6 2a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6H6zm0 2h7v5h5v11H6V4zm2 8v6h2.5v-2h2v2H15v-6h-2.5v2h-2V10H8z"], ["d", "M6 2a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6H6zm0 2h7v5h5v11H6V4zm2 8v6h8v-2H10v-1h4v-2h-4v-1h6V10H8z"], ["d", "M6 2a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6H6zm0 2h7v5h5v11H6V4zm2 7l3 3-3 3h2l3-3-3-3H8z"], ["d", "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3z"], ["d", "M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm0 2v12h16V6H4zm6 2l6 4-6 4V8z"], ["d", "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.14-7-7 3.14-7 7-7zm-3 6v4l5-2-5-2z"], ["d", "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"], ["d", "M12 18.178l-4.62-1.256-.328-3.544h2.27l.158 1.844 2.52.667 2.52-.667.26-2.866H6.96l-.635-6.678h11.35l-.227 2.21H8.822l.204 2.256h8.217l-.624 6.778L12 18.178z"], ["d", "M3 3h18v18H3V3zm16.525 13.707c-.131-.821-.666-1.511-2.252-2.155-.552-.259-1.165-.438-1.349-.854-.068-.248-.078-.382-.034-.528.113-.484.687-.629 1.137-.495.293.09.563.315.732.676.775-.507.775-.507 1.316-.844-.203-.314-.304-.451-.439-.586-.473-.528-1.103-.798-2.126-.775l-.528.067c-.507.124-.991.395-1.283.754-.855.968-.608 2.655.427 3.354 1.023.765 2.521.933 2.712 1.653.18.878-.652 1.159-1.475 1.058-.607-.136-.945-.439-1.316-1.002l-1.372.788c.157.359.337.517.607.832 1.305 1.316 4.568 1.249 5.153-.754.021-.067.18-.528.056-1.237l.034.049zm-6.737-5.434h-1.686c0 1.453-.007 2.898-.007 4.354 0 .924.047 1.772-.104 2.033-.247.517-.886.451-1.175.359-.297-.146-.448-.349-.623-.641-.047-.078-.082-.146-.095-.146l-1.368.844c.229.473.563.879.994 1.137.641.383 1.502.507 2.404.305.588-.17 1.095-.519 1.358-1.059.384-.697.302-1.553.299-2.509.008-1.541 0-3.083 0-4.635l.003-.042z"], ["d", "M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0 2c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zm1 3v2h-2v-2h2zm0 3v6h-2v-6h2z"], ["d", "M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1 15h2v2h-2v-2zm2-1.645V14h-2v1.355c-1.468.316-2.683 1.351-3.194 2.749l1.876.702c.276-.753.998-1.294 1.848-1.294s1.572.541 1.848 1.294l1.876-.702c-.511-1.398-1.726-2.433-3.194-2.749z"], ["d", "M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0 2c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zm2.828 3.172l1.414 1.414-4.242 4.242-1.414-1.414 4.242-4.242zm-5.656 5.656l1.414 1.414-1.414 1.414-1.414-1.414 1.414-1.414z"]],
      template: function CompetencesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "h2", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Comp\u00E9tences");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2)(4, "div", 3)(5, "h3", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Design/Cr\u00E9ation");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5)(8, "h4", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Design");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul", 7)(11, "li", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "svg", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "path", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Photoshop");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "svg", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "path", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Illustrator");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "svg", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "path", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "InDesign");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "svg", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "path", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Lightroom");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "svg", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "path", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Blender");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 5)(37, "h4", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Vid\u00E9o, Motion Design");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "ul", 7)(40, "li", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "svg", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "path", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Premiere Pro");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "li", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "svg", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "path", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "After Effects");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div")(51, "h4", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "UX/UI Design");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "ul", 7)(54, "li", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "svg", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "path", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Figma");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 3)(60, "h3", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "D\u00E9veloppement web");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 5)(63, "h4", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Front-end");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "ul", 7)(66, "li", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "svg", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "path", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "HTML");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "li", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "svg", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "path", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "CSS");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "li", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "svg", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "path", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "JavaScript");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 5)(82, "h4", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Back-end");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "ul", 7)(85, "li", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "svg", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "path", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "PHP");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "li", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "svg", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "path", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "MySQL");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "li", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "svg", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "path", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Python");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "li", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "svg", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "path", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "C++ / C# / Java");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div")(106, "h4", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Frameworks");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "ul", 7)(109, "li", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "svg", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "path", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "Bootstrap");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "li", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "svg", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "path", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "Tailwind CSS");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9jb21wZXRlbmNlcy9jb21wZXRlbmNlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztBQUNoQiIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 1777:
/*!*********************************************************!*\
  !*** ./src/app/components/contact/contact.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContactComponent: () => (/* binding */ ContactComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);


class ContactComponent {
  static {
    this.ɵfac = function ContactComponent_Factory(t) {
      return new (t || ContactComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ContactComponent,
      selectors: [["app-contact"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 29,
      vars: 0,
      consts: [["id", "contact", 1, "container", "mx-auto", "px-6", "py-20"], [1, "text-4xl", "mb-6"], [1, "text-xl", "mb-12", "text-accent/90"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-12"], [1, "bg-accent/5", "p-8", "rounded-2xl", "backdrop-blur-sm", "border", "border-accent/10"], [1, "text-2xl", "mb-6"], [1, "text-accent/80", "mb-8"], ["href", "assets/CV-Maxime-Farruggia.pdf", "download", "", 1, "inline-flex", "items-center", "gap-3", "bg-accent", "text-primary", "px-6", "py-3", "rounded-full", "hover:bg-accent/90", "transition-colors"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"], [1, "flex", "items-center", "gap-6", "mb-8"], ["href", "https://github.com/", "target", "_blank", "rel", "noopener", 1, "text-accent", "hover:text-accent/80", "transition-colors"], ["viewBox", "0 0 24 24", "fill", "currentColor", 1, "w-8", "h-8"], ["d", "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"], ["href", "https://linkedin.com/", "target", "_blank", "rel", "noopener", 1, "text-accent", "hover:text-accent/80", "transition-colors"], ["d", "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"], [1, "text-2xl", "mb-4"], ["href", "mailto:farruggiamaxime@gmail.com", 1, "text-accent", "hover:text-accent/80", "transition-colors"]],
      template: function ContactComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "h2", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Contactez-moi");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Une id\u00E9e de projet ? Une collaboration ? N'h\u00E9sitez pas \u00E0 me contacter pour discuter de vos besoins. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3)(6, "div", 4)(7, "h3", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "T\u00E9l\u00E9charger mon CV");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Je suis actuellement \u00E0 la recherche d'un stage de 13 semaines dans le domaine de l'audiovisuel ou du d\u00E9veloppement web. Vous pouvez t\u00E9l\u00E9charger mon CV en cliquant sur le bouton ci-dessous. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "svg", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "path", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " T\u00E9l\u00E9charger mon CV ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 4)(16, "h3", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "R\u00E9seaux sociaux");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10)(19, "a", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "svg", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "path", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "svg", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "path", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h3", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "E-mail");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " farruggiamaxime@gmail.com ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7QUFDaEIiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 385:
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeaderComponent: () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);



function HeaderComponent_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
}
function HeaderComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function HeaderComponent_div_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31)(1, "div", 32)(2, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_div_42_Template_a_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.closeMenu());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Pr\u00E9sentation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_div_42_Template_a_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.closeMenu());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Comp\u00E9tences");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_div_42_Template_a_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.closeMenu());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Projets");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_div_42_Template_a_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.closeMenu());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Parcours");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_div_42_Template_a_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.closeMenu());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Contact");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 38)(13, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_div_42_Template_a_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.closeMenu());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "svg", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "g", 17)(16, "g", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "g", 19)(18, "title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "github [#142]");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "desc");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Created with Sketch.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "defs");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "g", 20)(24, "g", 21)(25, "g", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "path", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_div_42_Template_a_click_27_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.closeMenu());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "svg", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "g", 17)(30, "g", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "g", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "path", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
  }
}
class HeaderComponent {
  constructor() {
    this.isMenuOpen = false;
  }
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  closeMenu() {
    this.isMenuOpen = false;
  }
  static {
    this.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 43,
      vars: 4,
      consts: [["closeIcon", ""], [1, "fixed", "inset-x-0", "top-0", "z-50", "border-b", "border-white/10", "backdrop-blur-lg"], [1, "relative"], [1, "container", "mx-auto", "px-6", "py-4", "flex", "items-center", "justify-between", "gap-6"], ["href", "#presentation", 1, "text-xs", "md:text-sm", "tracking-[0.35em]", "uppercase", "text-accent", "font-semibold", 3, "click"], ["type", "button", "aria-label", "Ouvrir le menu", 1, "md:hidden", "inline-flex", "items-center", "justify-center", "w-11", "h-11", "rounded-full", "border", "border-white/15", "text-accent", "transition-colors", "duration-200", "hover:bg-white/10", 3, "click"], [4, "ngIf", "ngIfElse"], [1, "hidden", "md:flex", "items-center", "gap-10"], [1, "flex", "items-center", "gap-3", "text-sm", "tracking-wide"], ["href", "#presentation", 1, "px-4", "py-2", "rounded-full", "transition-colors", "duration-300", "hover:bg-white/10", "hover:text-accent"], ["href", "#competences", 1, "px-4", "py-2", "rounded-full", "transition-colors", "duration-300", "hover:bg-white/10", "hover:text-accent"], ["href", "#projets", 1, "px-4", "py-2", "rounded-full", "transition-colors", "duration-300", "hover:bg-white/10", "hover:text-accent"], ["href", "#parcours", 1, "px-4", "py-2", "rounded-full", "transition-colors", "duration-300", "hover:bg-white/10", "hover:text-accent"], ["href", "#contact", 1, "px-4", "py-2", "rounded-full", "transition-colors", "duration-300", "hover:bg-white/10", "hover:text-accent"], [1, "flex", "items-center", "gap-4"], ["href", "https://github.com/maywix", "aria-label", "GitHub", 1, "transition-transform", "duration-200", "hover:scale-105"], ["viewBox", "0 0 20 20", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", 1, "w-8", "h-8"], ["id", "SVGRepo_bgCarrier", "stroke-width", "0"], ["id", "SVGRepo_tracerCarrier", "stroke-linecap", "round", "stroke-linejoin", "round"], ["id", "SVGRepo_iconCarrier"], ["id", "Page-1", "stroke", "none", "stroke-width", "1", "fill", "none", "fill-rule", "evenodd"], ["id", "Dribbble-Light-Preview", "transform", "translate(-140.000000, -7559.000000)", "fill", "#F7F7A8"], ["id", "icons", "transform", "translate(56.000000, 160.000000)"], ["d", "M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399", "id", "github-[#142]"], ["href", "https://www.linkedin.com/in/maxime-farruggia-24b015339/", "aria-label", "LinkedIn", 1, "transition-transform", "duration-200", "hover:scale-105"], ["viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", "stroke", "##F7F7A8", 1, "w-10", "h-10"], ["d", "M18.72 3.99997H5.37C5.19793 3.99191 5.02595 4.01786 4.86392 4.07635C4.70189 4.13484 4.55299 4.22471 4.42573 4.34081C4.29848 4.45692 4.19537 4.59699 4.12232 4.75299C4.04927 4.909 4.0077 5.07788 4 5.24997V18.63C4.01008 18.9901 4.15766 19.3328 4.41243 19.5875C4.6672 19.8423 5.00984 19.9899 5.37 20H18.72C19.0701 19.9844 19.4002 19.8322 19.6395 19.5761C19.8788 19.32 20.0082 18.9804 20 18.63V5.24997C20.0029 5.08247 19.9715 4.91616 19.9078 4.76122C19.8441 4.60629 19.7494 4.466 19.6295 4.34895C19.5097 4.23191 19.3672 4.14059 19.2108 4.08058C19.0544 4.02057 18.8874 3.99314 18.72 3.99997ZM9 17.34H6.67V10.21H9V17.34ZM7.89 9.12997C7.72741 9.13564 7.5654 9.10762 7.41416 9.04768C7.26291 8.98774 7.12569 8.89717 7.01113 8.78166C6.89656 8.66615 6.80711 8.5282 6.74841 8.37647C6.6897 8.22474 6.66301 8.06251 6.67 7.89997C6.66281 7.73567 6.69004 7.57169 6.74995 7.41854C6.80986 7.26538 6.90112 7.12644 7.01787 7.01063C7.13463 6.89481 7.2743 6.80468 7.42793 6.74602C7.58157 6.68735 7.74577 6.66145 7.91 6.66997C8.07259 6.66431 8.2346 6.69232 8.38584 6.75226C8.53709 6.8122 8.67431 6.90277 8.78887 7.01828C8.90344 7.13379 8.99289 7.27174 9.05159 7.42347C9.1103 7.5752 9.13699 7.73743 9.13 7.89997C9.13719 8.06427 9.10996 8.22825 9.05005 8.3814C8.99014 8.53456 8.89888 8.6735 8.78213 8.78931C8.66537 8.90513 8.5257 8.99526 8.37207 9.05392C8.21843 9.11259 8.05423 9.13849 7.89 9.12997ZM17.34 17.34H15V13.44C15 12.51 14.67 11.87 13.84 11.87C13.5822 11.8722 13.3313 11.9541 13.1219 12.1045C12.9124 12.2549 12.7546 12.4664 12.67 12.71C12.605 12.8926 12.5778 13.0865 12.59 13.28V17.34H10.29V10.21H12.59V11.21C12.7945 10.8343 13.0988 10.5225 13.4694 10.3089C13.84 10.0954 14.2624 9.98848 14.69 9.99997C16.2 9.99997 17.34 11 17.34 13.13V17.34Z", "fill", "#F7F7A8"], ["class", "md:hidden absolute top-full inset-x-0 border-b border-white/10 bg-[#043f44]/95 backdrop-blur-lg", 4, "ngIf"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "1.5", 1, "h-6", "w-6"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M4 7h16M4 12h16M4 17h16"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M6 6l12 12M6 18L18 6"], [1, "md:hidden", "absolute", "top-full", "inset-x-0", "border-b", "border-white/10", "bg-[#043f44]/95", "backdrop-blur-lg"], [1, "container", "mx-auto", "px-6", "py-4", "flex", "flex-col", "gap-3", "text-sm"], ["href", "#presentation", 1, "px-4", "py-3", "rounded-full", "transition-colors", "duration-200", "hover:bg-white/10", "hover:text-accent", 3, "click"], ["href", "#competences", 1, "px-4", "py-3", "rounded-full", "transition-colors", "duration-200", "hover:bg-white/10", "hover:text-accent", 3, "click"], ["href", "#projets", 1, "px-4", "py-3", "rounded-full", "transition-colors", "duration-200", "hover:bg-white/10", "hover:text-accent", 3, "click"], ["href", "#parcours", 1, "px-4", "py-3", "rounded-full", "transition-colors", "duration-200", "hover:bg-white/10", "hover:text-accent", 3, "click"], ["href", "#contact", 1, "px-4", "py-3", "rounded-full", "transition-colors", "duration-200", "hover:bg-white/10", "hover:text-accent", 3, "click"], [1, "pt-4", "mt-3", "border-t", "border-white/10", "flex", "gap-4"], ["href", "https://github.com/maywix", "aria-label", "GitHub", 1, "transition-transform", "duration-200", "hover:scale-105", 3, "click"], ["href", "https://www.linkedin.com/in/maxime-farruggia-24b015339/", "aria-label", "LinkedIn", 1, "transition-transform", "duration-200", "hover:scale-105", 3, "click"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 1)(1, "div", 2)(2, "div", 3)(3, "a", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.closeMenu());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Maxime Farruggia ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.toggleMenu());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HeaderComponent_ng_container_6_Template, 3, 0, "ng-container", 6)(7, HeaderComponent_ng_template_7_Template, 2, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7)(10, "nav", 8)(11, "a", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Pr\u00E9sentation");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Comp\u00E9tences");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Projets");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Parcours");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Contact");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 14)(22, "a", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "svg", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "g", 17)(25, "g", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "g", 19)(27, "title");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "github [#142]");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "desc");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Created with Sketch.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "defs");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "g", 20)(33, "g", 21)(34, "g", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "path", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "svg", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "g", 17)(39, "g", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "g", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "path", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, HeaderComponent_div_42_Template, 33, 0, "div", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          const closeIcon_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", ctx.isMenuOpen);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isMenuOpen)("ngIfElse", closeIcon_r4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](36);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isMenuOpen);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0FBQ2hCIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 9307:
/*!***************************************************!*\
  !*** ./src/app/components/hero/hero.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeroComponent: () => (/* binding */ HeroComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap */ 9582);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);




const _c0 = ["heroWord"];
const _c1 = ["heroLetter"];
const _c2 = (a0, a1) => [a0, a1];
function HeroComponent_ng_container_4_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 16, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const letter_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", letter_r1, " ");
  }
}
function HeroComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 14, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HeroComponent_ng_container_4_span_3_Template, 3, 1, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const letters_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mt-8", i_r3 === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", letters_r2);
  }
}
function HeroComponent_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const chip_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("w-24", chip_r4 === "3D");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", chip_r4, " ");
  }
}
class HeroComponent {
  constructor(zone) {
    this.zone = zone;
    this.firstNameLetters = "MAXIME".split("");
    this.lastNameLetters = "FARRUGGIA".split("");
    this.chips = ["Montage Vidéo", "Développement Web", "3D", "Motion/Graphic Design"];
    this.viewInitialized = false;
    this.animationQueued = false;
  }
  ngAfterViewInit() {
    this.viewInitialized = true;
    this.zone.runOutsideAngular(() => {
      this.heroWords.forEach(word => {
        word.nativeElement.style.visibility = "hidden";
        gsap__WEBPACK_IMPORTED_MODULE_1__["default"].set(word.nativeElement, {
          letterSpacing: "0rem",
          opacity: 0
        });
      });
      this.heroLetters.forEach(letter => {
        gsap__WEBPACK_IMPORTED_MODULE_1__["default"].set(letter.nativeElement, {
          opacity: 0
        });
      });
    });
    if (this.animationQueued) {
      this.animationQueued = false;
      this.playIntroAnimation();
    }
  }
  animateIntro() {
    this.animationQueued = true;
    if (!this.viewInitialized) {
      return;
    }
    this.animationQueued = false;
    this.playIntroAnimation();
  }
  playIntroAnimation() {
    this.zone.runOutsideAngular(() => {
      const words = this.heroWords.toArray().map(word => word.nativeElement);
      const letters = this.heroLetters.toArray().map(letter => letter.nativeElement);
      if (!words.length || !letters.length) {
        return;
      }
      words.forEach(word => {
        word.style.visibility = "visible";
      });
      gsap__WEBPACK_IMPORTED_MODULE_1__["default"].set(words, {
        letterSpacing: "0rem",
        opacity: 0
      });
      gsap__WEBPACK_IMPORTED_MODULE_1__["default"].set(letters, {
        opacity: 0
      });
      gsap__WEBPACK_IMPORTED_MODULE_1__["default"].to(letters, {
        opacity: 1,
        duration: 0.4,
        stagger: 0.05
      });
      gsap__WEBPACK_IMPORTED_MODULE_1__["default"].to(words, {
        letterSpacing: "1.2rem",
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.1,
        onComplete: () => {
          gsap__WEBPACK_IMPORTED_MODULE_1__["default"].to(words, {
            letterSpacing: "0.6rem",
            duration: 0.6,
            ease: "elastic.out(1, 0.6)",
            stagger: 0.1
          });
        }
      });
    });
  }
  static {
    this.ɵfac = function HeroComponent_Factory(t) {
      return new (t || HeroComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeroComponent,
      selectors: [["app-hero"]],
      viewQuery: function HeroComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.heroWords = _t);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.heroLetters = _t);
        }
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 16,
      vars: 5,
      consts: [["heroWord", ""], ["heroLetter", ""], ["id", "presentation", 1, "container", "mx-auto", "px-6", "py-16", "min-h-screen", "flex", "flex-col", "md:flex-row", "items-start", "gap-8"], [1, "w-full", "md:w-2/3", "relative"], ["src", "svg/fondpres.svg", "alt", "fond", 1, "hidden", "md:block", "absolute", "left-0", "top-0", "opacity-10", "pointer-events-none"], ["id", "heroName", 1, "text-6xl", "md:text-8xl", "font-extralight", "leading-tight", "tracking-wide", "uppercase"], [4, "ngFor", "ngForOf"], [1, "mt-12", "grid", "grid-cols-2", "gap-6", "max-w-2xl"], [1, "w-full", "md:w-1/3"], [1, "bg-accent/6", "p-6", "rounded-2xl", "backdrop-blur-sm"], [1, "text-lg", "text-accent", "mb-3"], [1, "text-sm", "text-accent/90"], [1, "mt-4", "flex", "gap-3"], ["href", "#contact", 1, "text-sm", "bg-accent", "text-primary", "px-3", "py-2", "rounded-full"], [1, "hero-word", "block"], ["class", "hero-letter inline-block", 4, "ngFor", "ngForOf"], [1, "hero-letter", "inline-block"], [1, "px-6", "py-3", "bg-accent/10", "rounded-full", "shadow-inner", "text-accent/95", "tracking-widest"]],
      template: function HeroComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 2)(1, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HeroComponent_ng_container_4_Template, 4, 3, "ng-container", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HeroComponent_ng_container_6_Template, 3, 3, "ng-container", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "aside", 8)(8, "div", 9)(9, "h3", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u00C0 propos");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Je suis Maxime, motion designer & d\u00E9veloppeur web. J'explore le design d'interfaces, la vid\u00E9o et l'exp\u00E9rience utilisateur. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 12)(14, "a", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Contactez-moi ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c2, ctx.firstNameLetters, ctx.lastNameLetters));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.chips);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9oZXJvL2hlcm8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7QUFDaEIiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 3607:
/*!***********************************************************!*\
  !*** ./src/app/components/projects/projects.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProjectsComponent: () => (/* binding */ ProjectsComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 436);




function ProjectsComponent_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectsComponent_button_8_Template_button_click_0_listener() {
      const option_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.selectCategory(option_r2.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r2.activeCategory === option_r2.value ? "projects-filter--active" : "projects-filter--idle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r2.label, " ");
  }
}
function ProjectsComponent_div_9_div_1_article_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article", 16)(1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "iframe", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div")(4, "h4", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r2.toSafeUrl(item_r4.embedUrl), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeResourceUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r4.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r4.description, " ");
  }
}
function ProjectsComponent_div_9_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12)(1, "h3", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProjectsComponent_div_9_div_1_article_4_Template, 8, 3, "article", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const section_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](section_r5.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", section_r5.items);
  }
}
function ProjectsComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProjectsComponent_div_9_div_1_Template, 5, 2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.videoSections);
  }
}
function ProjectsComponent_div_10_div_1_p_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const carousel_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", carousel_r7.description, " ");
  }
}
function ProjectsComponent_div_10_div_1_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32)(1, "article", 33)(2, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Moodboard & maquettes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const slide_r9 = ctx.$implicit;
    const slideIndex_r10 = ctx.index;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const carousel_r7 = ctx_r10.$implicit;
    const idx_r8 = ctx_r10.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r2.getCarouselStyles("graphic", idx_r8, slideIndex_r10));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", slideIndex_r10 + 1, " / ", carousel_r7.slides.length, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](slide_r9.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", slide_r9.description, " ");
  }
}
function ProjectsComponent_div_10_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23)(1, "div", 24)(2, "h3", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProjectsComponent_div_10_div_1_p_4_Template, 2, 1, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 27)(6, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectsComponent_div_10_div_1_Template_button_click_6_listener() {
      const idx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6).index;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.previousSlide("graphic", idx_r8));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " \u2039 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ProjectsComponent_div_10_div_1_div_8_Template, 10, 5, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectsComponent_div_10_div_1_Template_button_click_9_listener() {
      const idx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6).index;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.nextSlide("graphic", idx_r8));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " \u203A ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const carousel_r7 = ctx.$implicit;
    const idx_r8 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](carousel_r7.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", carousel_r7.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("projects-nav--disabled", !ctx_r2.canGoPrev("graphic", idx_r8));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r2.canGoPrev("graphic", idx_r8));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", carousel_r7.slides);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("projects-nav--disabled", !ctx_r2.canGoNext("graphic", idx_r8));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r2.canGoNext("graphic", idx_r8));
  }
}
function ProjectsComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProjectsComponent_div_10_div_1_Template, 11, 9, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.graphicCarousels);
  }
}
function ProjectsComponent_div_11_div_1_p_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const carousel_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", carousel_r13.description, " ");
  }
}
function ProjectsComponent_div_11_div_1_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32)(1, "article", 38)(2, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Rendus & lighting");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const slide_r15 = ctx.$implicit;
    const slideIndex_r16 = ctx.index;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const carousel_r13 = ctx_r16.$implicit;
    const idx_r14 = ctx_r16.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r2.getCarouselStyles("threeD", idx_r14, slideIndex_r16));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", slideIndex_r16 + 1, " / ", carousel_r13.slides.length, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](slide_r15.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", slide_r15.description, " ");
  }
}
function ProjectsComponent_div_11_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23)(1, "div", 24)(2, "h3", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProjectsComponent_div_11_div_1_p_4_Template, 2, 1, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 27)(6, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectsComponent_div_11_div_1_Template_button_click_6_listener() {
      const idx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12).index;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.previousSlide("threeD", idx_r14));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " \u2039 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ProjectsComponent_div_11_div_1_div_8_Template, 10, 5, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectsComponent_div_11_div_1_Template_button_click_9_listener() {
      const idx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12).index;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.nextSlide("threeD", idx_r14));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " \u203A ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const carousel_r13 = ctx.$implicit;
    const idx_r14 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](carousel_r13.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", carousel_r13.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("projects-nav--disabled", !ctx_r2.canGoPrev("threeD", idx_r14));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r2.canGoPrev("threeD", idx_r14));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", carousel_r13.slides);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("projects-nav--disabled", !ctx_r2.canGoNext("threeD", idx_r14));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r2.canGoNext("threeD", idx_r14));
  }
}
function ProjectsComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProjectsComponent_div_11_div_1_Template, 11, 9, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.threeDCarousels);
  }
}
function ProjectsComponent_div_12_div_1_p_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const carousel_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", carousel_r19.description, " ");
  }
}
function ProjectsComponent_div_12_div_1_div_8_a_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Voir le site \u2197 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const slide_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", slide_r21.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
  }
}
function ProjectsComponent_div_12_div_1_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32)(1, "article", 33)(2, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ProjectsComponent_div_12_div_1_div_8_a_8_Template, 2, 1, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const slide_r21 = ctx.$implicit;
    const slideIndex_r22 = ctx.index;
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const carousel_r19 = ctx_r22.$implicit;
    const idx_r20 = ctx_r22.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r2.getCarouselStyles("web", idx_r20, slideIndex_r22));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", slideIndex_r22 + 1, " / ", carousel_r19.slides.length, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](slide_r21.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", slide_r21.description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", slide_r21.link && ctx_r2.webIndices[idx_r20] === slideIndex_r22);
  }
}
function ProjectsComponent_div_12_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23)(1, "div", 24)(2, "h3", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProjectsComponent_div_12_div_1_p_4_Template, 2, 1, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 27)(6, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectsComponent_div_12_div_1_Template_button_click_6_listener() {
      const idx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18).index;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.previousSlide("web", idx_r20));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " \u2039 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ProjectsComponent_div_12_div_1_div_8_Template, 9, 6, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectsComponent_div_12_div_1_Template_button_click_9_listener() {
      const idx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18).index;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.nextSlide("web", idx_r20));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " \u203A ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const carousel_r19 = ctx.$implicit;
    const idx_r20 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](carousel_r19.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", carousel_r19.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("projects-nav--disabled", !ctx_r2.canGoPrev("web", idx_r20));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r2.canGoPrev("web", idx_r20));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", carousel_r19.slides);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("projects-nav--disabled", !ctx_r2.canGoNext("web", idx_r20));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r2.canGoNext("web", idx_r20));
  }
}
function ProjectsComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProjectsComponent_div_12_div_1_Template, 11, 9, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.webCarousels);
  }
}
class ProjectsComponent {
  constructor(sanitizer) {
    this.sanitizer = sanitizer;
    this.categoryOptions = [{
      label: "Montage vidéo / Motion design",
      value: "video"
    }, {
      label: "Graphic design",
      value: "graphic"
    }, {
      label: "3D",
      value: "threeD"
    }, {
      label: "Développement web",
      value: "web"
    }];
    this.videoSections = [{
      title: "Montage vidéo",
      items: [{
        title: "Aftermovie - Placeholder",
        description: "Montage dynamique avec transitions rythmées et sound design immersif.",
        embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
      }, {
        title: "Interview - Placeholder",
        description: "Montage d'interview avec habillage graphique et sous-titrage.",
        embedUrl: "https://www.youtube.com/embed/oHg5SJYRHA0"
      }]
    }, {
      title: "Motion design",
      items: [{
        title: "Explainer animé - Placeholder",
        description: "Séquence motion design illustrant un produit digital en flat design.",
        embedUrl: "https://www.youtube.com/embed/2vjPBrBU-TM"
      }, {
        title: "Identité animée - Placeholder",
        description: "Animation de logo et typographie cinétique pour une direction artistique.",
        embedUrl: "https://www.youtube.com/embed/aqz-KE-bpKQ"
      }]
    }];
    this.graphicCarousels = [{
      title: "Identités visuelles",
      description: "Brand books, déclinaisons print et cohérence multi-supports pour des marques en lancement.",
      slides: [{
        title: "Branding café",
        description: "Palette douce, packaging éco-responsable et déclinaisons réseaux."
      }, {
        title: "Rebrand tech",
        description: "Système modulaire, pictogrammes sur mesure et guidelines complètes."
      }, {
        title: "Studio photo",
        description: "Logo minimaliste, monogramme et brochures pour un studio créatif."
      }]
    }, {
      title: "Affiches & print",
      description: "Campagnes grand format et séries limitées avec un soin porté aux textures et finitions.",
      slides: [{
        title: "Festival musique",
        description: "Affiche typographique avec textures grainées et déclinaisons web."
      }, {
        title: "Expo immersive",
        description: "Série d'affiches néon avec effets de profondeur et QR codes."
      }, {
        title: "Campagne associative",
        description: "Set de flyers et roll-ups en double langue, mise en page accessible."
      }]
    }, {
      title: "Social media",
      description: "Templates dynamiques pensés pour engager les communautés sur tous les formats clés.",
      slides: [{
        title: "Stories mode",
        description: "Animations verticales, typographie audacieuse et filtres photo."
      }, {
        title: "Lancements produit",
        description: "Carrousels Instagram avec mockups 3D et CTA optimisés."
      }, {
        title: "Calendrier éditorial",
        description: "Templates adaptables pour publications LinkedIn & TikTok."
      }]
    }];
    this.threeDCarousels = [{
      title: "Modélisation",
      description: "Pièces détaillées ou low-poly, optimisées pour l'animation comme pour le temps réel.",
      slides: [{
        title: "Mobilier futuriste",
        description: "Concept chaise générée dans Blender avec matériaux PBR."
      }, {
        title: "Architecture low-poly",
        description: "Scène urbaine stylisée optimisée pour le temps réel."
      }, {
        title: "VFX props",
        description: "Accessoires sci-fi, UV clean et textures 4K."
      }]
    }, {
      title: "Rendu & lighting",
      description: "Expérimentations autour des lumières, textures réalistes et ambiances narratives.",
      slides: [{
        title: "Still life produits",
        description: "Set luxe avec HDRI, caustiques et depth of field réaliste."
      }, {
        title: "Environnement nocturne",
        description: "Lighting volumétrique et post-process dans Unreal Engine."
      }, {
        title: "Character rim light",
        description: "Portrait 3D stylisé, shading peau et rim dramatique."
      }]
    }];
    this.webCarousels = [{
      title: "Applications web",
      description: "Interfaces orientées produit avec design systems maintenables et workflows fluides.",
      slides: [{
        title: "Dashboard analytics",
        description: "Interface responsive avec charts custom et dark mode.",
        link: "https://example.com/dashboard"
      }, {
        title: "Plateforme e-learning",
        description: "Parcours utilisateur gamifié, accessibilité niveau AA.",
        link: "https://example.com/e-learning"
      }, {
        title: "Portail évènementiel",
        description: "Intégration Angular & API headless pour billetterie.",
        link: "https://example.com/event"
      }]
    }, {
      title: "Sites vitrines",
      description: "Expériences immersives qui valorisent la marque tout en restant performantes.",
      slides: [{
        title: "Studio créatif",
        description: "Animations GSAP, typographie variable et assets optimisés.",
        link: "https://example.com/studio"
      }, {
        title: "Restaurant gastronomique",
        description: "Menu interactif, réservation en ligne et micro-interactions.",
        link: "https://example.com/restaurant"
      }, {
        title: "Portfolio photo",
        description: "Galerie masonry, lazy loading et mode clair/sombre.",
        link: "https://example.com/photo"
      }]
    }];
    this.graphicIndices = this.graphicCarousels.map(() => 0);
    this.threeDIndices = this.threeDCarousels.map(() => 0);
    this.webIndices = this.webCarousels.map(() => 0);
    this.activeCategory = "video";
    this.maxVisibility = 3;
  }
  selectCategory(category) {
    this.activeCategory = category;
  }
  previousSlide(group, index) {
    const {
      indices
    } = this.resolveGroup(group);
    indices[index] = Math.max(0, indices[index] - 1);
  }
  nextSlide(group, index) {
    const {
      carousels,
      indices
    } = this.resolveGroup(group);
    const total = carousels[index].slides.length;
    indices[index] = Math.min(total - 1, indices[index] + 1);
  }
  getSlide(group, index) {
    const {
      carousels,
      indices
    } = this.resolveGroup(group);
    return carousels[index].slides[indices[index]];
  }
  getCarouselStyles(group, carouselIndex, slideIndex) {
    const {
      indices
    } = this.resolveGroup(group);
    const active = indices[carouselIndex];
    const offset = (active - slideIndex) / this.maxVisibility;
    const absOffset = Math.abs(active - slideIndex) / this.maxVisibility;
    const direction = Math.sign(active - slideIndex);
    const hidden = Math.abs(active - slideIndex) > this.maxVisibility;
    const faded = Math.abs(active - slideIndex) >= this.maxVisibility;
    const zIndex = (100 - Math.abs(active - slideIndex)).toString();
    return {
      "--active": active === slideIndex ? "1" : "0",
      "--offset": offset.toString(),
      "--direction": direction.toString(),
      "--abs-offset": absOffset.toString(),
      "pointer-events": active === slideIndex ? "auto" : "none",
      opacity: faded ? "0" : "1",
      display: hidden ? "none" : "block",
      "z-index": zIndex
    };
  }
  canGoPrev(group, index) {
    const {
      indices
    } = this.resolveGroup(group);
    return indices[index] > 0;
  }
  canGoNext(group, index) {
    const {
      carousels,
      indices
    } = this.resolveGroup(group);
    return indices[index] < carousels[index].slides.length - 1;
  }
  toSafeUrl(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
  resolveGroup(group) {
    switch (group) {
      case "graphic":
        return {
          carousels: this.graphicCarousels,
          indices: this.graphicIndices
        };
      case "threeD":
        return {
          carousels: this.threeDCarousels,
          indices: this.threeDIndices
        };
      case "web":
      default:
        return {
          carousels: this.webCarousels,
          indices: this.webIndices
        };
    }
  }
  static {
    this.ɵfac = function ProjectsComponent_Factory(t) {
      return new (t || ProjectsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.DomSanitizer));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProjectsComponent,
      selectors: [["app-projects"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 13,
      vars: 5,
      consts: [["id", "projets", 1, "container", "mx-auto", "px-6", "py-20"], [1, "max-w-7xl", "mx-auto"], [1, "mb-12"], [1, "text-3xl", "mb-4"], [1, "text-white/60", "text-base"], [1, "flex", "flex-wrap", "gap-3", "mb-12"], ["type", "button", "class", "projects-filter", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["class", "space-y-12", 4, "ngIf"], ["class", "space-y-10", 4, "ngIf"], ["type", "button", 1, "projects-filter", 3, "click", "ngClass"], [1, "space-y-12"], ["class", "space-y-6", 4, "ngFor", "ngForOf"], [1, "space-y-6"], [1, "text-2xl"], [1, "grid", "gap-8", "md:grid-cols-2"], ["class", "p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm flex flex-col gap-4", 4, "ngFor", "ngForOf"], [1, "p-6", "bg-white/5", "border", "border-white/10", "rounded-2xl", "backdrop-blur-sm", "flex", "flex-col", "gap-4"], [1, "aspect-video", "rounded-xl", "overflow-hidden", "bg-black/60"], ["frameborder", "0", "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", "allowfullscreen", "", "title", "YouTube placeholder", 1, "w-full", "h-full", 3, "src"], [1, "text-lg"], [1, "text-white/70", "text-sm", "leading-relaxed"], [1, "space-y-10"], ["class", "projects-panel", 4, "ngFor", "ngForOf"], [1, "projects-panel"], [1, "projects-panel__header"], [1, "projects-panel__title"], ["class", "projects-panel__description", 4, "ngIf"], [1, "projects-carousel"], ["type", "button", "aria-label", "Voir le projet pr\u00E9c\u00E9dent", 1, "projects-nav", "projects-nav--prev", 3, "click", "disabled"], ["class", "project-card-container", 3, "ngStyle", 4, "ngFor", "ngForOf"], ["type", "button", "aria-label", "Voir le projet suivant", 1, "projects-nav", "projects-nav--next", 3, "click", "disabled"], [1, "projects-panel__description"], [1, "project-card-container", 3, "ngStyle"], [1, "project-card"], [1, "project-card__index"], [1, "project-card__title"], [1, "project-card__description"], [1, "project-card__tag"], [1, "project-card", "project-card--gradient"], ["class", "project-card__link", "target", "_blank", "rel", "noopener noreferrer", 3, "href", 4, "ngIf"], ["target", "_blank", "rel", "noopener noreferrer", 1, "project-card__link", 3, "href"]],
      template: function ProjectsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "h2", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Projets");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " S\u00E9lection de r\u00E9alisations organis\u00E9es par discipline. Choisissez une cat\u00E9gorie pour explorer mes productions. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ProjectsComponent_button_8_Template, 2, 2, "button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ProjectsComponent_div_9_Template, 2, 1, "div", 7)(10, ProjectsComponent_div_10_Template, 2, 1, "div", 8)(11, ProjectsComponent_div_11_Template, 2, 1, "div", 8)(12, ProjectsComponent_div_12_Template, 2, 1, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categoryOptions);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.activeCategory === "video");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.activeCategory === "graphic");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.activeCategory === "threeD");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.activeCategory === "web");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.projects-filter[_ngcontent-%COMP%] {\n  padding: 0.6rem 1.4rem;\n  border-radius: 9999px;\n  font-size: 0.85rem;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  transition: all 0.25s ease;\n}\n\n.projects-filter--active[_ngcontent-%COMP%] {\n  background: var(--accent);\n  color: #06353a;\n  box-shadow: 0 12px 30px rgba(247, 247, 168, 0.18);\n}\n\n.projects-filter--idle[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.05);\n  color: rgba(255, 255, 255, 0.65);\n  border: 1px solid rgba(255, 255, 255, 0.12);\n}\n\n.projects-filter--idle[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.12);\n  color: rgba(255, 255, 255, 0.85);\n}\n\n.projects-panel[_ngcontent-%COMP%] {\n  padding: 0;\n  border-radius: 0;\n  border: none;\n  background: transparent;\n  backdrop-filter: none;\n}\n\n.projects-panel__header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.25rem;\n  margin-bottom: 2rem;\n}\n\n.projects-panel__description[_ngcontent-%COMP%] {\n  max-width: 42rem;\n  font-size: 0.95rem;\n  line-height: 1.7;\n  color: rgba(255, 255, 255, 0.58);\n}\n\n@media (min-width: 768px) {\n  .projects-panel__header[_ngcontent-%COMP%] {\n    flex-direction: row;\n    align-items: flex-start;\n    justify-content: space-between;\n    gap: 2.5rem;\n  }\n\n  .projects-panel__description[_ngcontent-%COMP%] {\n    flex: 1;\n  }\n}\n\n.projects-panel__title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 600;\n}\n\n.projects-nav[_ngcontent-%COMP%] {\n  width: 2.75rem;\n  height: 2.75rem;\n  border-radius: 9999px;\n  border: 1px solid rgba(255, 255, 255, 0.18);\n  background: rgba(255, 255, 255, 0.04);\n  color: rgba(255, 255, 255, 0.9);\n  font-size: 1.5rem;\n  line-height: 1;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  transition: transform 0.2s ease, background 0.25s ease, color 0.25s ease;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  z-index: 150;\n}\n\n.projects-nav[_ngcontent-%COMP%]:hover {\n  transform: translateY(calc(-50% - 2px));\n  background: rgba(255, 255, 255, 0.18);\n  color: #062f33;\n}\n\n.projects-nav--prev[_ngcontent-%COMP%] {\n  left: 1.5rem;\n}\n\n.projects-nav--next[_ngcontent-%COMP%] {\n  right: 1.5rem;\n}\n\n.projects-nav--disabled[_ngcontent-%COMP%], .projects-nav--disabled[_ngcontent-%COMP%]:hover {\n  cursor: not-allowed;\n  transform: translateY(-50%);\n  background: rgba(255, 255, 255, 0.04);\n  color: rgba(255, 255, 255, 0.4);\n  border-color: rgba(255, 255, 255, 0.08);\n  pointer-events: none;\n}\n\n.projects-carousel[_ngcontent-%COMP%] {\n  position: relative;\n  width: min(100%, 54rem);\n  margin: 0 auto;\n  min-height: 26rem;\n  padding: 0 6rem;\n  display: grid;\n  place-items: center;\n  perspective: 1100px;\n  transform-style: preserve-3d;\n}\n\n.project-card-container[_ngcontent-%COMP%] {\n  position: absolute;\n  width: min(100%, 26rem);\n  height: 88%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transform: rotateY(calc(var(--offset) * 45deg))\n    scaleY(calc(1 + var(--abs-offset) * -0.28))\n    translateZ(calc(var(--abs-offset) * -30rem))\n    translateX(calc(var(--direction) * -6.5rem));\n  filter: blur(calc(var(--abs-offset) * 0.9rem));\n  transition: transform 0.35s ease, filter 0.35s ease, opacity 0.35s ease;\n}\n\n.project-card[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 2rem;\n  border-radius: 1.5rem;\n  background: linear-gradient(\n    140deg,\n    rgba(5, 43, 47, 0.85),\n    rgba(8, 66, 72, 0.65)\n  );\n  border: 1px solid rgba(255, 255, 255, 0.12);\n  color: rgba(255, 255, 255, 0.78);\n  display: flex;\n  flex-direction: column;\n  gap: 1.1rem;\n  transition: transform 0.35s ease, box-shadow 0.35s ease;\n  text-align: left;\n}\n\n.project-card--gradient[_ngcontent-%COMP%] {\n  background: linear-gradient(\n    150deg,\n    rgba(12, 72, 80, 0.9),\n    rgba(2, 24, 26, 0.7)\n  );\n}\n\n.project-card__index[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  letter-spacing: 0.6em;\n  text-transform: uppercase;\n  color: rgba(247, 247, 168, 0.65);\n}\n\n.project-card__title[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  font-weight: 600;\n  color: #f5f5f5;\n}\n\n.project-card__description[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  line-height: 1.6;\n  color: rgba(255, 255, 255, 0.72);\n}\n\n.project-card__tag[_ngcontent-%COMP%] {\n  margin-top: auto;\n  font-size: 0.7rem;\n  letter-spacing: 0.4em;\n  text-transform: uppercase;\n  color: rgba(255, 255, 255, 0.38);\n  align-self: flex-end;\n}\n\n.project-card__link[_ngcontent-%COMP%] {\n  margin-top: auto;\n  display: inline-flex;\n  align-items: center;\n  justify-content: flex-start;\n  gap: 0.35rem;\n  background: var(--accent);\n  color: #06353a;\n  padding: 0.65rem 1.2rem;\n  border-radius: 9999px;\n  font-weight: 600;\n  font-size: 0.85rem;\n  box-shadow: 0 14px 30px rgba(247, 247, 168, 0.22);\n  transition: transform 0.25s ease;\n}\n\n.project-card__link[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n}\n\n@media (max-width: 768px) {\n  .project-card-container[_ngcontent-%COMP%] {\n    width: min(100%, 19rem);\n  }\n\n  .projects-carousel[_ngcontent-%COMP%] {\n    min-height: 22rem;\n    padding: 0 3.5rem;\n  }\n\n  .projects-nav[_ngcontent-%COMP%] {\n    width: 2.4rem;\n    height: 2.4rem;\n    font-size: 1.3rem;\n  }\n\n  .projects-nav--prev[_ngcontent-%COMP%] {\n    left: 0.75rem;\n  }\n\n  .projects-nav--next[_ngcontent-%COMP%] {\n    right: 0.75rem;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wcm9qZWN0cy9wcm9qZWN0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0Qix5QkFBeUI7RUFDekIsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxpREFBaUQ7QUFDbkQ7O0FBRUE7RUFDRSxxQ0FBcUM7RUFDckMsZ0NBQWdDO0VBQ2hDLDJDQUEyQztBQUM3Qzs7QUFFQTtFQUNFLHFDQUFxQztFQUNyQyxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0U7SUFDRSxtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLDhCQUE4QjtJQUM5QixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxPQUFPO0VBQ1Q7QUFDRjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQiwyQ0FBMkM7RUFDM0MscUNBQXFDO0VBQ3JDLCtCQUErQjtFQUMvQixpQkFBaUI7RUFDakIsY0FBYztFQUNkLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLHdFQUF3RTtFQUN4RSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLDJCQUEyQjtFQUMzQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx1Q0FBdUM7RUFDdkMscUNBQXFDO0VBQ3JDLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7O0VBRUUsbUJBQW1CO0VBQ25CLDJCQUEyQjtFQUMzQixxQ0FBcUM7RUFDckMsK0JBQStCO0VBQy9CLHVDQUF1QztFQUN2QyxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCOzs7Z0RBRzhDO0VBQzlDLDhDQUE4QztFQUM5Qyx1RUFBdUU7QUFDekU7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQjs7OztHQUlDO0VBQ0QsMkNBQTJDO0VBQzNDLGdDQUFnQztFQUNoQyxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCx1REFBdUQ7RUFDdkQsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0U7Ozs7R0FJQztBQUNIOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQix5QkFBeUI7RUFDekIsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQix5QkFBeUI7RUFDekIsZ0NBQWdDO0VBQ2hDLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLDJCQUEyQjtFQUMzQixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCx1QkFBdUI7RUFDdkIscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsaURBQWlEO0VBQ2pELGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFO0lBQ0UsdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGFBQWE7SUFDYixjQUFjO0lBQ2QsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsY0FBYztFQUNoQjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnByb2plY3RzLWZpbHRlciB7XG4gIHBhZGRpbmc6IDAuNnJlbSAxLjRyZW07XG4gIGJvcmRlci1yYWRpdXM6IDk5OTlweDtcbiAgZm9udC1zaXplOiAwLjg1cmVtO1xuICBsZXR0ZXItc3BhY2luZzogMC4wOGVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZTtcbn1cblxuLnByb2plY3RzLWZpbHRlci0tYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tYWNjZW50KTtcbiAgY29sb3I6ICMwNjM1M2E7XG4gIGJveC1zaGFkb3c6IDAgMTJweCAzMHB4IHJnYmEoMjQ3LCAyNDcsIDE2OCwgMC4xOCk7XG59XG5cbi5wcm9qZWN0cy1maWx0ZXItLWlkbGUge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpO1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjY1KTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEyKTtcbn1cblxuLnByb2plY3RzLWZpbHRlci0taWRsZTpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMik7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODUpO1xufVxuXG4ucHJvamVjdHMtcGFuZWwge1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBiYWNrZHJvcC1maWx0ZXI6IG5vbmU7XG59XG5cbi5wcm9qZWN0cy1wYW5lbF9faGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxLjI1cmVtO1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xufVxuXG4ucHJvamVjdHMtcGFuZWxfX2Rlc2NyaXB0aW9uIHtcbiAgbWF4LXdpZHRoOiA0MnJlbTtcbiAgZm9udC1zaXplOiAwLjk1cmVtO1xuICBsaW5lLWhlaWdodDogMS43O1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjU4KTtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5wcm9qZWN0cy1wYW5lbF9faGVhZGVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBnYXA6IDIuNXJlbTtcbiAgfVxuXG4gIC5wcm9qZWN0cy1wYW5lbF9fZGVzY3JpcHRpb24ge1xuICAgIGZsZXg6IDE7XG4gIH1cbn1cblxuLnByb2plY3RzLXBhbmVsX190aXRsZSB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4ucHJvamVjdHMtbmF2IHtcbiAgd2lkdGg6IDIuNzVyZW07XG4gIGhlaWdodDogMi43NXJlbTtcbiAgYm9yZGVyLXJhZGl1czogOTk5OXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTgpO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDQpO1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZSwgYmFja2dyb3VuZCAwLjI1cyBlYXNlLCBjb2xvciAwLjI1cyBlYXNlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIHotaW5kZXg6IDE1MDtcbn1cblxuLnByb2plY3RzLW5hdjpob3ZlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWShjYWxjKC01MCUgLSAycHgpKTtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE4KTtcbiAgY29sb3I6ICMwNjJmMzM7XG59XG5cbi5wcm9qZWN0cy1uYXYtLXByZXYge1xuICBsZWZ0OiAxLjVyZW07XG59XG5cbi5wcm9qZWN0cy1uYXYtLW5leHQge1xuICByaWdodDogMS41cmVtO1xufVxuXG4ucHJvamVjdHMtbmF2LS1kaXNhYmxlZCxcbi5wcm9qZWN0cy1uYXYtLWRpc2FibGVkOmhvdmVyIHtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDQpO1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xuICBib3JkZXItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wOCk7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4ucHJvamVjdHMtY2Fyb3VzZWwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiBtaW4oMTAwJSwgNTRyZW0pO1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWluLWhlaWdodDogMjZyZW07XG4gIHBhZGRpbmc6IDAgNnJlbTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcbiAgcGVyc3BlY3RpdmU6IDExMDBweDtcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbn1cblxuLnByb2plY3QtY2FyZC1jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiBtaW4oMTAwJSwgMjZyZW0pO1xuICBoZWlnaHQ6IDg4JTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRyYW5zZm9ybTogcm90YXRlWShjYWxjKHZhcigtLW9mZnNldCkgKiA0NWRlZykpXG4gICAgc2NhbGVZKGNhbGMoMSArIHZhcigtLWFicy1vZmZzZXQpICogLTAuMjgpKVxuICAgIHRyYW5zbGF0ZVooY2FsYyh2YXIoLS1hYnMtb2Zmc2V0KSAqIC0zMHJlbSkpXG4gICAgdHJhbnNsYXRlWChjYWxjKHZhcigtLWRpcmVjdGlvbikgKiAtNi41cmVtKSk7XG4gIGZpbHRlcjogYmx1cihjYWxjKHZhcigtLWFicy1vZmZzZXQpICogMC45cmVtKSk7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjM1cyBlYXNlLCBmaWx0ZXIgMC4zNXMgZWFzZSwgb3BhY2l0eSAwLjM1cyBlYXNlO1xufVxuXG4ucHJvamVjdC1jYXJkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDJyZW07XG4gIGJvcmRlci1yYWRpdXM6IDEuNXJlbTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuICAgIDE0MGRlZyxcbiAgICByZ2JhKDUsIDQzLCA0NywgMC44NSksXG4gICAgcmdiYSg4LCA2NiwgNzIsIDAuNjUpXG4gICk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMik7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzgpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDEuMXJlbTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMzVzIGVhc2UsIGJveC1zaGFkb3cgMC4zNXMgZWFzZTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLnByb2plY3QtY2FyZC0tZ3JhZGllbnQge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgMTUwZGVnLFxuICAgIHJnYmEoMTIsIDcyLCA4MCwgMC45KSxcbiAgICByZ2JhKDIsIDI0LCAyNiwgMC43KVxuICApO1xufVxuXG4ucHJvamVjdC1jYXJkX19pbmRleCB7XG4gIGZvbnQtc2l6ZTogMC43cmVtO1xuICBsZXR0ZXItc3BhY2luZzogMC42ZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiByZ2JhKDI0NywgMjQ3LCAxNjgsIDAuNjUpO1xufVxuXG4ucHJvamVjdC1jYXJkX190aXRsZSB7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogI2Y1ZjVmNTtcbn1cblxuLnByb2plY3QtY2FyZF9fZGVzY3JpcHRpb24ge1xuICBmb250LXNpemU6IDAuOTVyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjY7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzIpO1xufVxuXG4ucHJvamVjdC1jYXJkX190YWcge1xuICBtYXJnaW4tdG9wOiBhdXRvO1xuICBmb250LXNpemU6IDAuN3JlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNGVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjM4KTtcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG59XG5cbi5wcm9qZWN0LWNhcmRfX2xpbmsge1xuICBtYXJnaW4tdG9wOiBhdXRvO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBnYXA6IDAuMzVyZW07XG4gIGJhY2tncm91bmQ6IHZhcigtLWFjY2VudCk7XG4gIGNvbG9yOiAjMDYzNTNhO1xuICBwYWRkaW5nOiAwLjY1cmVtIDEuMnJlbTtcbiAgYm9yZGVyLXJhZGl1czogOTk5OXB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDAuODVyZW07XG4gIGJveC1zaGFkb3c6IDAgMTRweCAzMHB4IHJnYmEoMjQ3LCAyNDcsIDE2OCwgMC4yMik7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjI1cyBlYXNlO1xufVxuXG4ucHJvamVjdC1jYXJkX19saW5rOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnByb2plY3QtY2FyZC1jb250YWluZXIge1xuICAgIHdpZHRoOiBtaW4oMTAwJSwgMTlyZW0pO1xuICB9XG5cbiAgLnByb2plY3RzLWNhcm91c2VsIHtcbiAgICBtaW4taGVpZ2h0OiAyMnJlbTtcbiAgICBwYWRkaW5nOiAwIDMuNXJlbTtcbiAgfVxuXG4gIC5wcm9qZWN0cy1uYXYge1xuICAgIHdpZHRoOiAyLjRyZW07XG4gICAgaGVpZ2h0OiAyLjRyZW07XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG4gIH1cblxuICAucHJvamVjdHMtbmF2LS1wcmV2IHtcbiAgICBsZWZ0OiAwLjc1cmVtO1xuICB9XG5cbiAgLnByb2plY3RzLW5hdi0tbmV4dCB7XG4gICAgcmlnaHQ6IDAuNzVyZW07XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 6589:
/*!*****************************************************************!*\
  !*** ./src/app/components/site-footer/site-footer.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SiteFooterComponent: () => (/* binding */ SiteFooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);


class SiteFooterComponent {
  static {
    this.ɵfac = function SiteFooterComponent_Factory(t) {
      return new (t || SiteFooterComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SiteFooterComponent,
      selectors: [["app-site-footer"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 2,
      vars: 0,
      consts: [[1, "py-8", "text-center", "text-sm", "text-accent/70"]],
      template: function SiteFooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u00A9 Maxime Farruggia\n");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9zaXRlLWZvb3Rlci9zaXRlLWZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztBQUNoQiIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 5041:
/*!***********************************************************!*\
  !*** ./src/app/components/timeline/timeline.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TimelineComponent: () => (/* binding */ TimelineComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);



function TimelineComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11)(1, "h4", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const experience_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", experience_r1.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", experience_r1.organisation, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", experience_r1.period, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", experience_r1.details, " ");
  }
}
function TimelineComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11)(1, "h4", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const diploma_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", diploma_r2.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", diploma_r2.organisation, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", diploma_r2.period, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", diploma_r2.details, " ");
  }
}
class TimelineComponent {
  constructor() {
    this.experiences = [{
      title: "Stage – Développement web",
      organisation: "Entreprise Vassil Sculptures à Meaux",
      period: "Juin 2025 – Août 2025",
      details: "Refonte entière d'un site Web en HTML, CSS, JavaScript, PHP et MySQL (plus de détails sur ce stage dans mes projets)."
    }, {
      title: "Stage de découverte de l'INA",
      organisation: "Fondation diversité et culture, égalité des chances.",
      period: "Mai 2024",
      details: "J'ai eu l'immense chance de pouvoir assister à ce stage lors de mon année de Terminale. Le but était de découvrir le monde de l'audiovisuel et de la production à travers le bâtiment de l'INA à Paris."
    }, {
      title: "Stage de 3ème",
      organisation: "Fonderie d'art Chapon à Bobigny",
      period: "Décembre 2020",
      details: "Stage dans une fonderie d'art de bronze. J'y ai appris des techniques comme le moulage ou la ciselure."
    }];
    this.education = [{
      title: "BUT MMI (Métiers du Multimédia et de l'Internet)",
      organisation: "IUT de Meaux, Université Gustave Eiffel",
      period: "Septembre 2024 – Maintenant",
      details: "Spécialisation développement web et dispositifs interactifs. Formation qui lie audiovisuel et développement web."
    }, {
      title: "Baccalauréat technologique STI2D",
      organisation: "Lycée Pierre de Coubertin à Meaux",
      period: "Septembre 2022 – Juillet 2024",
      details: "Spécialité SIN (Systèmes d'Information et Numérique). Option audiovisuel. Bac avec mention Assez Bien."
    }];
  }
  static {
    this.ɵfac = function TimelineComponent_Factory(t) {
      return new (t || TimelineComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TimelineComponent,
      selectors: [["app-timeline"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 17,
      vars: 2,
      consts: [["id", "parcours", 1, "container", "mx-auto", "px-6", "py-20"], [1, "max-w-10xl", "w-full", "mx-auto"], [1, "mb-12"], [1, "text-3xl", "mb-4"], [1, "text-base", "max-w-3xl"], [1, "grid", "gap-10", "md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]", "items-stretch"], [1, "timeline-card", "p-8", "bg-accent/5", "rounded-2xl", "backdrop-blur-sm", "border", "border-white/10", "h-full", "flex", "flex-col"], [1, "text-2xl", "mb-6"], ["class", "pb-6 mb-6 border-b border-white/10 last:mb-0 last:pb-0 last:border-none", 4, "ngFor", "ngForOf"], [1, "hidden", "md:flex", "justify-center"], [1, "w-px", "bg-white/10", "rounded-full", "h-full"], [1, "pb-6", "mb-6", "border-b", "border-white/10", "last:mb-0", "last:pb-0", "last:border-none"], [1, "text-lg", "font-semibold", "mb-1"], [1, "italic", "mb-2"], [1, "text-sm", "mb-3"], [1, "leading-relaxed"]],
      template: function TimelineComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "h2", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Parcours");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "p", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5)(7, "div", 6)(8, "h3", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Exp\u00E9riences professionnelles");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, TimelineComponent_div_10_Template, 9, 4, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6)(14, "h3", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Formation & Dipl\u00F4mes");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, TimelineComponent_div_16_Template, 9, 4, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.experiences);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.education);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy90aW1lbGluZS90aW1lbGluZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztBQUNoQiIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 4429:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3835);
/* harmony import */ var _app_app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.component */ 92);



(0,_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.bootstrapApplication)(_app_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, {
  providers: [(0,_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__.provideAnimations)()]
}).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [502], () => (__webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map