import { Module } from '@nestjs/common';
import { MaintenanceService } from './maintenance.service';
import { MaintenanceController } from './maintenance.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { MaintenanceSchema } from './maintenance.model';

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: 'Maintenance',
      schema: MaintenanceSchema
    }])],
  controllers: [MaintenanceController],
  providers: [MaintenanceService]
})
export class MaintenanceModule {}
