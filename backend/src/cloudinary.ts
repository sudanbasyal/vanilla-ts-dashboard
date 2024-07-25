import { v2 as cloudinary } from "cloudinary";

import { Readable } from "stream";

(async function () {
  // Configuration
  cloudinary.config({
    cloud_name: "dy1ou7jjj",
    api_key: "239978918994972",
    api_secret: "GC8v1NNbYy6uO4q2UhO9EC6d1wQ", // Click 'View Credentials' below to copy your API secret
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
