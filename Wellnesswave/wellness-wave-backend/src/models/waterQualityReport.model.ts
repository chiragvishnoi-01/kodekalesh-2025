import mongoose, { Schema, Document } from "mongoose";

export interface IWaterQualityReport extends Document {
  location: string;
  lat: number;
  lng: number;
  ph: number;
  turbidity: number;
  bacteria: number;
  reportedBy: mongoose.Types.ObjectId;
  riskLevel: 'low' | 'medium' | 'high';
  createdAt: Date;
}

const WaterQualityReportSchema: Schema = new Schema({
  location: { type: String, required: true },
  lat: { type: Number, required: true },
  lng: { type: Number, required: true },
  ph: { type: Number, required: true },
  turbidity: { type: Number, required: true },
  bacteria: { type: Number, required: true },
  reportedBy: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  riskLevel: { type: String, enum: ['low', 'medium', 'high'], required: true }
}, { timestamps: true });

export const WaterQualityReport = mongoose.model<IWaterQualityReport>('WaterQualityReport', WaterQualityReportSchema);