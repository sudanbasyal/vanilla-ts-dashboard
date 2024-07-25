import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  DeleteDateColumn,
} from "typeorm";
import { Expose } from "class-transformer";
import { Service } from "./Service";
import { Company } from "./Company";
@Entity({ name: "categories" })
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @DeleteDateColumn()
  deletedAt: string;

  @OneToMany(() => Service, (service) => service.category)
  services: Service[];

  @OneToMany(() => Company, (company) => company.category)
  company: Company[];
}
