import axios from "axios";

const loginForm = document.getElementById("loginform") as HTMLFormElement;
let email: string, password: string;

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const emailInput = document.getElementById("email") as HTMLInputElement;
  const passwordInput = document.getElementById("password") as HTMLInputElement;
  if (emailInput && passwordInput) {
    email = emailInput.value;
    password = passwordInput.value;
  }
  console.log("email", email);
  console.log("password", password);
  axios
    .post("http://localhost:8000/auth/login", {
      email,
      password,
      role: "admin",
    })
    .then((res) => {
      console.log("response data", res);
    });
});
