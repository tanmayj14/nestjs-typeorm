import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from "typeorm";
import { SharedNote } from "./sharednotes.entity";
import { User } from "./user.entity";

@Entity()
export class Note extends BaseEntity {
  @PrimaryGeneratedColumn()     // Primary Key
  id: number;

  @Column()
  text: string;

  @Column()
  ownerId: number;
  @ManyToOne(() => User, user => user.notes)      // many to one relation [many-Notes, one-User]
  @JoinColumn({ name: "ownerId" })                // coloumn field name - ownerId
  owner: User;

  @OneToMany(() => SharedNote, sharedNote => sharedNote.note)
  shares: SharedNote[];
}