import { Body, Controller, Post } from '@nestjs/common';
import { User } from './user.model';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async add(@Body() data: User){
    const generatedId = await this.userService.insert(data);
    return { id: generatedId }
  }
}
