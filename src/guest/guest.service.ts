import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { randomInt } from 'crypto';
import { Model } from 'mongoose';
import { Guest } from './guest.model';

@Injectable()
export class GuestService {
    constructor(
        @InjectModel('Guest') private readonly guestModel: Model<Guest>
    ){}

    async insert(data: Guest) {
        const chars = "0123456789"
        let code = "";
        for (let i=0; i<6; i++) {
            code += chars[randomInt(0, chars.length-1)]
        }
        const newGuest = new this.guestModel({
            name: data.name,
            cpf: data.cpf,
            car: data.car,
            pass: code
        });
        const result = await newGuest.save();
        return result.id;
    }
}
