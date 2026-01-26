import mongoose from "mongoose";

const plantSchema = new mongoose.Schema(
  {
    commonName: { type: String, required: true },
    scientificName: { type: String, required: true },
    height: { type: String },
    medicinalProperties: [{ type: String }],
    usedFor: [{ type: String }],
    symptomsTreated: [{ type: String }],
    imageUrl: { type: String }
  },
  { timestamps: true }
);

export default mongoose.model("Plant", plantSchema);
