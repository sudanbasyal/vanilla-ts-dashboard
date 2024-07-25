export class UserDashboardActions {
  static userDashboard: () => void = async () => {
    const dropMenu = document.getElementById("userDropDown");
    console.log("dropMenu", dropMenu);
    const currentYear = document.getElementById("year")!;
    currentYear.textContent = new Date().getFullYear().toString();

    const navbarMenu: HTMLButtonElement =
      document.querySelector(".navbar-burger")!;
    console.log("navebarMenu", navbarMenu);

    const userProfile: HTMLButtonElement = document.getElementById(
      "user-button"
    ) as HTMLButtonElement;

    userProfile.onclick = () => {
      let dropdowns = document.querySelector(".dropdown-menu") as any;

      if (dropdowns.classList.contains("hidden")) {
        dropdowns.classList.remove("hidden");
      } else {
        dropdowns.classList.add("hidden");
      }
    };
  };
}
