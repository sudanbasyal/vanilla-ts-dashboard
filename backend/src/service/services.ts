import { getCompanies } from "./supplier";
import { In } from "typeorm";
import { AppDataSource } from "../dataSource";
import { Service } from "../entity/Service";
import loggerWithNameSpace from "../utils/logger";
import { ServiceCompanyQuery } from "../interface/query";
import * as supplierService from "./supplier";
import { BadRequestError } from "../error/BadRequestError";

const logger = loggerWithNameSpace("ServicesService");

const serviceRepository = AppDataSource.getRepository(Service);
export const findByIds = async (Ids: string[]) => {
  console.log(Ids);
  logger.info("finding services");

  const services = await serviceRepository.find({
    where: {
      id: In(Ids),
    },
  });

  return services;
};

export const getAllServices = async () => {
  logger.info("finding all services");
  return await serviceRepository.find();
};

export const getServicesByIds = async (Ids: string[]) => {
  const services = await findByIds(Ids);

  if (services.length === Ids.length) {
    logger.info("services found");
    return services;
  } else {
    logger.error("services not found");
    return null;
  }
};

export const getCompaniesByService = async (query: ServiceCompanyQuery) => {
  const companies = await supplierService.findCompaniesByService(query);
  if (companies.length == 0) throw new BadRequestError("companies dont exist");

  logger.info("companies returned");
  return companies;
};
