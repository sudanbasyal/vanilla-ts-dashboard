export class AdminDashboardCompanyInfo {
  static adminDashboardCompanyInfo: () => void = async () => {
    const backBtn = document.getElementById("backButton") as HTMLButtonElement;
    backBtn.addEventListener("click", () => {
      window.location.href = "#/admin/dashboard/verify-companies";
    });
  };
}

// Invoke the method to set everything up
