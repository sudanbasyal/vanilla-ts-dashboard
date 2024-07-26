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

export const findByName = async (name: string) => {
  return await companyRepository.findOne({ where: { name } });
};

export const findByCompanyId = async (id: number, userId: number) => {
  console.log(id, userId);

  return await companyRepository.findOne({
    where: {
      id,
      user: { id: userId },
    },
    relations: ["ServiceToCompany"],
  });
};

export const findAll = async (id: number) => {
  return await companyRepository.find({ where: { user: { id } } });
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

  await companyRepository.save(newCompany);

  const promises = services.map(async (item, index) => {
    const comapnyService = new ServiceToCompany();
    comapnyService.description = item.description;
    comapnyService.price = data.price[index];
    comapnyService.company = newCompany;
    comapnyService.service = item;
    await companyServiceRepository.save(comapnyService);
  });

  return await Promise.all(promises);
};

export const remove = async (company: Company) => {
  return await companyRepository.softRemove(company);
};

export const uploadImage = async (imageFiles: {
  [key: string]: Express.Multer.File[];
}) => {
  const firstKey = Object.keys(imageFiles)[0];
  const companyPhoto = imageFiles[firstKey][0];
  const secondKey = Object.keys(imageFiles)[1];
  const panPhoto = imageFiles[secondKey][0];

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

  const category = await getCategory(Number(data.categoryId));
  if (!category) throw new BadRequestError("category not found");

  const companyServices = await services.getServicesByIds(data.serviceIds);
  if (!companyServices) throw new BadRequestError("services not found");

  const companyexisits = await findByName(data.name);
  if (companyexisits) throw new BadRequestError("company already exists ");

  const newCompany = await createCompany(
    data,
    uploadFormImages,
    companyServices
  );

  if (!newCompany) throw new BadRequestError("company not created");

  return newCompany;
};

export const getCompanies = async (id: number) => {
  if (!id) throw new BadRequestError("user not found");
  const companies = await findAll(id);
  if (companies.length === 0) throw new BadRequestError("companies dont exist");
  return companies;
};

export const deleteCompany = async (id: number, userId: number) => {
  if (!userId) throw new BadRequestError("user not found");

  const companyExists = await findByCompanyId(id, userId);

  if (!companyExists) throw new BadRequestError("company doesnt exist");

  const deletedCompany = await remove(companyExists);
  return deletedCompany;

  // const deltedCompany = await delete (userId, id);
  // const companies = await delete (userId, id);
  // if (companies.length === 0) throw new BadRequestError("companies dont exist");
  // return companies;
};
