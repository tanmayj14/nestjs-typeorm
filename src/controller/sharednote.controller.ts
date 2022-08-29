import {
    Body,
    Controller,
    Get,
    Post,
} from '@nestjs/common'; 
import { SharedNotesDto } from '../DTO/sharednote.dto';
import { SharedNoteService } from '../service/sharednote.service';
import { ApiTags } from '@nestjs/swagger';
import { SharedNote } from '../entity/sharednotes.entity';


@ApiTags('Shared Notes')
@Controller('sharednotes')
export class SharedNoteController {
    constructor(private readonly sharedNoteService: SharedNoteService) { }


    @Post('/create')
    async create(@Body() sharedNotesDto: SharedNotesDto): Promise<any> {
        let data = await this.sharedNoteService.createSharedNote(sharedNotesDto.target, sharedNotesDto.noteId, sharedNotesDto.sender);
        return {
            status: true,
            message: "success!",
            data: data,
        }
    }

    @Get('/getall')
    async findAll(): Promise<SharedNote[]> {
        return await this.sharedNoteService.findAll();
    }
}