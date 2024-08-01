import { bookApi } from "../../api/booking";

export class UserBookingActions {
  static userBooking: () => void = async () => {
    console.log("this is user bookings");
    const hash = window.location.hash.substring(1);
    const companyId = hash.split(":")[1].split("/")[0];
    const companyServiceId = hash.split(":")[2].split("/")[0];

    const signupform = document.getElementById("signupform") as HTMLFormElement;

    signupform.addEventListener("submit", async function (event) {
      event.preventDefault(); // Prevent the form from submitting normally

      // Accessing the input values
      const contactName = document.getElementById(
        "usernameInput"
      ) as HTMLInputElement;
      const address = document.getElementById(
        "addressInput"
      ) as HTMLInputElement;
      const phoneNumber = document.getElementById(
        "phoneNumberInput"
      ) as HTMLInputElement;
      const instructions = document.getElementById(
        "textareaInput"
      ) as HTMLInputElement;

      const date = document.getElementById("dateInput") as HTMLFormElement;

      const data = {
        contactName: contactName.value,
        contactAddress: address.value,
        phoneNumber: phoneNumber.value,
        specialInstructions: instructions.value,
        bookedDate: date.value,
        companyId: companyId,
        companyServiceId: companyServiceId,
      };

      try {
        const userBooking = await bookApi.post(data);
        console.log("booking", userBooking);
      } catch (err) {
        console.log(err);
      }
    });
  };
}
