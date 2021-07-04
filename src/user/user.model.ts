import { Schema, Document } from "mongoose";

export const UserSchema = new Schema({
    name: { type: String, required: true },
    cpf: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    payDay: { type: String, required: true },
    isPaid: { type: Boolean, required: true },
});

export interface User extends Document {
    id: string;
    name: string;
    cpf: string;
    phone: string;
    email: string;
    payDay: string;
    isPaid: boolean;
}