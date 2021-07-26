import { Module } from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginController } from './login.controller';
import { EmployeeModule } from 'src/employee/employee.module';

@Module({
  exports: [LoginService],
  controllers: [LoginController],
  providers: [LoginService]
})
export class LoginModule {}
