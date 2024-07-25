import { In } from "typeorm";
import { AppDataSource } from "../dataSource";
import { Service } from "../entity/Service";
import loggerWithNameSpace from "../utils/logger";

const logger = loggerWithNameSpace("ServicesService");

const serviceRepository = AppDataSource.getRepository(Service);
export const findByIds = async (Ids: string[]) => {
  const services = await serviceRepository.find({
    where: {
      id: In(Ids),
    },
  });
  return services;
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
