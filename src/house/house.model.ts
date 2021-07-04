import { Schema, Document } from "mongoose";

export const HouseSchema = new Schema({
    tag: { type: String, required: true },
    residents: { type: [String], required: true }
});

export interface House extends Document {
    id: string;
    tag: string;
    residents: [string];
}