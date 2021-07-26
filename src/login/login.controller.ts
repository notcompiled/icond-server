import { Body, Controller, Post } from '@nestjs/common';
import { LoginService } from './login.service';

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post()
  async login(@Body('username') username: string, @Body('password') password: string) {
    return this.loginService.login(username, password);
  }
}
