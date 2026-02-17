import mongoose from "mongoose";

const querySchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    nameOrProperties: {
      type: String,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String, // will store image path
    },
  },
  { timestamps: true }
);

const Query = mongoose.model("Query", querySchema);

export default Query;
