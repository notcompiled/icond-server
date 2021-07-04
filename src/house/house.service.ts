import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { House } from './house.model';

@Injectable()
export class HouseService {
    constructor(
        @InjectModel('House') private readonly houseModel: Model<House>
    ){}

    private async findHouse(id: string): Promise<House>{
        let house;
        try{
            house = await this.houseModel.findById(id);
        } catch (error) {
            throw new NotFoundException("Could not find house.");
        }
        if (!house){
            throw new NotFoundException("Could not find house.");
        }
        return house;
    }

    async insert(data: House){
        const newHouse = new this.houseModel({
            tag: data.tag
        });
        const result = await newHouse.save();
        return result.id;
    }

    async findByTag(tag: string){
        const result = await this.houseModel.findOne({
            tag: tag
        });
        if (!result){
            throw new NotFoundException("Invalid house tag.");
        }
        return result.id;
    }

    async addResident(id: string, resident: string){
        const house = await this.findHouse(id);
        house.residents.push(resident);
        house.save();
    }
}
