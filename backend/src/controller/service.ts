import httpStatusCodes from "http-status-codes";
import { NextFunction, Response } from "express";
import { Request } from "../interface/request";
import * as companyService from "../service/services";

export const getAllServices = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const services = await companyService.getAllServices();
    res.status(httpStatusCodes.OK).json({ services });
  } catch (err) {
    next(err);
  }
};
