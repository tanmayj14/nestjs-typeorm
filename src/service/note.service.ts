import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm"; 
import { Note } from "../entity/notes.entity";
import { User } from "../entity/user.entity";
import { Repository } from "typeorm"; 


@Injectable()
export class NoteService {
    constructor(
        @InjectRepository(Note) private noteRepository: Repository<Note>,
        @InjectRepository(User) private userRepository: Repository<User>,
    ) { }

    async createNote(text: string, name: string): Promise<any> {
        let user = await this.userRepository.findOneBy({ username: name });
        const note = new Note();
        note.text = text;
        note.ownerId = user.id;
        return await this.noteRepository.save(note);
    }

    async findAll() {
        return await this.noteRepository.find();
    }

}