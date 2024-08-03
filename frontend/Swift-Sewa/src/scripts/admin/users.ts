import { adminApi } from "../../api/admin";
import { userApi } from "../../api/user";
import { showToast } from "../../constants/toastify";
import { User } from "../../interface/user";

export class AdminDashboardUsers {
  static adminDashboardUsers: () => void = async () => {
    const users = document.getElementById("users") as HTMLButtonElement;

    users.onclick = () => {
      window.location.href = "#/admin/dashboard/users";
    };
    const swiftSewa = document.getElementById(
      "swift-sewa"
    ) as HTMLButtonElement;
    swiftSewa.onclick = () => {
      window.location.href = "#/admin/dashboard";
    };
    const verifyCompanies = document.getElementById(
      "verifyCompanies"
    ) as HTMLButtonElement;
    verifyCompanies.onclick = () => {
      window.location.href = "#/admin/dashboard/verify-companies";
    };

    try {
      async function init() {
        const users = await userApi.getAll();

        await renderTable(users);
      }

      init();

      function renderTable(users: { message: User[] }) {
        const usersTableData = document.getElementById(
          "userTableBody"
        ) as HTMLTableCellElement;

        usersTableData.innerHTML = "";

        users.message.forEach((user) => {
          const row = document.createElement("tr");
          row.innerHTML = `
           <td class="border px-4 py-2 text-center">${user.id}</td>
            <td class="border px-4 py-2 text-center">${user.profile.name}</td>
             <td class="border px-4 py-2 text-center">${user.email}</td>

            <td class="border px-4 py-2 text-center">
           
               <button id="delete-button" data-user-id="${user.id}"  class="text-red-500">Delete</button>
             </td>
         
           `;
          usersTableData.appendChild(row);
        });

        usersTableData.addEventListener("click", async (event) => {
          const target = event.target as Element;
          const deleteButton = target.closest("#delete-button");
          const userId = target.getAttribute("data-user-id");

          const deletedStatus = await adminApi.deleteUser(Number(userId));
          deletedStatus === 204
            ? showToast("User deleted successfully", 3000, "Green")
            : showToast("User deletion failed", 3000, "red");
        });
      }
    } catch (err) {
      console.log("err", err);
    }
  };
}
