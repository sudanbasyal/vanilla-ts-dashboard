import { UserBookingActions } from "../../scripts/user/booking";
export class UserBookingPage {
  static load: () => Promise<string> = async () => {
    const response = await fetch("src/views/user/booking.html");
    return response.text();
  };

  static initEventListeners: () => void = () => {
    console.log(window.location.hash);
    UserBookingActions.userBooking();
  };
}
