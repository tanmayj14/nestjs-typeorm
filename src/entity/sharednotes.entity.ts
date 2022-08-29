import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from "typeorm";
import { Note } from "./notes.entity";
import { User } from "./user.entity";

@Entity()
export class SharedNote extends BaseEntity {

  @PrimaryColumn()
  targetId: number;
  @ManyToOne(() => User, user => user.notesSharedWithYou)       // many to one relation [one-User , many-notesSharedWithYou]
  @JoinColumn({ name: "targetId" })                         // coloumn field name - targetId
  target: User;

  @PrimaryColumn()
  senderId: number;
  @ManyToOne(() => User, user => user.notesYouShared)           // many to one relation [many-notesYouShared, one-User]
  @JoinColumn({ name: "senderId" })               // coloumn field name - senderId
  sender: User;

  @PrimaryColumn()
  noteId: number;
  @ManyToOne(() => Note, note => note.shares)       // many to one relation [many-shares, one-user]
  @JoinColumn({ name: "noteId" })             // coloumn field name - noteId
  note: Note;
}