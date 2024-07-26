import { NextFunction, Response } from "express";
import { Request } from "../interface/request";
import * as categoryService from "../service/category";

export const getAllCategories = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    console.log("this is a category route");
    const categories = await categoryService.getAllCategories();
    res.json(categories);
  } catch (err) {
    next(err);
  }
};
