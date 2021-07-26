import { Schema } from "mongoose";
import { User } from "src/user/user.model";

export const ResidentSchema = new Schema({
    name: { type: String, required: true },
    cpf: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    payDay: { type: String, required: true },
    isPaid: { type: Boolean, required: true },
    loginId: { type: String, required: true },
    houseId: { type: String, required: true },
    price: { type: String, required: true},
    pass: { type: String, required: true},
});

export interface Resident extends User {
    house: string;
    price: string;
    pass: string;
}