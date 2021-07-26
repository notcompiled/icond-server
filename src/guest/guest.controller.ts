import { Body, Controller, Post } from '@nestjs/common';
import { Guest } from './guest.model';
import { GuestService } from './guest.service';

@Controller('guest')
export class GuestController {
  constructor(private readonly guestService: GuestService) {}

  @Post('insert')
  async insert(@Body() data: Guest) {
    const generatedId = await this.guestService.insert(data);
    return { id: generatedId };
  }
}
