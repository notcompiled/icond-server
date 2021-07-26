import { Schema, Document } from "mongoose";

export const EventSchema = new Schema({
    date: { type: String, required: true },
    local: { type: String, required: true },
    guests: { type: String, required: true }
});

export interface Event extends Document {
    id: string;
    date: string;
    local: string;
    guests: string;
}