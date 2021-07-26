import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ResidentService } from 'src/resident/resident.service';
import { House } from './house.model';

@Injectable()
export class HouseService {
    constructor(
        @InjectModel('House') private readonly houseModel: Model<House>
    ){}

    async findByTag(tag: string){
        let house: House;
        try{
            house = await this.houseModel.findOne({tag});
        } catch(error){
            throw new NotFoundException("Invalid house tag.");
        }
        if (!house){
            throw new NotFoundException("Invalid house tag.");
        }
        return house;
    }

    async find(id: string): Promise<House>{
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

    async update(data: House){
        const updatedHouse = await this.find(data.id);
        updatedHouse.tag = data.tag;
        updatedHouse.save();
    }

    async delete(tag: string){
        const house = await this.findByTag(tag);
        if (house.residents.length > 0){
            throw new Error("There are users registered in this house. Please delete or move users to a different house before deleting this one.");
        }
        const result = await this.houseModel.deleteOne({_id: house.id}).exec();
        if (result.n === 0){
            throw new NotFoundException("Could not find user.");
        }
    }

    async addResident(id: string, resident: string){
        const house = await this.find(id);
        house.residents.push(resident);
        house.save();
    }

    async removeResident(id: string, resident: string){
        const house = await this.find(id);
        let newArray: [string];
        for (let i=0; i<house.residents.length; i++){
            if (house.residents[i] !== resident){
                newArray.push(house.residents[i])
            }
        }
        house.residents = newArray;
        house.save();
    }
}
