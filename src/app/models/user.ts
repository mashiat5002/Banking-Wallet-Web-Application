import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
    email: string;
    dwolla_customer_id: string;
    stripe_customer_id: string;
    first_name: string;
    last_name: string;
    address: string;
    city: string;
    state: string;
    postal: string;
    dob: string;
    password: string;
    phone: string;
    varification_key: string;
    varify_timeout: string;
    active_status: string;
}

const UserSchema = new Schema<IUser>({
  email: { type: String,  },
  dwolla_customer_id: { type: String, default: null},
  stripe_customer_id: { type: String, default: null},
  first_name:  {type: String},
  last_name:  {type: String},
  address:  {type: String},
  city:  {type: String},
  state:  {type: String},
  postal:  {type: String},
  dob:  {type: String},
  password:  {type: String},
  phone:  {type: String},
  varification_key:  {type: String},
  varify_timeout:  {type: String},
  active_status:  {type: String},
});

const User = mongoose.models.User || mongoose.model("User", UserSchema);
export default User;
