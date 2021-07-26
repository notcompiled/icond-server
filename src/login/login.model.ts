import { Schema, Document } from "mongoose";

export const LoginSchema = new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
});

export interface Login extends Document {
    id: string,
    username: string,
    password: string
}