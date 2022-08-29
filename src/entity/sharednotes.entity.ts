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
  @ManyToOne(() => User, user => user.notesSharedWithYou)
  @JoinColumn({ name: "targetId" })
  target: User;

  @PrimaryColumn()
  senderId: number;
  @ManyToOne(() => User, user => user.notesYouShared)
  @JoinColumn({ name: "senderId" })
  sender: User;

  @PrimaryColumn()
  noteId: number;
  @ManyToOne(() => Note, note => note.shares)
  @JoinColumn({ name: "noteId" })
  note: Note;
}