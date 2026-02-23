import mongoose from "mongoose";

const careInfoSchema = new mongoose.Schema({
  commonName: { type: String, required: true },
  scientificName: { type: String, required: true },
  alsoKnownAs: [String],
  about: String,
  imageUrl: String,

  care: {
    outdoorSize: String,
    light: String,
    humidity: String,
    fertilizing: String,
    pruning: String,
    pests: String,
    indoorSize: String,
    watering: String,
    temperature: String,
    season: String,
    difficulty: String
  },

  fact: String
});

export default mongoose.model("CareInfo", careInfoSchema, "careinfo");