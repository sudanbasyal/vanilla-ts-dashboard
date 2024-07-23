import express from "express";
import "reflect-metadata";

import rateLimiter from "express-rate-limit";
import cors from "cors";
import helmet from "helmet";

import config from "./config";
import { genericErrorHandler } from "./middleware/errorHandler";
import router from "./route";

const app = express();

// const limiter = rateLimiter({
//   windowMs: 60 * 1000,
//   limit: 10,
//   message: "Too many request",
// });

app.use(helmet());

// app.use(limiter);

// const allowedOrigins = ["http://localhost:5174/"];

// app.use(
//   cors({
//     origin: (origin, callback) => {
//       if (!origin || allowedOrigins.includes(origin)) {
//         callback(null, origin);
//       } else {
//         callback(new Error("Not allowed"));
//       }
//     },
//   })
// );

app.use(
  cors({
    allowedHeaders: "*",
  })
);

app.use(express.json());

// router middleware
app.use(router);

// calling DB

// app.use(RequestLogger);

app.use(genericErrorHandler);

app.listen(config.port, () => {
  console.log(`app is listening on ${config.port}`);
});
