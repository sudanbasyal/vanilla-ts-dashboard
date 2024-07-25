import { Response } from "express";
import * as supplierService from "../service/supplier";
import { Request } from "../interface/request";

export const RegisterCompany = async (req: Request, res: Response) => {
  try {
    console.log("route reached here");
    if (!req.files) {
      res.json("err uploading file");
    }

    console.log("reqfiles", req.files);

    const imageFiles = req.files as { [key: string]: Express.Multer.File[] };
    await supplierService.uploadImage(imageFiles);
  } catch (e) {
    console.log(e);
  }
};

export const company = async (req: Request, res: Response) => {
  const id = req.user?.id!;
  try {
    let {
      name,
      phoneNumber,
      address,
      location,
      userId,
      categoryId,
      price,
      availableDays,
      openingTime,
      closingTime,
      description,
      serviceIds,
    } = req.body;

    const imageFiles = req.files as { [key: string]: Express.Multer.File[] };
    console.log(req.body);

    const newCompany = await supplierService.registerCompany(
      req.body,
      imageFiles
    );
    res.json(newCompany);
  } catch (e) {
    console.log(e);
  }
};
