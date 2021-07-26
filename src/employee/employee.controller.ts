import { Controller, Post } from '@nestjs/common';
import { EmployeeDto } from './employee.dto';
import { EmployeeService } from './employee.service';

@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Post('register')
  async register(data: EmployeeDto) {
    return this.employeeService.register(data);
  }
}
