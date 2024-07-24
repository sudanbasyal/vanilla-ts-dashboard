import Joi from "joi";
export function displayErrors(errors: Joi.ValidationErrorItem[]) {
  const errorContainer = document.getElementById(
    "error-container"
  ) as HTMLDivElement;
  // errorContainer.innerHTML = "";
  console.log("error container", errorContainer);

  errors.forEach((error) => {
    const errorElement = document.createElement("p");
    errorElement.textContent = error.message;
    errorContainer.appendChild(errorElement);
  });
}
