import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { mongoDbUrl } from './credentials';
import { UserModule } from './user/user.module';
import { ResidentModule } from './resident/resident.module';
import { HouseModule } from './house/house.module';
import { EmployeeModule } from './employee/employee.module';
import { LoginModule } from './login/login.module';

@Module({
  imports: [MongooseModule.forRoot(mongoDbUrl), UserModule, ResidentModule, HouseModule, EmployeeModule, LoginModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
