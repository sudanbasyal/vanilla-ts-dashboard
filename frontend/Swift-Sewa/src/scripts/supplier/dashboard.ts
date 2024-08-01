export class SupplierDashboardActions {
  static supplierDashboard: () => void = async () => {
    console.log("this is  a supplier dashboard");
    const registrationButton = document.getElementById(
      "register-button"
    ) as HTMLButtonElement;
    console.log("registration button", registrationButton);

    registrationButton.onclick = () => {
      console.log("im clicked");
      window.location.href = "#/supplier/registration/";
    };
  };
}
