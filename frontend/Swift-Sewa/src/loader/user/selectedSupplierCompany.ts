import { SelectedSupplierCompanyActions } from "../../scripts/user/selectedSuppliersCompany";

export class SelectedSupplierCompanyPage {
  static load: () => Promise<string> = async () => {
    const response = await fetch("src/views/user/selectedSupplierCompany.html");
    return response.text();
  };

  static initEventListeners: () => void = () => {
    SelectedSupplierCompanyActions.selectedSupplierCompany();
  };
}
