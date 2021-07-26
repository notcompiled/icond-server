import { Module } from '@nestjs/common';
import { GuestService } from './guest.service';
import { GuestController } from './guest.controller';
import { GuestSchema } from './guest.model';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{
    name: 'Guest',
    schema: GuestSchema
  }])],
  controllers: [GuestController],
  providers: [GuestService]
})
export class GuestModule {}
