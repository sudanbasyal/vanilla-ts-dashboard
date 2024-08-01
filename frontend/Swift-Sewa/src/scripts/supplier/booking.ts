import { bookApi } from "../../api/booking";
import { Booking } from "../../interface/booking";

export class SupplierBookingActions {
  static supplierBooking: () => void = async () => {
    const init = async () => {
      try {
        const response = await bookApi.get();
        console.log("reponse", response);

        await renderContent(response);
      } catch (err) {
        console.log("err", err);
      }
    };

    init();
    function renderContent(data: { bookings: Booking[] }) {
      const container = document.getElementById(
        "dynamic-content"
      ) as HTMLDivElement;
      container.innerHTML = "";

      data.bookings.forEach((item) => {
        const content = `
        <div class="p-4 border border-gray-100/50 rounded-md relative hover:-translate-y-1.5 transition-all duration-500 ease-in-out hover:shadow-md hover:shadow-gray-100/30 dark:border-neutral-600 dark:hover:shadow-neutral-900">
          <div class="grid items-center grid-cols-12">
            <div class="col-span-12 md:col-auto">
              <div>
                <a href="javascript:void(0)">
                  <img src="assets/images/user/img-${
                    (item.id % 8) + 1
                  }.jpg" alt="" class="w-16 h-16 p-1 rounded-full outline outline-2 outline-gray-100/50 dark:outline-neutral-600">
                </a>
              </div>
            </div>
            <div class="col-span-12 md:col-span-5">
              <div class="mt-3 mt-lg-0">
                <h5 class="mb-0 text-gray-900 text-19 dark:text-white">
                  <a href="candidate-details.html">${item.contactName}</a>
                </h5>
                <p class="mb-2 text-gray-500 text-muted dark:text-gray-300">${
                  item.bookedDate
                }</p>
                <ul class="flex flex-wrap gap-3 text-gray-500 dark:text-gray-300">
                  <li class="list-inline-item">
                    <i class="mdi mdi-map-marker"></i> ${item.contactAddress}
                  </li>
                  <li class="list-inline-item">
                    <i class="uil uil-phone"></i> ${item.phoneNumber}
                  </li> 

                </ul>
                <ul  class="text-gray-500 dark:text-gray-300">
                    <li class="list-inline-item">
                    <i class="uil uil-phone"></i> ${item.specialInstructions}
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-span-12 md:col-span-4">
              <div class="flex flex-wrap gap-2 mt-2 mt-lg-0">
                <span class="px-2 py-1 text-sm font-medium text-green-500 rounded bg-green-500/20  cursor-pointer">Accept</span>
                <span class="px-2 py-1 text-sm font-medium rounded bg-violet-500/20 text-violet-500 cursor-pointer">Reject</span>
              </div>
            </div>
          </div>
          <div class="absolute top-4 ltr:right-4 rtl:left-4">
          
          </div>
        </div>
      `;
        container.insertAdjacentHTML("beforeend", content);
      });
    }
  };
}
