import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { HouseService } from 'src/house/house.service';
import { Resident } from './resident.model';

@Injectable()
export class ResidentService {
    constructor(
        @InjectModel('Resident') private readonly residentModel: Model<Resident>,
        private readonly houseService: HouseService
    ){}

    async insert(data: Resident){
        const houseId = await this.houseService.findByTag(data.house)
        const newResident = new this.residentModel({
            name: data.name,
            cpf: data.cpf,
            phone: data.phone,
            email: data.email,
            payDay: data.payDay,
            isPaid: data.isPaid,
            house: houseId,
            price: data.price,
            pass: data.pass
        });
        const result = await newResident.save();
        this.houseService.addResident(houseId, result.id);
        return result.id;
    }
}
