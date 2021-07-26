import { Module } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { EmployeeController } from './employee.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { EmployeeSchema } from './employee.model';
import { LoginModule } from 'src/login/login.module';

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: 'Employee',
      schema: EmployeeSchema
    }]),
    LoginModule],
  controllers: [EmployeeController],
  providers: [EmployeeService]
})
export class EmployeeModule {}
