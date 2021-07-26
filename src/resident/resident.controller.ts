import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Resident } from './resident.model';
import { ResidentService } from './resident.service';

@Controller('resident')
export class ResidentController {
  constructor(private readonly residentService: ResidentService) {}

  @Get(':id')
  async find(@Param('id') id: string){
    return this.residentService.find(id);
  }

  @Post('insert')
  async insert(@Body() data: Resident){
    const generatedId = await this.residentService.insert(data);
    return { id: generatedId };
  }

  @Put('update')
  async update(@Body() data: Resident){
    return this.residentService.update(data);
  }

  @Delete('delete')
  async delete(@Body() email: string){
    return this.residentService.delete(email);
  }

}
