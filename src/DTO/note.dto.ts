import { ApiProperty } from '@nestjs/swagger';


export class NotesDTO {

    @ApiProperty({
        example: 'Mind Your Own Business',
        description: 'Enter title',
    })
    text: string;

    @ApiProperty({
        example: 'Tony',
        description: 'Enter owner Name',
    })
    ownerName: string;
 
}