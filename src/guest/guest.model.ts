import { Schema, Document } from "mongoose";

export const GuestSchema = new Schema({
    name: { type: String, required: true },
    cpf: { type: String, required: true },
    car: { type: String, required: true },
    pass: { type: String, required: true }
});

export interface Guest extends Document {
    id: string;
    name: string;
    cpf: string;
    car: string;
    pass: string;
}