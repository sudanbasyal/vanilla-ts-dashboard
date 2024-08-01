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
import { UserBookingPage } from "./loader/user/booking";
import { SupplierDashboardPage } from "./loader/supplier/dashboard";
import { SupplierBookingPage } from "./loader/supplier/booking";
import { AdminDashboardPage } from "./loader/admin/dashboard";
import { AdminDashboardServicePage } from "./loader/admin/services";
import { AdminDashboardUsersPage } from "./loader/admin/users";
import { AdminDashboardVerifyCompaniesPage } from "./loader/admin/verifyCompanies";
import { AdminDashboardCompanyInfoPage } from "./loader/admin/companyInfo";
import { UserSearchPage } from "./loader/user/search";

const routes: { [key: string]: { component: any } } = {
  "": {
    component: HomePage,
  },

  "#/login/": {
    component: loginPage,
  },
  "#/signup/": {
    component: SignUpPage,
  },

  "#/categories/": {
    component: CategoriesPage,
  },
  "#/dashboard/": {
    component: DashboardPage,
  },

  "#/profile": {
    component: ProfilePage,
  },

  "#/user/search/": {
    component: UserSearchPage,
  },

  "#/user/companies/selected/": {
    component: SelectedSupplierCompanyPage,
  },

  "#/supplier/registration/": {
    component: CompanyRegistrationPage,
  },

  "#/user/booking/": {
    component: UserBookingPage,
  },

  "#/supplier/companies/": {
    component: CompaniesPage,
  },

  "#/supplier/dashboard/": {
    component: SupplierDashboardPage,
  },

  "#/supplier/booking/": {
    component: SupplierBookingPage,
  },

  "#/supplier/companies/selected/": {
    component: SelectedCompanyPage,
  },

  "#/admin/dashboard/": {
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
};

export class Router {
  static async loadContent() {
    const hash = window.location.hash || "";
    const route = routes[hash];
    if (hash.includes("categories/")) {
      document.getElementById("app")!.innerHTML = "";
      document.getElementById("app")!.innerHTML = await CategoriesPage.load();
      CategoriesPage.initEventListeners();
    } else if (hash.includes("user/companies/selected")) {
      document.getElementById("app")!.innerHTML = "";
      document.getElementById("app")!.innerHTML =
        await SelectedSupplierCompanyPage.load();
      SelectedSupplierCompanyPage.initEventListeners();
    } else if (hash.includes("user/booking/")) {
      console.log("bookings page enabled");
      document.getElementById("app")!.innerHTML = "";
      document.getElementById("app")!.innerHTML = await UserBookingPage.load();
      UserBookingPage.initEventListeners();
    } else if (hash.includes("user/search")) {
      console.log("search page enabled");
      document.getElementById("app")!.innerHTML = "";
      document.getElementById("app")!.innerHTML = await UserSearchPage.load();
      UserSearchPage.initEventListeners();
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
