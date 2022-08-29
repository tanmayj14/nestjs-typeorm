import { ApiProperty } from '@nestjs/swagger';


export class SharedNotesDto {

    @ApiProperty({
        example: 'Tony',
        description: 'Enter senderName',
    })
    sender: string;

    @ApiProperty({
        example: 'Thor',
        description: 'Enter targetName',
    })
    target: string;

    @ApiProperty({
        example: '1',
        description: 'Enter noteId',
    })
    noteId: number;

}