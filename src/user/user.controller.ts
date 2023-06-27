import { Controller, Get, Param, Post, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('user')
export class UserController {
    @Get()
    getUsers() {
        return 'Hi, User';
    }

    @Post()
    store(@Req() req: Request) {
        return req.body;
    }

    @Get('/:userId')
    getUser(@Param() userId: number) {
        return userId;
    }
}
