import { Schema, Document } from "mongoose";

export const MaintenanceSchema = new Schema({
    motive: { type: String, required: true },
    description: { type: String, required: true }
});

export interface Maintenance extends Document {
    id: string;
    motive: string;
    description: string;
}