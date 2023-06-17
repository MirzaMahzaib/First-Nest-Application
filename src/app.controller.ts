import { Controller, Get, Req, Post, Param } from '@nestjs/common';
import { Request } from 'express';

@Controller()
export class AppController {
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
