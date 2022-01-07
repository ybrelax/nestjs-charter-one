import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  create(): string {
    return '创建成功';
  }

  // 当前可以匹配到 http://localhost:3000/app/user_***
  @Get('user_*')
  getUser(): string {
    return 'you get user info';
  }

  // 当前可以匹配到 http://localhost:3000/app/user/****
  @Get('user/:id')
  updateUser(): string {
    return 'you update user info';
  }

  // 注意这里有点意思的是，首先是先匹配到上面的逻辑，然后就不再进行匹配，
  // 如果要首先匹配下面的路由逻辑，可以将下面的代码移动到上面（交换下位置）
  @Get('user/update')
  update(): string {
    return 'update';
  }
}
