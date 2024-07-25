import { Response } from "express";
import { Request } from "../interface/request";
import * as categoryService from "../service/category";

export const getAllCategories = (req: Request, res: Response) => {
  const categories = categoryService.getAllCategories();
  return categories;
};
