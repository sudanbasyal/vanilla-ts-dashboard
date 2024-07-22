import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm";
import { User } from "./User";

@Entity({ name: "user_profiles" })
export class UserProfile {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  address: string;

  @Column()
  phoneNumber: string;

  @OneToOne(() => User, (user) => user.profile)
  user: User;
}
