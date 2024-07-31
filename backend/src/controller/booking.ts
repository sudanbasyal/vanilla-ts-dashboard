import httpStatusCodes from "http-status-codes";
import { NextFunction, Response } from "express";
import { Request } from "../interface/request";
import * as bookingService from "../service/booking";
import { http } from "winston";

export const createBooking = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userId = req.user?.id!;
    const data = req.body;
    const booking = await bookingService.createBooking(data);
    res.status(httpStatusCodes.CREATED).json("successful");
  } catch (err) {
    console.log("error catched", err);
    next(err);
  }
};

export const viewBookings = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const supplierId = req.user?.id!;
  const bookings = await bookingService.viewBookings(supplierId);
};



