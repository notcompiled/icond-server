import { Body, Controller, Post } from '@nestjs/common';
import { Resident } from './resident.model';
import { ResidentService } from './resident.service';

@Controller('resident')
export class ResidentController {
  constructor(private readonly residentService: ResidentService) {}

  @Post()
  async add(@Body() data: Resident){
    const generatedId = await this.residentService.insert(data);
    return { id: generatedId }
  }
}
