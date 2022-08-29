import { ApiProperty } from '@nestjs/swagger';


export class CreateUserDto {

    @ApiProperty({
        example: 'Tony',
        description: 'Enter firstName',
    })
    username: string;
}