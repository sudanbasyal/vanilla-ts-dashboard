import axios from "axios";
import { formValidator } from "../utils/validator";
import {
  displayResponseErrors,
  displaySchemaErrors,
} from "../utils/errorHandler";

export class SignupActions {
  static signUp: () => void = () => {
    let isFormValid: boolean = false;
    let role: string;

    const emailInput = document.getElementById(
      "emailInput"
    ) as HTMLInputElement;

    const passwordInput = document.getElementById(
      "passwordInput"
    ) as HTMLInputElement;

    const usernameInput = document.getElementById(
      "usernameInput"
    ) as HTMLInputElement;
    const addressInput = document.getElementById(
      "addressInput"
    ) as HTMLInputElement;
    const phoneNumberInput = document.getElementById(
      "phoneNumberInput"
    ) as HTMLInputElement;

    const emailErrorMessageElement = document.getElementById(
      "email-error"
    ) as HTMLParagraphElement;
    const passwordErrorMessageElement = document.getElementById(
      "password-error"
    ) as HTMLParagraphElement;

    const removeErrorMessages: () => void = () => {
      emailErrorMessageElement.innerHTML = "";
      passwordErrorMessageElement.innerHTML = "";
    };

    emailInput.oninput = (e: Event) => {
      const target = e.target as HTMLInputElement;
      const value = target.value;
      console.log("value", value);
      if (value.length <= 0) {
        emailInput.classList.add("error-border");
        emailErrorMessageElement.innerHTML = "Email is empty.";
        isFormValid = false;
      } else {
        emailInput.classList.remove("error-border");
        emailErrorMessageElement.innerHTML = "";
      }
    };

    passwordInput.oninput = (e: Event) => {
      const target = e.target as HTMLInputElement;
      const value = target.value;

      if (value.length === 0) {
        passwordInput.classList.add("error-border");
        passwordErrorMessageElement.innerHTML = "Password is empty";
        isFormValid = false;
      } else if (value.length < 8) {
        console.log("password must be of 8 characters");
        passwordErrorMessageElement.innerHTML =
          "Password must be at least 8 characters.";
        passwordInput.classList.add("error-border");
      } else {
        passwordInput.classList.remove("error-border");
        passwordErrorMessageElement.innerHTML = "";
      }
    };

    const radioButtons = document.querySelectorAll('input[name="userType"]');
    let selectedUserType = "";

    radioButtons.forEach((radio) => {
      radio.addEventListener("change", (event) => {
        selectedUserType = (event.target as HTMLInputElement).value;
        role = `${selectedUserType}`;
      });
    });

    const login: () => void = () => {
      console.log("this login part is called");
      window.location.href = "/#/login";
    };

    const validateForm: () => boolean = () => {
      const email = emailInput.value.trim();
      const password = passwordInput.value.trim();
      const address = addressInput.value.trim();

      const phoneNumber = phoneNumberInput.value.trim();
      const username = usernameInput.value.trim();

      emailInput.classList.remove("border-red-500");
      passwordInput.classList.remove("border-red-500");

      const formData = {
        name: username,
        email,
        password,
        phoneNumber,
        address,
        role,
      };

      const errors = formValidator(formData);

      if (errors) {
        displaySchemaErrors(errors);
        emailInput.value = "";
        passwordInput.value = "";
        addressInput.value = "";
        phoneNumberInput.value = "";
        usernameInput.value = "";
      } else {
        axios
          .post("http://localhost:8000/users/", {
            email,
            password,
            address,
            name: username,
            phoneNumber,
            role: "user",
          })
          .then((response) => {
            console.log("response", response);
            if (response.status === 201) {
              login();
            }
          })
          .catch((err) => {
            displayResponseErrors(`${err.response.data.message}`);
            emailInput.value = "";
            passwordInput.value = "";
            addressInput.value = "";
            phoneNumberInput.value = "";
            usernameInput.value = "";
          });
      }
      return true;
    };

    const signupForm = document.getElementById("signupform") as HTMLFormElement;

    signupForm.onsubmit = (e: Event) => {
      e.preventDefault();
      validateForm();

      return false;
    };
  };
}
