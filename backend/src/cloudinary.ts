import { v2 as cloudinary } from "cloudinary";

import { Readable } from "stream";

import dotenv from "dotenv";
import { requireEnv } from "./utils/envDataHandler";

dotenv.config();

(async function () {
  // Configuration
  cloudinary.config({
    cloud_name: requireEnv("CLOUD_NAME"),
    api_key: requireEnv("API_KEY"),
    api_secret: requireEnv("API_SECRET"),
  });
})();

export const uploadStream = (
  fileBuffer: Buffer,
  folder: string,
  filename: string
): Promise<any> => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      {
        folder: folder,
        public_id: filename,
        resource_type: "image",
      },
      (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      }
    );
    Readable.from(fileBuffer).pipe(stream);
  });
};
