import { loginPage } from "./loader/login";
import { AboutusPage } from "./loader/about-us";
import { HomePage } from "./loader/homepage";
import { SignUpPage } from "./loader/signUp";
import { DashboardPage } from "./loader/user/dashboard";

const routes: { [key: string]: { component: any } } = {
  "#/": {
    component: HomePage,
  },
  "#/login": {
    component: loginPage,
  },
  "#/signup": {
    component: SignUpPage,
  },
  "#/dashboard": {
    component: DashboardPage,
  },
  "#/about-us": { component: AboutusPage },
};

export class Router {
  static async loadContent() {
    const hash = window.location.hash || "#/home";
    const route = routes[hash];
    if (route) {
      const content = await route.component.load();
      document.getElementById("app")!.innerHTML = content;

      route.component.initEventListeners();
    }
  }

  static handleRouteChange() {
    Router.loadContent();
  }
  static init() {
    window.addEventListener("popstate", () => this.handleRouteChange());
    this.handleRouteChange();
  }
}
