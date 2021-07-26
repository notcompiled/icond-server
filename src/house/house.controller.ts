import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { House } from './house.model';
import { HouseService } from './house.service';

@Controller('house')
export class HouseController {
  constructor(private readonly houseService: HouseService) {}

  @Get(':id')
  async find(@Param('id') id: string){
    return this.houseService.find(id);
  }

  @Post('insert')
  async insert(@Body() data: House){
    const generatedId = await this.houseService.insert(data);
    return { id: generatedId };
  }

  @Put('update')
  async update(@Body() data: House){
    this.houseService.update(data);
    return null;
  }

  @Delete('delete')
  async delete(@Body() email: string){
    this.houseService.delete(email);
    return null;
  }
}
