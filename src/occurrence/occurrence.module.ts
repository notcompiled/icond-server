import { Module } from '@nestjs/common';
import { OccurrenceService } from './occurrence.service';
import { OccurrenceController } from './occurrence.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { OccurrenceSchema } from './occurrence.model';

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: 'Occurrence',
      schema: OccurrenceSchema
    }])],
  controllers: [OccurrenceController],
  providers: [OccurrenceService]
})
export class OccurrenceModule {}
