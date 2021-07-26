import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { randomInt } from 'crypto';
import { Model } from 'mongoose';
import { HouseService } from 'src/house/house.service';
import { LoginService } from 'src/login/login.service';
import { ResidentDto } from './resident.dto';
import { Resident } from './resident.model';

@Injectable()
export class ResidentService {
    constructor(
        @InjectModel('Resident') private readonly residentModel: Model<Resident>,
        private readonly houseService: HouseService,
        private readonly loginService: LoginService
    ){}

    async findByEmail(email: string){
        const resident = await this.residentModel.findOne({email});
        if (!resident){
            throw new NotFoundException("Could not find user.");
        }
        return resident;
    }

    async find(id: string): Promise<Resident>{
        let resident;
        try{
            resident = await this.residentModel.findById(id);
        } catch (error) {
            throw new NotFoundException("Could not find user.");
        }
        if (!resident){
            throw new NotFoundException("Could not find user.");
        }
        return resident;
    }

    async insert(data: ResidentDto){
        const chars = "0123456789"
        let code = "";
        for (let i=0; i<6; i++) {
            code += chars[randomInt(0, chars.length-1)]
        }
        const newResident = new this.residentModel({
            name: data.name,
            cpf: data.cpf,
            phone: data.phone,
            email: data.email,
            payDay: data.payDay,
            isPaid: false,
            houseId: data.house,
            price: "890.3",
            pass: code
        });
        const result = await newResident.save();
        return result.id;
    }

    async update(data: Resident){
        const updatedUser = await this.find(data.id);
        const oldHouseTag = (await this.houseService.find(updatedUser.house)).tag;
        if (oldHouseTag !== data.house){
            await this.houseService.addResident(data.house, data.id);
            await this.houseService.removeResident(updatedUser.house, updatedUser.id);
            updatedUser.house = data.house;
        }
        updatedUser.name = data.name;
        updatedUser.cpf = data.cpf;
        updatedUser.phone = data.phone;
        updatedUser.email = data.email;
        updatedUser.payDay = data.payDay;
        updatedUser.isPaid = data.isPaid;
        updatedUser.price = data.price;
        updatedUser.pass = data.pass;
        updatedUser.save();
    }

    async delete(email: string){
        const resident = await this.findByEmail(email);
        const result = await this.residentModel.deleteOne({_id: resident.id}).exec();
        if (result.n === 0){
            throw new NotFoundException("Could not find user.");
        }
        this.houseService.removeResident(resident.house, resident.id);
    }
}
