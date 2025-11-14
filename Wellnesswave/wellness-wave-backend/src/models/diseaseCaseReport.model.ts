import mongoose, { Schema, Document } from "mongoose";

export interface IDiseaseCaseReport extends Document {
  location: string;
  disease: string;
  caseCount: number;
  reportedBy: mongoose.Types.ObjectId;
  createdAt: Date;
}

const DiseaseCaseReportSchema: Schema = new Schema({
  location: { type: String, required: true },
  disease: { type: String, required: true },
  caseCount: { type: Number, required: true },
  reportedBy: { type: Schema.Types.ObjectId, ref: 'User', required: true }
}, { timestamps: true });

export const DiseaseCaseReport = mongoose.model<IDiseaseCaseReport>('DiseaseCaseReport', DiseaseCaseReportSchema);