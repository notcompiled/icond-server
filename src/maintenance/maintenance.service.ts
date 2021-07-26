import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Maintenance } from './maintenance.model';

@Injectable()
export class MaintenanceService {
    constructor(
        @InjectModel('Maintenance') private readonly maintenanceModel: Model<Maintenance>
    ){}

    async insert(data: Maintenance) {
        const newMaintenance = new this.maintenanceModel({
            motive: data.motive,
            description: data.description
        })
        const result = await newMaintenance.save();
        return result.id;
    }
}
