import { Body, Controller, Post } from '@nestjs/common';
import { Occurrence } from './occurrence.model';
import { OccurrenceService } from './occurrence.service';

@Controller('occurrence')
export class OccurrenceController {
  constructor(private readonly occurrenceService: OccurrenceService) {}

  @Post('insert')
  async register(@Body() data: Occurrence) {
    const generatedId = await this.occurrenceService.register(data);
    return { id: generatedId }
  }
}
