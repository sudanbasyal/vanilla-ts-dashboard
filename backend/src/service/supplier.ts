import {
  storage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "../firebase";

export const test = async (imageFiles: {
  [key: string]: Express.Multer.File[];
}) => {
  console.log(imageFiles);
  const firstKey = Object.keys(imageFiles)[0];
  const userPhoto = imageFiles[firstKey][0];

  const userImageStorageRef = ref(
    storage,
    `company-images/1/${userPhoto.originalname}`
  );
  const userImageMetaData = {
    contentType: userPhoto.mimetype,
  };
  const userImageSnapshot = await uploadBytesResumable(
    userImageStorageRef,
    userPhoto.buffer,
    userImageMetaData
  );
  const userImageUrl = await getDownloadURL(userImageSnapshot.ref);
};
