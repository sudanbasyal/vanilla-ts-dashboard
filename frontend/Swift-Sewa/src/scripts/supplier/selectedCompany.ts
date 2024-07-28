import { supplierApi } from "../../api/supplier";
import { serviceApi } from "../../api/services";

export class SelectedCompanyActions {
  static selected: () => void = () => {
    const updateButton = document.getElementById(
      "update-button"
    ) as HTMLButtonElement;
    const saveButton = document.getElementById(
      "save-button"
    ) as HTMLButtonElement;

    updateButton.addEventListener("click", () => {
      toggleEditMode(true);
    });

    saveButton.addEventListener("click", () => {
      saveChanges();
      toggleEditMode(false);
    });

    function toggleEditMode(editMode: boolean) {
      const fields: string[] = [
        "name",
        "address",
        "phone",
        "openingTime",
        "closingTime",
        "status",
      ];

      fields.forEach((field) => {
        const spanElement = document.querySelector(
          `.${field}`
        ) as HTMLSpanElement;

        if (editMode) {
          let inputElement: HTMLInputElement | HTMLSelectElement;

          if (field === "openingTime" || field === "closingTime") {
            inputElement = document.createElement("input") as HTMLInputElement;
            inputElement.type = "time";
            inputElement.value =
              spanElement.textContent || spanElement.dataset.oldValue || "";
          } else if (field === "status") {
            inputElement = document.createElement(
              "select"
            ) as HTMLSelectElement;
            const activeOption = document.createElement("option");
            activeOption.value = "active";
            activeOption.text = "Active";
            const inactiveOption = document.createElement("option");
            inactiveOption.value = "inactive";
            inactiveOption.text = "Inactive";
            inputElement.add(activeOption);
            inputElement.add(inactiveOption);
            inputElement.value =
              spanElement.textContent ||
              spanElement.dataset.oldValue ||
              "active";
          } else {
            inputElement = document.createElement("input") as HTMLInputElement;
            inputElement.type = "text";
            inputElement.value =
              spanElement.textContent || spanElement.dataset.oldValue || "";
          }
          inputElement.classList.add(`input-${field}`, "text-black", "w-full");
          spanElement.replaceWith(inputElement);
        } else {
          const inputElement = document.querySelector(`.input-${field}`) as
            | HTMLInputElement
            | HTMLSelectElement;
          const newSpanElement = document.createElement("span");
          newSpanElement.classList.add(field);
          if (
            inputElement instanceof HTMLInputElement ||
            inputElement instanceof HTMLSelectElement
          ) {
            newSpanElement.textContent = inputElement.value;
            newSpanElement.dataset.oldValue = inputElement.value;
            inputElement.replaceWith(newSpanElement);
          }
        }
      });

      // Handle services section (only price and description)
      const serviceItems = document.querySelectorAll(".service-item");
      serviceItems.forEach((serviceItem, index) => {
        const descriptionElement = serviceItem.querySelector(
          ".service-description"
        ) as HTMLSpanElement;
        const priceElement = serviceItem.querySelector(
          ".service-price"
        ) as HTMLSpanElement;

        if (editMode) {
          // Description input
          const descriptionInput = document.createElement("input");
          descriptionInput.type = "text";
          descriptionInput.value = descriptionElement.textContent || "";
          descriptionInput.classList.add(
            `input-description-${index}`,
            "text-black",
            "w-full"
          );
          descriptionElement.replaceWith(descriptionInput);

          // Price input
          const priceInput = document.createElement("input");
          priceInput.type = "text";
          priceInput.value = priceElement.textContent || "";
          priceInput.classList.add(
            `input-price-${index}`,
            "text-black",
            "w-full"
          );
          priceElement.replaceWith(priceInput);
        } else {
          // Description span
          const descriptionInput = document.querySelector(
            `.input-description-${index}`
          ) as HTMLInputElement;
          const newDescriptionElement = document.createElement("span");
          newDescriptionElement.classList.add("service-description");
          newDescriptionElement.textContent = descriptionInput.value;
          descriptionInput.replaceWith(newDescriptionElement);

          // Price span
          const priceInput = document.querySelector(
            `.input-price-${index}`
          ) as HTMLInputElement;
          const newPriceElement = document.createElement("span");
          newPriceElement.classList.add("service-price");
          newPriceElement.textContent = priceInput.value;
          priceInput.replaceWith(newPriceElement);
        }
      });

      updateButton.classList.toggle("hidden", editMode);
      saveButton.classList.toggle("hidden", !editMode);
    }

    function saveChanges() {
      const fields: string[] = [
        "name",
        "address",
        "phone",
        "openingTime",
        "closingTime",
        "status",
      ];

      const updatedData = {
        profile: {} as { [key: string]: string },
        services: [] as { description: string; price: string }[],
      };

      fields.forEach((field) => {
        const inputElement = document.querySelector(
          `.input-${field}`
        ) as HTMLInputElement;
        updatedData.profile[field] = inputElement.value;
      });

      // Handle services section (only price and description)
      const serviceItems = document.querySelectorAll(".service-item");
      serviceItems.forEach((serviceItem, index) => {
        const descriptionInput = document.querySelector(
          `.input-description-${index}`
        ) as HTMLInputElement;
        const priceInput = document.querySelector(
          `.input-price-${index}`
        ) as HTMLInputElement;

        updatedData.services.push({
          description: descriptionInput.value,
          price: priceInput.value,
        });
      });

      console.log("Updated Data:", updatedData);

    }

    function renderServices(services: any) {
      const servicesList = document.querySelector(
        ".services-list"
      ) as HTMLUListElement;

      servicesList.innerHTML = "";

      services.forEach((service: any, index: number) => {
        // Create list item
        const listItem = document.createElement("li");
        listItem.classList.add(
          "service-item",
          "text-white",
          "text-lg",
          "p-6",
          "border-b",
          "border-gray-600"
        );

        // Create a container for service name and price
        const serviceHeader = document.createElement("div");
        serviceHeader.classList.add(
          "service-header",
          "flex",
          "justify-between",
          "items-center"
        );

        // Create service name element
        const serviceName = document.createElement("h3");
        serviceName.classList.add("service-name", "font-bold");
        serviceName.textContent = service.service.name;

        // Create service price element
        const servicePrice = document.createElement("span");
        servicePrice.classList.add("service-price", "text-sm");
        servicePrice.textContent = service.price;

        // Append name and price to service header
        serviceHeader.appendChild(serviceName);
        serviceHeader.appendChild(servicePrice);

        // Create service description element
        const serviceDescription = document.createElement("span");
        serviceDescription.classList.add("service-description", "text-sm");
        serviceDescription.textContent = service.description;

        // Create a container to ensure price is in the middle
        const contentContainer = document.createElement("div");
        contentContainer.classList.add(
          "content-container",
          "flex",
          "flex-col",
          "gap-4"
        );

        // Append header and description to content container
        contentContainer.appendChild(serviceHeader);
        contentContainer.appendChild(serviceDescription);

        // Append content container to list item
        listItem.appendChild(contentContainer);

        // Append list item to services list
        servicesList.appendChild(listItem);
      });
    }

    async function fetchData() {
      try {
        const id = Number(localStorage.getItem("companyId"));
        const response = await supplierApi.getOne(id);
        console.log("response", response);

        const services = response.companies.ServiceToCompany;
        console.log("services", services);

        const serviceIds = services.map((service: any) => service.service.id);
        console.log("serviceIds", serviceIds);

        const serviceResponses = await serviceApi.get();

        const matchingServices = serviceResponses.services.filter(
          (response: any) => serviceIds.includes(response.id)
        );
        console.log("matching responses", matchingServices);

        await renderContent(response);
      } catch (err) {
        console.log("err", err);
      }
    }

    async function renderContent(data: any) {
      const companyName = document.querySelector(".name") as HTMLSpanElement;
      companyName.textContent = data.companies.name;

      const addressName = document.querySelector(".address") as HTMLSpanElement;
      addressName.textContent = data.companies.address;

      const phone = document.querySelector(".phone") as HTMLSpanElement;
      phone.textContent = data.companies.phoneNumber;

      const openingTime = document.querySelector(
        ".openingTime"
      ) as HTMLSpanElement;
      openingTime.textContent = data.companies.openingTime;

      const closingTime = document.querySelector(
        ".closingTime"
      ) as HTMLSpanElement;
      closingTime.textContent = data.companies.closingTime;

      const status = document.querySelector(".status") as HTMLSpanElement;
      status.textContent = data.companies.isActive ? "active" : "inactive";

      renderServices(data.companies.ServiceToCompany);

      const categoryDescriptionElement = document.getElementsByClassName(
        "category-description"
      )[0];
      if (categoryDescriptionElement) {
        const categoryDescription = categoryDescriptionElement.innerHTML;
        console.log("categoryDescription", categoryDescription);
      }
    }

    fetchData();
  };
}
