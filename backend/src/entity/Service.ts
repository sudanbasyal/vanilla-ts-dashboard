import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Category } from "./Category";
import { ServiceToCompany } from "./Company_Service";

@Entity({ name: "services" })
export class Service {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @ManyToOne(() => Category, (category) => category.services)
  category: Category;

  @OneToMany(
    () => ServiceToCompany,
    (serviceToCompany) => serviceToCompany.service
  )
  serviceToCompany: ServiceToCompany[];
}
