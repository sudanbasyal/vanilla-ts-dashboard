import { ServiceToCompany } from "./../../interface/company";
import { supplierApi } from "../../api/supplier";
import { Company } from "../../interface/company";

export class SelectedSupplierCompanyActions {
  static selectedSupplierCompany = async () => {
    async function init() {
      const companyName = document.getElementById(
        "company-name"
      ) as HTMLHeadElement;

      const companyAddress = document.getElementById(
        "company-address"
      ) as HTMLParagraphElement;
      console.log("companyAddress", companyAddress);

      const companyImage = document.getElementById(
        "company-image"
      ) as HTMLImageElement;
      console.log("companyImage", companyImage);

      const companyId = localStorage.getItem("companyId");

      try {
        const id = Number(companyId);
        const response = await supplierApi.getOne(id);
        console.log("response", response);
        companyName.textContent = response.companies.name;
        companyAddress.textContent = response.companies.address;
        companyImage.src = response.companies.photo;

        renderContent(response);
      } catch (err) {
        console.log("err", err);
      }
    }

    function renderContent(response: { companies: Company }) {
      console.log("response in rendercontent", response);

      console.log(
        "response in rendercontent",
        response.companies.ServiceToCompany
      );

      const extractData = response.companies.ServiceToCompany.map(
        (item: ServiceToCompany) => ({
          name: item.service.name,
          price: item.price,
          description: item.description,
        })
      );

      const servicesContainer = document.querySelector(
        ".grid"
      ) as HTMLDivElement;

      // Clear any existing content
      servicesContainer.innerHTML = "";

      // Iterate over the extracted data and create service cards
      extractData.forEach((service) => {
        const serviceCard = `
      <div class="h-full p-2 rounded-lg shadow-md flex">
        <a
          href="#"
          class="flex flex-col pl-4 bg-white border border-gray-200 rounded-lg shadow md:flex-row w-full hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <img
            class="object-contain w-full h-96 md:h-auto md:w-48 rounded-2xl"
            src="../../../public/images/services/barber.webp"
            alt=""
          />
          <div
            class="flex flex-col gap-y-3 items-start justify-center px-2 leading-normal"
          >
            <h5
              class="mb-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white"
            >
              ${service.name}
            </h5>

            <p>
              ${service.description}
            </p>

            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              <span>Price:Rs:</span><span>${service.price}</span>
            </p>

            <button class="hover:bg-orange-300 translate-x-2">
              Book Now
            </button>
          </div>
        </a>
      </div>
    `;
        servicesContainer.innerHTML += serviceCard;
      });
    }

    // Call the init function once to fetch data and render content
    await init();
  };
}

// Call the function to start the process
SelectedSupplierCompanyActions.selectedSupplierCompany();
