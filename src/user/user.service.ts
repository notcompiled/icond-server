import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose';
import { User } from './user.model';

@Injectable()
export class UserService {
    constructor(
        @InjectModel('User') private readonly userModel: Model<User>
    ){}

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
}
