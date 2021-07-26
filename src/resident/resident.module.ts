import { Module } from '@nestjs/common';
import { ResidentService } from './resident.service';
import { ResidentController } from './resident.controller';
import { ResidentSchema } from './resident.model';
import { MongooseModule } from '@nestjs/mongoose';
import { HouseModule } from 'src/house/house.module';
import { LoginModule } from 'src/login/login.module';

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: 'Resident',
      schema: ResidentSchema
    }]),
    HouseModule, LoginModule
  ],
  controllers: [ResidentController],
  providers: [ResidentService]
})
export class ResidentModule {}
