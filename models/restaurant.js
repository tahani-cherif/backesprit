import mongoose from "mongoose";
const { Schema, model } = mongoose;
const RestaurantShema = new Schema({
  nom: {
    type: String,
    required: true,
  },
  tel: {
    type: Number,
    required: true,
  },
  adresse: {
    type: String,
    required: true,
  },
});

export default model("Restaurant", RestaurantShema);
