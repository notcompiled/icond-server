import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { EmployeeDto } from './employee.dto';
import { EmployeeService } from './employee.service';

@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}


  @Get(':id')
  async find(@Param('id') id: string) {
    return this.employeeService.find(id);
  }

  @Post('insert')
  async insert(@Body() data: EmployeeDto) {
    const generatedId = await this.employeeService.insert(data);
    return { id: generatedId };
  }
}
