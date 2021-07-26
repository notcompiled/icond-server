import { Body, Controller, Post } from '@nestjs/common';
import { Maintenance } from './maintenance.model';
import { MaintenanceService } from './maintenance.service';

@Controller('maintenance')
export class MaintenanceController {
  constructor(private readonly maintenanceService: MaintenanceService) {}

  @Post('insert')
  async insert(@Body() data: Maintenance) {
    const generatedId = await this.maintenanceService.insert(data);
    return { id: generatedId };
  }
}
