import { Schema } from "mongoose";
import { User } from "src/user/user.model";

export const EmployeeSchema = new Schema({
    name: { type: String, required: true },
    cpf: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    payDay: { type: String, required: true },
    isPaid: { type: Boolean, required: true },
    loginId: { type: String, required: true },
    role: { type: String, required: true },
});

export interface Employee extends User {
    role: string;
}