import { Schema, model } from "mongoose";
import { TCategory } from "./interface";

export const TCategorySchema = new Schema(
  {
    title: { type: String, required: true },
    id: { type: Number, required: true },
    description: { type: String, required: true },
    rating: { type: Number, required: true },
    review: { type: Number, required: true },
    imageURL: { type: String, required: true },
    price: { type: Number, required: true },
    flashSale: { type: Boolean, required: true },
    category: { type: String, required: true },
  },
  { timestamps: true }
);

export const Collection = model<TCategory>("Products", TCategorySchema);
