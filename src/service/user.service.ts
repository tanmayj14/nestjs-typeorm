import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "../entity/user.entity";
import { Repository } from "typeorm"; 
import { CreateUserDto } from "../DTO/user.dto";


@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User) private userRepository: Repository<User>,
    ) { }

    async findAll() {
        return await this.userRepository.find();
    }

    async createUser(createUserDto: CreateUserDto): Promise<any> {
        const user = new User();
        user.username = createUserDto.username;
        // user.notes = createUserDto.notes;
        // user.notesSharedWithYou = createUserDto.notesSharedWithYou;
        // user.notesYouShared = createUserDto.notesYouShared;
        return await this.userRepository.save(user);
    }

    async getUserById(id: number) {
        return await this.userRepository.findOneBy({ id: id });
    } 

    async deleteUserById(id: string) {
        return await this.userRepository.delete(id);
    }
}