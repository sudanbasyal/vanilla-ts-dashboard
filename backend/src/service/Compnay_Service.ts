import { QueryBuilder } from "typeorm";
import { AppDataSource } from "../dataSource";
import { ServiceToCompany } from "../entity/Company_Service";

const companyToServiceRepository =
  AppDataSource.getRepository(ServiceToCompany);

export const deleteCompanyService = async (ids: {
  userId: number;
  companyId: number;
  serviceId: number;
}) => {
  return await companyToServiceRepository
    .createQueryBuilder()
    .delete()
    .from(ServiceToCompany)
    .where("company_id = :companyId", { companyId: ids.companyId })
    .andWhere("service_id = :serviceId", { serviceId: ids.serviceId })
    .execute();
};
