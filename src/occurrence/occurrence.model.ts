import { Schema, Document } from "mongoose";

export const OccurrenceSchema = new Schema({
    date: { type: String, required: true },
    local: { type: String, required: true },
    involved: { type: String, required: true },
    description: { type: String, required: true }
});

export interface Occurrence extends Document {
    id: string;
    date: string;
    local: string;
    involved: string;
    description: string;
}