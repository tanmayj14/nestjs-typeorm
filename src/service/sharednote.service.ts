import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm"; 
import { Note } from "../entity/notes.entity";
import { SharedNote } from "../entity/sharednotes.entity";
import { User } from "../entity/user.entity";
import { Repository } from "typeorm"; 


@Injectable()
export class SharedNoteService {
    constructor(
        @InjectRepository(User) private userRepository: Repository<User>,
        @InjectRepository(Note) private noteRepository: Repository<Note>,
        @InjectRepository(SharedNote) private sharedNoteRepository: Repository<SharedNote>,
    ) { }

    async createSharedNote(target: string, noteId: number, sender: string) {
        let user = await this.userRepository.findOneBy({ username: sender });
        let shared = await this.userRepository.findOneBy({ username: target });
        let note = await this.noteRepository.findOneBy({ id: noteId });
        console.log("DATA - ", user, shared, note);

        const sharedNote = new SharedNote();
        sharedNote.senderId = user.id;
        sharedNote.targetId = shared.id;
        sharedNote.noteId = note.id;
        return await this.sharedNoteRepository.save(sharedNote);

    }

    async findAll() {
        return await this.sharedNoteRepository.find();
    }
}