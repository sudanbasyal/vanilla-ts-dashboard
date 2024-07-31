import { authenticate } from "./../middleware/auth";
import { Router } from "express";
import { createBooking } from "../controller/booking";
import { viewBookings } from "../controller/booking";

const bookingRouter = Router();

bookingRouter.post("/", createBooking);
bookingRouter.get("/", authenticate, viewBookings);

export default bookingRouter;
