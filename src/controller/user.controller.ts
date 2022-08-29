import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    ParseIntPipe,
} from '@nestjs/common';
import { UserService } from '../service/user.service';
import { CreateUserDto } from '../DTO/user.dto'; 
import { ApiTags } from '@nestjs/swagger';
import { User } from '../entity/user.entity';

@ApiTags('Users')
@Controller('users')
export class UserController {
    constructor(private readonly usersService: UserService) { }

    @Post('/create')            // user create api
    async create(@Body() createUserDto: CreateUserDto): Promise<any> {
        let data = await this.usersService.createUser(createUserDto);
        return {
            status: true,
            message: "success!",
            data: data,
        }
    }

    @Get('/getAll')         // user get all api
    async findAll(): Promise<User[]> {
        return await this.usersService.findAll();
    }

    @Get('/getById/:id')    // user get by Id
    async findOne(@Param('id', ParseIntPipe) id: number): Promise<any> {
        let userByID = await this.usersService.getUserById(id);
        if (!userByID) {
            return {
                status: true,
                message: "No record found!",
            }
        }
        return {
            status: true,
            message: "success!",
            data: userByID,
        }
    }

    @Delete('/deleteById/:id')          // user delete by Id
    async remove(@Param('id') id: string): Promise<any> {
        return await this.usersService.deleteUserById(id);

    }
}