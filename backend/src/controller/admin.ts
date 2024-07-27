import { NextFunction, Response } from "express";
import { Request } from "../interface/request";
import * as adminService from "../service/admin";

export const getAllPendingCompanies = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    console.log("this is a admins route");
    const categories = await adminService.getAllPendingCompanies();
    res.json(categories);
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
    console.log("this is a admins route");
    const { id } = req.params;
    const categories = await adminService.getPendingCompanyById(id);
    res.json(categories);
  } catch (err) {
    next(err);
  }
};
