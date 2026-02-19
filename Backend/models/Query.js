import mongoose from "mongoose";

const querySchema = new mongoose.Schema(
  {
    commonName: { type: String, required: true },
    scientificName: String,

    partUsed: [String], // checkboxes

    properties: String,

    source: { type: String, required: true },

    missingStatus: { type: String, required: true },

    notes: String,

    contributorName: String,

    email: { type: String, required: true },

    permission: { type: Boolean, required: true },

    imageUrl: String,
  },
  { timestamps: true }
);

export default mongoose.model("Query", querySchema);
