import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose';
import { User } from './user.model';

@Injectable()
export class UserService {
    constructor(
        @InjectModel('User') private readonly userModel: Model<User>
    ){}

    async getUsers(){
        const users = await this.userModel.find().exec();
        return users.map(user => ({
            id: user.id,
            name: user.name,
            cpf: user.cpf,
            phone: user.phone,
            email: user.email,
            payDay: user.payDay,
            isPaid: user.isPaid
        }));
    }

    private async findUser(id: string): Promise<User>{
        let user;
        try{
            user = await this.userModel.findById(id);
        } catch (error) {
            throw new NotFoundException("Could not find house.");
        }
        if (!user){
            throw new NotFoundException("Could not find house.");
        }
        return user;
    }

    async insert(data: User){
        const newUser = new this.userModel({
            name: data.name,
            cpf: data.cpf,
            phone: data.phone,
            email: data.email,
            payDay: data.payDay,
            isPaid: data.isPaid
        });
        const result = await newUser.save();
        return result.id;
    }

    async update(data: User){
        const updatedUser = await this.findUser(data.id);
        updatedUser.name = data.name;
        updatedUser.cpf = data.cpf;
        updatedUser.phone = data.phone;
        updatedUser.email = data.email;
        updatedUser.payDay = data.payDay;
        updatedUser.isPaid = data.isPaid;
        updatedUser.save()
    }

    async delete(id: string){
        const result = await this.userModel.deleteOne({_id: id}).exec();
        if (result.n === 0){
            throw new NotFoundException("Could not find user.")
        }
    }
}
