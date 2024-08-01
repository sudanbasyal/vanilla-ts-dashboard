import { adminApi } from "../../api/admin";
import { userApi } from "../../api/user";
import { User } from "../../interface/user";

export class AdminDashboardUsers {
  static adminDashboardUsers: () => void = async () => {
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
               <button class="text-blue-500 mr-1">View</button>
               <button id="delete-button"   data-user-id="${user.id}"  class="text-red-500">Delete</button>
             </td>
         
           `;
          usersTableData.appendChild(row);
        });

        usersTableData.addEventListener("click", async (event) => {
          const target = event.target as Element;
          const deleteButton = target.closest("#delete-button");
          const userId = target.getAttribute("data-user-id");

          const deletedUser = await adminApi.deleteUser(Number(userId));
          console.log("deletedUser", deletedUser);
        });
      }
    } catch (err) {
      console.log("err", err);
    }
  };
}
