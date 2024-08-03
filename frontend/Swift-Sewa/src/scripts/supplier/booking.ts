import { bookApi } from "../../api/booking";
import { showToast } from "../../constants/toastify";
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
    // function renderContent(data: { bookings: Booking[] }) {
    //   const container = document.getElementById(
    //     "dynamic-content"
    //   ) as HTMLDivElement;

    //   container.innerHTML = "";

    //   data.bookings.forEach((item) => {
    //     const content = `
    //     <div class="p-4 border border-gray-100/50 rounded-md relative hover:-translate-y-1.5 transition-all duration-500 ease-in-out hover:shadow-md hover:shadow-gray-100/30 dark:border-neutral-600 dark:hover:shadow-neutral-900 ">
    //       <div class="grid items-center grid-cols-12">
    //         <div class="col-span-12 md:col-auto">
    //           <div>
    //             <a href="javascript:void(0)">
    //               <img src="assets/images/user/img-${
    //                 (item.id % 8) + 1
    //               }.jpg" alt="" class="w-16 h-16 p-1 rounded-full outline outline-2 outline-gray-100/50 dark:outline-neutral-600">
    //             </a>
    //           </div>
    //         </div>
    //         <div class="col-span-12 md:col-span-5">
    //           <div class="mt-3 mt-lg-0">
    //             <h5 class="mb-0  text-gray-900 text-19 dark:text-white">

    //               <a href="candidate-details.html"><span>Name:</span> ${
    //                 item.contactName
    //               }</a>
    //             </h5>
    //             <p class="mb-2 text-gray-500 text-muted dark:text-gray-300">
    //             <span>Booked Date:</span>
    //             ${item.bookedDate}</p>
    //           </div>

    //         </div>
    //         <div class="col-span-12 md:col-span-4">
    //           <div class="flex flex-wrap gap-2 mt-2 mt-lg-0">
    //               <button class="view-button px-2 py-1 text-sm font-medium text-green-500 rounded bg-green-500/20 cursor-pointer "data-id="${
    //                 item.id
    //               }">View</span>
    //             <button class="reject-button px-2 py-1 text-sm font-medium rounded bg-violet-500/20 text-violet-500 cursor-pointer "data-id="${
    //               item.id
    //             }">Reject</span>
    //           </div>
    //         </div>
    //       </div>
    //       <div class="absolute top-4 ltr:right-4 rtl:left-4">

    //       </div>
    //     </div>
    //   `;
    //     container.insertAdjacentHTML("beforeend", content);
    //   });

    //   const viewButtons = container.querySelectorAll(".view-button");
    //   viewButtons.forEach((button) => {
    //     button.addEventListener("click", (event) => {
    //       const target = event.currentTarget as HTMLElement;
    //       const bookingId = target.getAttribute("data-id");
    //       if (bookingId) handleNavigation(bookingId, "viewed");
    //       console.log("clicked", bookingId);
    //     });
    //   });

    //   // Add event listeners to all "Reject" buttons
    //   const rejectButtons = container.querySelectorAll(".reject-button");
    //   rejectButtons.forEach((button) => {
    //     button.addEventListener("click", (event) => {
    //       const target = event.currentTarget as HTMLElement;
    //       const bookingId = target.getAttribute("data-id");
    //       if (bookingId) {
    //         console.log(`Rejected booking ID: ${bookingId}`);
    //         handleNavigation(bookingId, "rejected");
    //       }
    //     });
    //   });
    // }

    // function renderContent(data: { bookings: Booking[] }) {
    //   const container = document.getElementById(
    //     "dynamic-content"
    //   ) as HTMLDivElement;

    //   container.innerHTML = "";

    //   data.bookings.forEach((item) => {
    //     const content = `
    //   <div class="bg-[white] mx-auto text-left w-[20rem] shad rounded-md p-6">
    //     <h1 class="font-semibold text-2xl">${item.contactName}</h1>
    //     <div class="flex justify-between">
    //       <div class="mt-2 text-sm">
    //         <span class="text-gray-400">${item.contactAddress}</span>
    //         <span class="text-gray-400">${item.bookedDate}</span>
    //         <p class="text-gray-400">${item.phoneNumber}</p>
    //       </div>
    //       <div>
    //         <h1 class="border border-blue-800 rounded-lg text-[white] bg-[#13344C] inline-block mx-2 my-2 py-2 px-3">
    //           ${item.serviceToCompany.service.name}
    //         </h1>
    //       </div>
    //     </div>
    //     <p class="py-2 h-16">${item.specialInstructions}</p>
    //     <div class="flex justify-between">
    //       <button
    //         class="px-4 my-4 lg:my-0 rounded-full bg-blue-400 text-white py-3 border border-[blue] hover:ring-2 hover:ring-blue-500 hover:border-transparent transition duration-300"
    //         data-id="${item.id}"
    //         onclick="handleAccept(${item.id})"
    //       >
    //         Accept
    //       </button>
    //       <button
    //         class="px-4 my-4 lg:my-0 rounded-full py-3 border border-[red] bg-[#FEEDF0] text-[red] hover:ring-2 hover:ring-red-500 hover:border-transparent transition duration-300"
    //         data-id="${item.id}"
    //         onclick="handleReject(${item.id})"
    //       >
    //         Reject
    //       </button>
    //     </div>
    //   </div>
    // `;
    //     container.insertAdjacentHTML("beforeend", content);
    //   });
    // }

    // function handleNavigation(id: string, status: string) {
    //   if (status == "viewed") {
    //     window.location.href = `#/supplier/bookings/selected/:${id}`;
    //   } else if (status == "rejected") {
    //     console.log("rejected");
    //   }
    // }
    function renderContent(data: { bookings: Booking[] }) {
      const container = document.getElementById(
        "dynamic-content"
      ) as HTMLDivElement;

      container.innerHTML = "";

      data.bookings.forEach((item) => {
        const content = `
      <div class="bg-[white] mx-auto text-left w-[20rem] shad rounded-md p-6">
        <h1 class="font-semibold text-2xl">${item.contactName}</h1>
        <div class="flex justify-between">
          <div class="mt-2 text-sm">
            <span class="text-gray-400">${item.contactAddress}</span>
            <span class="text-gray-400">${item.bookedDate}</span>
            <p class="text-gray-400">${item.phoneNumber}</p>
          </div>
          <div>
            <h1 class="border border-blue-800 rounded-lg text-[white] bg-[#13344C] inline-block mx-2 my-2 py-2 px-3">
              ${item.serviceToCompany.service.name}
            </h1>
          </div>
        </div>
        <p class="py-2 h-16">${item.specialInstructions}</p>
        <div class="flex justify-between">
          <button
            class="accept-btn px-4 my-4 lg:my-0 rounded-full bg-blue-400 text-white py-3 border border-[blue] hover:ring-2 hover:ring-blue-500 hover:border-transparent transition duration-300"
            data-id="${item.id}"
          >
            Accept
          </button>
          <button
            class="reject-btn px-4 my-4 lg:my-0 rounded-full py-3 border border-[red] bg-[#FEEDF0] text-[red] hover:ring-2 hover:ring-red-500 hover:border-transparent transition duration-300"
            data-id="${item.id}"
          >
            Reject
          </button>
        </div>
      </div>
    `;
        container.insertAdjacentHTML("beforeend", content);
      });

      // Add event listeners after rendering the content
      document.querySelectorAll(".accept-btn").forEach((button) => {
        button.addEventListener("click", (event) => {
          const target = event.target as HTMLButtonElement;

          const id = target.getAttribute("data-id");
          handleAccept(id);
        });
      });

      document.querySelectorAll(".reject-btn").forEach((button) => {
        button.addEventListener("click", (event) => {
          const target = event.target as HTMLButtonElement;
          const id = target.getAttribute("data-id");
          handleReject(id);
        });
      });
    }

    async function handleAccept(id: string | null) {
      if (id == null) {
        showToast("somethinn went wrong", 2000, "red");
        return;
      } else {
        try {
          const acceptBook = await bookApi.updateStatus(Number(id), {
            isApproved: true,
          });
          showToast(
            "booking confirmed please contact the client now!",
            3000,
            "green"
          );
          window.location.href = `#/supplier/bookings/`;
        } catch (err) {
          console.log("error", err);
        }
      }
    }

    async function handleReject(id: string | null) {
      if (id == null) {
        showToast("something went wrong", 2000, "red");
        return;
      } else {
        const rejectBook = await bookApi.updateStatus(Number(id), {
          isApproved: false,
        });
        window.location.href = `#/supplier/bookings/`;
        showToast("rejected succesfully", 3000, "green");
      }
    }
  };
}
