// Import Toastify CSS
import "toastify-js/src/toastify.css";
// Import Toastify JS
import Toastify from "toastify-js";

export function showToast(
  message: string,
  duration: number = 3000,
  color: string
) {
  Toastify({
    text: message,
    duration: duration,
    close: true,
    gravity: "top",
    position: "right",

    backgroundColor: `${color}`,
    stopOnFocus: true,
  }).showToast();
}
