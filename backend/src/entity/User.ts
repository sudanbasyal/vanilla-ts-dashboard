import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  ManyToMany,
  JoinTable,
} from "typeorm";

import { UserProfile } from "./UserProfile";
import { Role } from "./Role";

@Entity({ name: "users" })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @CreateDateColumn()
  createdAt: Date;

  @DeleteDateColumn()
  deletedAt?: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToOne(() => UserProfile, { cascade: true })
  @JoinColumn()
  profile: UserProfile;

  @ManyToMany(() => Role, (role) => role.users, { cascade: true })
  @JoinTable({ name: "user_roles" })
  roles: Role[];
}
