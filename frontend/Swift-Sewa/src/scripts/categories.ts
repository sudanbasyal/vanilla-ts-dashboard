import { Company } from "./../interface/company";
import { categoryApi } from "../api/categories";

export class CategoriesActions {
  static categories: () => void = () => {
    const id = window.location.hash.split(":")[1];

    let location = localStorage.getItem("location");
    location === undefined || null ? "Kathmandu" : location;

    const init = async () => {
      try {
        const body = {
          id: id,
          location: location as string,
        };

        const response = await categoryApi.getCompanyByCategory(body);

        await renderCategories(response);
      } catch (err) {
        console.log("err", err);
      }
    };

    init();

    async function renderCategories(data: { message: Company[] }) {
      const contentDiv = document.getElementsByClassName("content")[0];

      contentDiv.innerHTML = "";

      data.message.forEach((item: Company) => {
        const card = document.createElement("div");
        card.className = "rounded-xl overflow-hidden shadow-lg";
        card.innerHTML = `
          <div class="relative">
             <a href="javascript:void(0)" class="company-image" >
              <img
                class="w-full h-[30vh] object-cover"
                src="${item.photo}"
                alt=""
              />
              <div
                class="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-45"
              ></div>
            </a>
     
              <div
                class="absolute bottom-0 left-0 bg-indigo-600 px-4 py-2 text-white text-sm hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out"
              >
                ${item.location}
              </div>
            
          </div>
          <div class="px-6 py-2">
            <p
              class="font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out  text-indigo-600 mb-4"
            >${item.name}</p>
            <p class=" text-indigo-600 text-sm  ">${item.description}</p> </br>

              <p class="text-gray-500 text-sm"> ${item.address} ,${item.location}</p>
            <p class="text-gray-500 text-sm>${item.phoneNumber}</p>
          </div>
        `;

        contentDiv.appendChild(card);

        const render = card.querySelector(
          ".company-image"
        ) as HTMLAnchorElement;
        render.onclick = () => {
          window.location.href = `#/user/companies/selected/:${item.id}`;
        };
      });
    }
  };
}
