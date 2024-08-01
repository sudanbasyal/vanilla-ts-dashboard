import { loginPage } from "./loader/login";
import { AboutusPage } from "./loader/about-us";
import { HomePage } from "./loader/homepage";
import { SignUpPage } from "./loader/signUp";
import { DashboardPage } from "./loader/user/dashboard";
import { ProfilePage } from "./loader/user/profile";
import { CompanyRegistrationPage } from "./loader/supplier/companyRegistration";
import { AdminDashboardPage } from "./loader/admin/dashboard";
import { AdminDashboardServicePage } from "./loader/admin/services";
import { AdminDashboardUsersPage } from "./loader/admin/users";
import { AdminDashboardVerifyCompaniesPage } from "./loader/admin/verifyCompanies";
import { AdminDashboardCompanyInfoPage } from "./loader/admin/companyInfo";
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

  "#/profile": {
    component: ProfilePage,
  },

  "#/supplier/registration": {
    component: CompanyRegistrationPage,
  },

  "#/admin/dashboard": {
    component: AdminDashboardPage,
  },
  

  "#/admin/dashboard/service": {
    component: AdminDashboardServicePage,
  },
  "#/admin/dashboard/users": {
    component: AdminDashboardUsersPage,
  },
  "#/admin/dashboard/verify-companies": {
    component: AdminDashboardVerifyCompaniesPage,
  },
  "#/admin/dashboard/company-info": {
    component: AdminDashboardCompanyInfoPage,
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
