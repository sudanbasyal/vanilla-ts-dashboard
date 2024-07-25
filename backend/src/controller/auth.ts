import httpStatusCodes from "http-status-codes";
import { NextFunction } from "express";
import * as authService from "../service/auth";
import { Request, Response } from "express";
import { BadRequestError } from "../error/BadRequestError";
import { NotFoundError } from "../error/NotFoundError";

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { body } = req;
  try {
    const data = await authService.login(body);

    if (!data) {
      next(new NotFoundError("login failed"));
      return;
    }
    res.status(httpStatusCodes.OK).json({ message: data });
  } catch (err) {
    next(err);
  }
};
