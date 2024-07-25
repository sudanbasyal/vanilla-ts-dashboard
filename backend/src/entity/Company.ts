// import {
//   Entity,
//   PrimaryGeneratedColumn,
//   Column,
//   OneToMany,
//   DeleteDateColumn,
//   ManyToMany,
//   JoinColumn,
// } from "typeorm";
// import { Service } from "./Service";
// @Entity({ name: "comapnies" })
// export class Category {
//   @PrimaryGeneratedColumn()
//   id: number;

//   @Column()
//   name: string;

//   @Column()
//   description: string;

//   @Column()
//   address: string;

//   @Column()
//   phoneNumber: string;

//   // @OneToMany(
//   //   () => ServiceToSupplier,
//   //   (serviceToSupplier) => serviceToSupplier.supplier,
//   //   { cascade: true }
//   // )
//   // serviceToSupplier: ServiceToSupplier[];

//   // @ManyToMany(() => Service, (service) => service.category)
//   // services: Service[];
// }

import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToMany,
  DeleteDateColumn,
  ManyToOne,
  OneToMany,
  JoinTable,
  OneToOne,
} from "typeorm";

import { User } from "./User";
import { Category } from "./Category";
import { ServiceToCompany } from "./Company_Service";
// import { ServiceToCompany } from "./Company_Service";

@Entity("companies")
export class Company extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  phoneNumber: string;

  @Column()
  address: string;

  @Column()
  location: string;

  @Column()
  isActive: boolean;

  @Column()
  photo: string;

  @Column()
  openingTime: string;

  @Column()
  closingTime: string;

  @Column()
  availableDays: string;

  @Column()
  panPhoto: string;

  @Column()
  isPending: boolean;

  @DeleteDateColumn({ name: "deletedAt", nullable: true })
  deletedAt: Date;

  @ManyToOne(() => User, (user) => user.company)
  user: User;

  @ManyToOne(() => Category, (category) => category.company)
  category: Category;

  @OneToMany(
    () => ServiceToCompany,
    (serviceToCompany) => serviceToCompany.company,
    { cascade: true }
  )
  ServiceToCompany: ServiceToCompany[];
}
