import { Body, Controller, Delete, Get, Param, Patch, Post, Req, ParseIntPipe } from '@nestjs/common';
import { Request } from 'express';
import { UserService } from './user.service';
import { updateUserDTO } from './dto/update-user.dto';
import { createUserDTO } from './dto/create-user.dto';

@Controller('/user')
export class UserController {
    constructor(private userService: UserService) { }

    @Get()
    getUsers() {
        return this.userService.get();
    }

    @Post()
    store(@Body() createUserDTO: createUserDTO) {
        return this.userService.create(createUserDTO);
    }

    @Patch('/:userId')
    update(@Body() updateUserDTO: updateUserDTO, @Param('userId', ParseIntPipe) userId: number) {
        return this.userService.update(updateUserDTO, userId);
    }

    @Get('/:userId')
    getUser(@Param('userId', ParseIntPipe) userId: number) {
        return this.userService.show(userId);
    }

    @Delete('/:userId')
    deleteUser(@Param('userId', ParseIntPipe) userId: number) {
        return this.userService.delete(userId);
    }
}
