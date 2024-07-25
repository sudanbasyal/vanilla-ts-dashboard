import { company } from "./../controller/supplier";
import { AppDataSource } from "../dataSource";

import { companyData } from "../interface/company";
import * as services from "./services";
import { BadRequestError } from "../error/BadRequestError";
import { getCategory } from "./category";
import { Company } from "../entity/Company";
import { User } from "../entity/User";
import { Category } from "../entity/Category";
import { uploadStream } from "../cloudinary";
import { ServiceToCompany } from "../entity/Company_Service";
import { Service } from "../entity/Service";

const companyRepository = AppDataSource.getRepository(Company);
const companyServiceRepository = AppDataSource.getRepository(ServiceToCompany);

export const findCompany = async (name: string) => {
  return await companyRepository.findOne({ where: { name } });
};

export const createCompany = async (
  data: companyData,
  imageurl: { [key: string]: string },
  services: Service[]
) => {
  const newCompany = new Company();
  newCompany.name = data.name;

  newCompany.address = data.address;
  newCompany.location = data.location;
  newCompany.phoneNumber = data.phoneNumber;
  newCompany.isActive = true;
  newCompany.isPending = true;
  newCompany.user = data.userId as unknown as User;
  newCompany.category = data.categoryId as unknown as Category;
  newCompany.photo = imageurl.companyImageUrl;
  newCompany.panPhoto = imageurl.panImageUrl;
  newCompany.openingTime = data.openingTime;
  newCompany.closingTime = data.closingTime;
  newCompany.availableDays = data.aviliableDays;

  await companyRepository.save(newCompany);

const promises = services.map(async (item, index) => {
  const comapnyService = new ServiceToCompany();
  comapnyService.description = item.description;
  comapnyService.price = data.price[index];
  comapnyService.company = newCompany;
  comapnyService.service = item;
  await companyServiceRepository.save(comapnyService);
});

await Promise.all(promises);

  // const promise = data.serviceIds.forEach((id: string, index) => {
  //   const companyServices = new ServiceToCompany();
  //   companyServices.price = data.price[index];
  // });
  // const companyServices = new ServiceToCompany();
  // companyServices.description = data.description;

  // newCompany.category = await getCategory(data.categoryId);
  // newCompany.price = data.price;
  // newCompany.aviliableDays = data.aviliableDays;
  // newCompany.openingTime = data.openingTime;
  // newCompany.closingTime = data.closingTime;
  // newCompany.description = data.description;
  // newCompany.companyPhoto = imageurl["company"];
  // newCompany.panPhoto = imageurl["pan"];
  // newCompany.services = await services.findByIds(data.serviceIds);
  // return await companyRepository.save(newCompany);
};
// export const uploadImage = async (imageFiles: {
//   [key: string]: Express.Multer.File[];
// }) => {
//   const firstKey = Object.keys(imageFiles)[0];
//   const companyPhoto = imageFiles[firstKey][0];
//   const secondKey = Object.keys(imageFiles)[1];
//   const panPhoto = imageFiles[secondKey][0];

//   console.log("companyPhoto", companyPhoto);

//   // const comapnyImageStorageRef = ref(
//   //   storage,
//   //   `company-images/1/${companyPhoto.originalname}`
//   // );

//   // const panImageStorageRef = ref(
//   //   storage,
//   //   `pan-images/1/${panPhoto.originalname}`
//   // );

//   // const comapnyImageMetaData = {
//   //   contentType: companyPhoto.mimetype,
//   // };

//   // const panImageMetaData = {
//   //   contentType: panPhoto.mimetype,
//   // };

//   // const companyImageSnapshot = await uploadBytesResumable(
//   //   comapnyImageStorageRef,
//   //   companyPhoto.buffer,
//   //   comapnyImageMetaData
//   // );

//   // const panImageSnapshot = await uploadBytesResumable(
//   //   panImageStorageRef,
//   //   panPhoto.buffer,
//   //   panImageMetaData
//   // );

//   // const companyImageUrl = await getDownloadURL(companyImageSnapshot.ref);
//   // const panImageUrl = await getDownloadURL(panImageSnapshot.ref);

//   // return { companyImageUrl, panImageUrl };
// };

export const uploadImage = async (imageFiles: {
  [key: string]: Express.Multer.File[];
}) => {
  const firstKey = Object.keys(imageFiles)[0];
  const companyPhoto = imageFiles[firstKey][0];
  const secondKey = Object.keys(imageFiles)[1];
  const panPhoto = imageFiles[secondKey][0];

  console.log("companyPhoto", companyPhoto);

  // // Upload company photo to Cloudinary using buffer
  const companyImageResult = await uploadStream(
    companyPhoto.buffer,
    "company-images",
    companyPhoto.originalname
  );
  const companyImageUrl = companyImageResult.secure_url;

  const panImageResult = await uploadStream(
    panPhoto.buffer,
    "pan-images",
    panPhoto.originalname
  );
  const panImageUrl = panImageResult.secure_url;

  console.log("panimage", panImageUrl);

  return { companyImageUrl, panImageUrl };
};

export const registerCompany = async (
  data: companyData,
  imageFiles: {
    [key: string]: Express.Multer.File[];
  }
) => {
  const uploadFormImages = await uploadImage(imageFiles);
  // console.log("upload mages", uploadFormImages);

  const category = await getCategory(Number(data.categoryId));
  if (!category) throw new BadRequestError("category not found");

  const companyServices = await services.getServicesByIds(data.serviceIds);
  if (!companyServices) throw new BadRequestError("services not found");

  const companyexisits = await findCompany(data.name);
  if (companyexisits) throw new BadRequestError("company already exists ");

  const newCompany = await createCompany(
    data,
    uploadFormImages,
    companyServices
  );
  console.log(newCompany);
};
