import httpStatusCodes from "http-status-codes";
import { NextFunction, Response } from "express";
import { Request } from "../interface/request";
import * as adminService from "../service/admin";
import loggerWithNameSpace from "../utils/logger";

const logger = loggerWithNameSpace("controller/admin");

export const getAllPendingCompanies = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const categories = await adminService.getAllPendingCompanies();
    logger.info("fetched all pending companies");
    res.json(httpStatusCodes.OK).json(categories);
  } catch (err) {
    next(err);
  }
};

export const getSelectedPendingCompany = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    logger.info("fetched selected compamy");
    const categories = await adminService.getPendingCompanyById(id);
    res.json(httpStatusCodes.OK).json(categories);
  } catch (err) {
    next(err);
  }
};

export const verifyCompany = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const isAllowed = req.body;

    const status = await adminService.verifyCompany(id, isAllowed.isAllowed);

    logger.info("updated Company status successfully");
    res.status(httpStatusCodes.OK).json({ message: status });
  } catch (err) {
    next(err);
  }
};
