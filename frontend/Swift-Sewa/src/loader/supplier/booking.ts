import { SupplierBookingActions } from "../../scripts/supplier/booking";

export class SupplierBookingPage {
  static load: () => Promise<string> = async () => {
    const response = await fetch("src/views/supplier/bookings.html");
    return response.text();
  };

  static initEventListeners: () => void = () => {
    SupplierBookingActions.supplierBooking();
  };
}
