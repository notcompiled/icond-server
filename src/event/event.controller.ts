import { Body, Controller, Post } from '@nestjs/common';
import { Event } from './event.model';
import { EventService } from './event.service';

@Controller('event')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Post('insert')
  async insert(@Body() data: Event) {
    const generatedId = await this.eventService.insert(data);
    return { id: generatedId };
  } 
}
