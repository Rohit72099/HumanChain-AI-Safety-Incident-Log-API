import mongoose, { Schema, Document } from "mongoose";
import { Incident } from "../types/Incident";


export interface IncidentDocument extends Incident, Document {}

const IncidentSchema: Schema = new Schema({
  title: { 
    type: String, 
    required: true
  },
  description: {
    type: String,
    required: true
  },
  severity: {
    type: String,
    enum: ["Low", "Medium", "High"],
    required: true
  },
  reported_at: { type: Date, default: Date.now }
});

export default mongoose.model<IncidentDocument>("Incident", IncidentSchema);
