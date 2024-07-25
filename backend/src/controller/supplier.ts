import { Request, Response } from "express";
import * as SupplierService from "../service/supplier";

export const RegisterCompany = async (req: Request, res: Response) => {
  try {
    console.log("route reached here");
    if (!req.files) {
      res.json("err uploading file");
    }

    const imageFiles = req.files as { [key: string]: Express.Multer.File[] };
    await SupplierService.test(imageFiles);
  } catch (e) {
    console.log(e);
  }
};
