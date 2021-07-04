import { Module } from '@nestjs/common';
import { HouseService } from './house.service';
import { HouseController } from './house.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { HouseSchema } from './house.model';

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: 'House',
      schema: HouseSchema
    }])
  ],
  exports: [HouseService],
  controllers: [HouseController],
  providers: [HouseService]
})
export class HouseModule {}
