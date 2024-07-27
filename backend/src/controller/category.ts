import { NextFunction, Response } from "express";
import { Request } from "../interface/request";
import * as categoryService from "../service/category";

export const getAllCategories = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const categories = await categoryService.getAllCategories();
    res.json(categories);
  } catch (err) {
    next(err);
  }
};
