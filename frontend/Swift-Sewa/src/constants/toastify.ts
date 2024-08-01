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
    // backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
    backgroundColor: `${color}`,
    stopOnFocus: true, // Prevents dismissing of toast on hover
  }).showToast();
}
