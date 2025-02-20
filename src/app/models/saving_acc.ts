import mongoose, { Schema, Document } from "mongoose";

export interface Isaving_acc_ extends Document {
  user_id: string;
  balance_1: string;
  balance_2: string;
  department_1: string;
  department_2: string;
  department_1_target: string;
  department_2_target: string;
  time_: string;
  time_bank: string;
 
}

const saving_acc_Schema = new Schema<Isaving_acc_>({
  user_id: { type: String,  },
  balance_1: { type: String,  },
  balance_2: { type: String,  },
  department_1: { type: String,  },
  department_2: { type: String,  },
  department_1_target: { type: String,  },
  department_2_target: { type: String,  },
  time_: { type: String,  },
  time_bank: { type: String,  },

});

const saving_acc = mongoose.models.saving_acc || mongoose.model("saving_acc", saving_acc_Schema);
export default saving_acc;
