import { serviceApi } from "../../api/services";
import { SearchResultItem } from "../../interface/search";

export class UserSearchActions {
  static search = async () => {
    const init = async () => {
      let hash = window.location.hash;
      let hashWithoutHash = hash.substring(1);

      let parts = hashWithoutHash.split("?");

      let query = parts[1];

      const getSearchedQuery = await serviceApi.getSearchedQuery(query);
      console.log("searchedQuery", getSearchedQuery);

      await renderCategories(getSearchedQuery);
    };
    init();
    async function renderCategories(data: SearchResultItem[]) {
      const contentDiv = document.getElementsByClassName("content")[0];

      contentDiv.innerHTML = "";
      console.log("Datat inside of category");

      data.forEach((item: SearchResultItem) => {
        const company = item.company;
        console.log("item", item);
        const card = document.createElement("div");
        card.className = "rounded-xl overflow-hidden shadow-lg";
        card.innerHTML = `
            <div class="relative">
              <a href="javascript:void(0)" class="company-image" >
                <img
                  class="w-full h-[30vh] object-cover"
                  src="${company.photo}"
                  alt=""
                />
                <div
                  class="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-45"
                ></div>
              </a>

                <div
                  class="absolute bottom-0 left-0 bg-indigo-600 px-4 py-2 text-white text-sm hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out"
                >
                  ${company.location}
                </div>

            </div>
            <div class="px-6 py-2">
              <p
                class="font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out  text-indigo-600 mb-4"
              >${company.name}</p>
              <p class=" text-indigo-600 text-sm  ">${item.description}</p> </br>

                <p class="text-gray-500 text-sm"> ${company.address} ,${company.location}</p>
              <p class="text-gray-500 text-sm>${company.phoneNumber}</p>
            </div>
          `;

        contentDiv.appendChild(card);

        const render = card.querySelector(
          ".company-image"
        ) as HTMLAnchorElement;
        render.onclick = () => {
          window.location.href = `#/user/companies/selected/:${item.company.id}`;
        };
      });
    }
  };
}
