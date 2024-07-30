import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToMany,
  DeleteDateColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  JoinColumn,
  JoinTable,
} from "typeorm";
import { Service } from "./Service";
import { Company } from "./Company";
import { Booking } from "./Booking";

@Entity("company_services")
export class ServiceToCompany extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  price: string;

  @Column({ nullable: true })
  description: string;

  @ManyToOne(() => Service, (service) => service.serviceToCompany, {
    cascade: true,
  })
  service: Service;

  @OneToMany(
    () => ServiceToCompany,
    (serviceToCompany) => serviceToCompany.booking
  )
  booking: Booking[];

  @ManyToOne(() => Company, (company) => company.ServiceToCompany)
  company: Company;

  @DeleteDateColumn({ name: "deletedAt", nullable: true })
  deletedAt: Date;
}
