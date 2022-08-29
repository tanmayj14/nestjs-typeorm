import { ApiProperty } from '@nestjs/swagger';


export class CreateUserDto {

    @ApiProperty({
        example: 'Tony',
        description: 'Enter firstName',
    })
    username: string;

    // @ApiProperty({
    //     example: 'notes',
    //     description: 'Enter notes',
    // })
    // notes: Array<any>;

    // @ApiProperty({
    //     example: 'notesSharedWithYou',
    //     description: 'Enter notesSharedWithYou',
    // })
    // notesSharedWithYou: Array<any>;

    // @ApiProperty({
    //     example: 'notesYouShared',
    //     description: 'Enter notesYouShared',
    // })
    // notesYouShared: Array<any>;
}