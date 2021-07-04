import { Body, Controller, Post } from '@nestjs/common';
import { House } from './house.model';
import { HouseService } from './house.service';

@Controller('house')
export class HouseController {
  constructor(private readonly houseService: HouseService) {}

  @Post()
  async add(@Body() data: House){
    const generatedId = await this.houseService.insert(data);
    return { id: generatedId }
  }
}
