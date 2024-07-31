import { loginPage } from "./loader/login";
import { HomePage } from "./loader/homepage";
import { SignUpPage } from "./loader/signUp";
import { DashboardPage } from "./loader/user/dashboard";
import { ProfilePage } from "./loader/user/profile";
import { CompanyRegistrationPage } from "./loader/supplier/companyRegistration";
import { CompaniesPage } from "./loader/supplier/companies";
import { SelectedCompanyPage } from "./loader/supplier/selectedCompany";
import { CategoriesPage } from "./loader/categories";
import { SelectedSupplierCompanyPage } from "./loader/user/selectedSupplierCompany";

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

  "#/categories": {
    component: CategoriesPage,
  },
  "#/dashboard": {
    component: DashboardPage,
  },

  "#/profile": {
    component: ProfilePage,
  },

  "#/user/companies/selected": {
    component: SelectedSupplierCompanyPage,
  },

  "#/supplier/registration": {
    component: CompanyRegistrationPage,
  },

  "#/supplier/companies": {
    component: CompaniesPage,
  },

  "#/supplier/companies/selected": {
    component: SelectedCompanyPage,
  },
};

export class Router {
  static async loadContent() {
    const hash = window.location.hash || "#/home";
    const route = routes[hash];

    if (hash.includes("categories/")) {
      document.getElementById("app")!.innerHTML = "";
      document.getElementById("app")!.innerHTML = await CategoriesPage.load();
      CategoriesPage.initEventListeners();
    } else {
      if (route) {
        const content = await route.component.load();
        document.getElementById("app")!.innerHTML = content;

        route.component.initEventListeners();
      }
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
