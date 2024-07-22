// Initialize Swiper modules

const navbarMenu: HTMLButtonElement = document.querySelector(".navbar-burger")!;
console.log("navebarMenu", navbarMenu);

navbarMenu.onclick = () => {
  let dropdowns = document.querySelector(".dropdown-menu") as any;

  if (dropdowns.classList.contains("hidden")) {
    dropdowns.classList.remove("hidden");
  } else {
    dropdowns.classList.add("hidden");
  }
};
