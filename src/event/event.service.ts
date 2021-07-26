import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Event } from './event.model';

@Injectable()
export class EventService {
    constructor(
        @InjectModel('Event') private readonly eventModel: Model<Event>
    ){}

    async insert(data: Event) {
        const newEvent = new this.eventModel({
            date: data.date,
            local: data.local,
            guests: data.guests
        });
        const result = await newEvent.save();
        return result.id;
    }
}
