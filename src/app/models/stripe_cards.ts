import mongoose, { Schema, Document } from "mongoose";

export interface ICard extends Document {
  stripe_id: string;
  card_ids: string;
  expiry_date: string;
  key_id: string;
  Card_holder: string;
  pid: string;
 
}

const CardSchema = new Schema<ICard>({
  stripe_id: { type: String,  },
  card_ids: { type: String, required:true },
  expiry_date: { type: String},
  key_id:  {type: String, },
  Card_holder:  {type: String},
  pid:  {type: String},

});

const stripe_cards = mongoose.models.stripe_cards || mongoose.model("stripe_cards", CardSchema);
export default stripe_cards;
