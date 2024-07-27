import * as supplierService from "./supplier";
import loggerWithNameSpace from "../utils/logger";
import { BadRequestError } from "../error/BadRequestError";

const logger = loggerWithNameSpace("AdminService");

export const getAllPendingCompanies = async () => {
  logger.info("fetching all pending companies");

  const companies = await supplierService.pendingCompanies();
  if (!companies || companies.length === 0)
    throw new BadRequestError("no pending companies exists at the moment");
  return companies;
};

export const getPendingCompanyById = async (companyId: string) => {
  const company = await supplierService.findSelectedPendingCompany(
    Number(companyId)
  );
};
