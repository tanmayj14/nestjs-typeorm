import {
    Body,
    Controller, 
    Get, 
    Post, 
} from '@nestjs/common';
import { NoteService } from '../service/note.service';
import { NotesDTO } from '../DTO/note.dto';   
import { ApiTags } from '@nestjs/swagger';
import { Note } from '../entity/notes.entity';


@ApiTags('Notes')
@Controller('notes')
export class NoteController {
    constructor(private readonly notesService: NoteService) { }

    @Post('/create')        // create notes api
    async create(@Body() notesDTO: NotesDTO): Promise<any> {
        let data = await this.notesService.createNote(notesDTO.text, notesDTO.ownerName);
        return {
            status: true,
            message: "success!",
            data: data,
        }
    }

    @Get('/get')        // get all notes
    async findAll(): Promise<Note[]> {
        return await this.notesService.findAll();
    }

    // @Get('/getById/:id')
    // async findOne(@Param('id', ParseIntPipe) id: number): Promise<any> {
    //     let userByID = await this.usersService.getUserById(id);
    //     if (!userByID) {
    //         return {
    //             status: true,
    //             message: "No record found!",
    //         }
    //     }
    //     return {
    //         status: true,
    //         message: "success!",
    //         data: userByID,
    //     }
    // }

    // @Delete('/deleteById/:id')
    // async remove(@Param('id') id: string): Promise<any> {
    //     let data = await this.usersService.deleteUserById(id);
    //     if (!data) {
    //         return {
    //             status: true,
    //             message: "No record found!",
    //         }
    //     }
    //     return {
    //         status: true,
    //         message: "record deleted!",
    //         data,
    //     }
    // }
}