import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToOne,
  CreateDateColumn,
} from "typeorm";
import { User } from "./User";
import { Company } from "./Company";
import { ServiceToCompany } from "./Company_Service";

@Entity("bookings")
export class Booking extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  contactName: string;

  @Column()
  phoneNumber: string;

  @Column()
  contactAddress: string;

  @Column()
  bookedDate: string;

  @Column()
  isApproved: boolean;

  @Column({ type: "text", nullable: true })
  specialInstructions: string;

  @CreateDateColumn({ type: "timestamp" })
  createdAt: Date;

  @Column({ type: "timestamp", nullable: true })
  cancelledBooking: Date;

  @ManyToOne(() => User, (user) => user.bookings)
  user: User;

  @ManyToOne(() => Company, (company) => company.bookings)
  company: Company;

  @ManyToOne(
    () => ServiceToCompany,
    (serviceToCompany) => serviceToCompany.booking
  )
  serviceToCompany: ServiceToCompany;
}
