import { Body, Controller, Post } from '@nestjs/common';
import { EmployeeDto } from './employee.dto';
import { EmployeeService } from './employee.service';

@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Post('insert')
  async insert(@Body() data: EmployeeDto) {
    const generatedId = await this.employeeService.insert(data);
    return { id: generatedId };
  }
}
