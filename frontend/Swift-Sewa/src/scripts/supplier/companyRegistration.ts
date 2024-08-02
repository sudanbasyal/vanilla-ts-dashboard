import Cookies from "js-cookie";
import { categoryApi } from "./../../api/categories";
import { supplierApi } from "../../api/supplier";
import { displayResponseErrors } from "../../utils/errorHandler";
import axios from "axios";

export class CompanyRegistrationAction {
  static registration: () => void = async () => {
    const submitButton = document.getElementById("submit") as HTMLButtonElement;
    let categoriesArray: { id: string; name: string; services: string[] }[] =
      [];

    // Fetch categories and their related services
    async function fetchCategoriesServices() {
      try {
        categoriesArray = [];
        const data = await categoryApi.get();

        const categorySelect = document.getElementById(
          "categoryId"
        ) as HTMLSelectElement;

        categorySelect.innerHTML = '<option value="">Select Category</option>';

        data.message.forEach(
          (item: { id: string; name: string; services: string[] }) => {
            const option = document.createElement(
              "option"
            ) as HTMLOptionElement;
            option.value = item.id;
            option.textContent = item.name;
            categorySelect.appendChild(option);
            categoriesArray.push({
              id: item.id,
              name: item.name,
              services: item.services,
            });
          }
        );
      } catch (error) {
        throw error;
      }
    }

    function convertTime(time: string) {
      let [hours, minutes] = time.split(":");
      let period = "AM";

      let hourTime: number = parseInt(hours);

      if (hourTime >= 12) {
        period = "PM";
        if (hourTime > 12) {
          hourTime -= 12;
        }
      } else if (hourTime === 0) {
        hourTime = 12;
      }

      return `${hours}:${minutes} ${period}`;
    }

    function logSelectedCategory() {
      const services = [];
      const categorySelect = document.getElementById(
        "categoryId"
      ) as HTMLSelectElement;
      const selectedOption =
        categorySelect.options[categorySelect.selectedIndex];

      const selectedCategory = categoriesArray.find(
        (category: { id: string; name: string; services: string[] }) =>
          category.name === `${selectedOption.textContent}`
      );

      const serviceOptionsContainer = document.getElementById(
        "serviceOptions"
      ) as HTMLDivElement;
      serviceOptionsContainer.innerHTML = "";

      // TODO change this any type

      if (selectedCategory) {
        selectedCategory.services.forEach((service: any) => {
          services.push({
            id: service.id,
            name: service.name,
          });

          const label = document.createElement("label") as HTMLLabelElement;
          label.classList.add("inline-flex", "items-center", "block", "mt-2");

          const input = document.createElement("input") as HTMLInputElement;
          input.type = "checkbox";
          input.name = "serviceId[]";
          input.value = service.id;
          input.classList.add("form-checkbox");

          const span = document.createElement("span");
          span.classList.add("ml-2");
          span.textContent = service.name;

          const priceInput = document.createElement(
            "input"
          ) as HTMLInputElement;
          priceInput.placeholder = "Rs:";
          priceInput.type = "number";
          priceInput.name = `price-${service.id}`;
          priceInput.value = service.price;
          priceInput.disabled = true;
          priceInput.classList.add(
            "ml-2",
            "form-input",
            "border-gray-300",
            "rounded-md",
            "shadow-sm"
          );
          priceInput.style.width = "70px";

          input.addEventListener("change", function () {
            if (input.checked) {
              priceInput.disabled = false;
              priceInput.required = true;
            } else {
              priceInput.disabled = true;
              priceInput.required = false;
            }
          });

          label.appendChild(input);
          label.appendChild(span);
          label.appendChild(priceInput);
          serviceOptionsContainer.appendChild(label);
        });
      }
    }

    document
      .getElementById("categoryId")
      ?.addEventListener("change", logSelectedCategory);

    fetchCategoriesServices();

    submitButton.onclick = async (e) => {
      e.preventDefault();

      // const formData: CustomFormData = {
      //   serviceIds: [],
      //   servicePrices: [],
      //   photo: null,
      //   panPhoto: null,
      //   name: "",
      //   phoneNumber: "",
      //   address: "",
      //   location: "",
      //   openingTime: "",
      //   closingTime: "",
      //   categoryId: "",
      // };
      // Gather form data
      const formData: { [key: string]: any } = {};

      formData.serviceIds = [];
      formData.servicePrices = [];

      formData.photo = document.getElementById("photo") as HTMLInputElement;
      formData.photo = formData.photo.files[0];

      formData.panPhoto = document.getElementById(
        "panPhoto"
      ) as HTMLInputElement;

      formData.panPhoto = formData.panPhoto.files[0];
      formData.name = (
        document.getElementById("name") as HTMLInputElement
      ).value;

      formData.phoneNumber = (
        document.getElementById("phoneNumber") as HTMLInputElement
      ).value;

      formData.address = (
        document.getElementById("address") as HTMLInputElement
      ).value;

      formData.location = (
        document.getElementById("location") as HTMLSelectElement
      ).value;

      formData.description = (
        document.getElementById("company-description") as HTMLInputElement
      ).value;

      let openingTime = document.getElementById(
        "openingTime"
      ) as HTMLInputElement;

      let convertedopeningTime = convertTime(openingTime.value);
      formData.openingTime = convertedopeningTime;

      let closingTime = document.getElementById(
        "closingTime"
      ) as HTMLInputElement;

      let convertedTime = convertTime(closingTime.value);

      formData.closingTime = convertedTime;

      // Category
      formData.categoryId = (
        document.getElementById("categoryId") as HTMLSelectElement
      ).value;

      // Services
      const serviceCheckboxes = document.querySelectorAll(
        'input[name="serviceId[]"]:checked'
      );

      serviceCheckboxes.forEach((checkbox: any) => {
        const priceInput = document.querySelector(
          `input[name="price-${checkbox.value}"]`
        ) as HTMLInputElement;
        formData.serviceIds.push(checkbox.value);
        formData.servicePrices.push(`${priceInput.value}`);
      });

      const registrationData = new FormData();

      // Append basic information
      registrationData.append("photo", formData.photo);
      registrationData.append("pan-photo", formData.panPhoto);
      registrationData.append("name", formData.name);
      registrationData.append("phoneNumber", formData.phoneNumber);
      registrationData.append("address", formData.address);
      registrationData.append("location", formData.location);
      registrationData.append("openingTime", formData.openingTime);
      registrationData.append("closingTime", formData.closingTime);
      registrationData.append("aviliableDays", formData.availableDays);
      registrationData.append(
        "companyDescription",
        formData.companyDescription
      );

      // Append category
      registrationData.append("categoryId", formData.categoryId);

      // Append services
      formData.serviceIds.forEach((serviceId: string) => {
        registrationData.append(`serviceIds`, serviceId);
      });

      // Append servicePrices
      formData.servicePrices.forEach((price: string) => {
        registrationData.append(`price`, price);
      });

      // getting id of user from cookie
      const userId = Cookies.get("userId")!;
      registrationData.append("userId", userId);

      try {
        const data = await supplierApi.post(registrationData);
      } catch (err) {
        if (axios.isAxiosError(err)) {
          const errorMessage = err.response?.data?.message || err.message;
          displayResponseErrors(errorMessage);
        } else if (err instanceof Error) {
          displayResponseErrors(err.message);
        } else {
          displayResponseErrors("An unknown error occurred.");
        }
      }
    };
  };
}
