import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, OneToMany } from 'typeorm';
import { Note } from './notes.entity';
import { SharedNote } from './sharednotes.entity';

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @OneToMany(() => Note, note => note.owner)
    notes: Note[];

    @OneToMany(() => SharedNote, sharedNote => sharedNote.target)
    notesSharedWithYou: Note[];

    @OneToMany(() => SharedNote, sharedNote => sharedNote.sender)
    notesYouShared: Note[];
}