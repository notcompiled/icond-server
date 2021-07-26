import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Occurrence } from './occurrence.model';

@Injectable()
export class OccurrenceService {
    constructor(
        @InjectModel('Occurrence') private readonly occurrenceModel: Model<Occurrence>
    ){}

    async register(data: Occurrence) {
        const newOccurence = new this.occurrenceModel({
            date: data.date,
            local: data.local,
            involved: data.involved,
            description: data.description
        })
        const result = await newOccurence.save();
        return result.id;
    }
}
