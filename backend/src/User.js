import mongoose,  {Schema} from "mongoose";

const userSchema = new Schema({
  name : {
    type: String,
    required: [true, "Name is mandatory"],
    trim: true,
  },

  email : {
    type: String,
    required: [true, "Email is mandatory"],
    trim: true,
    unique: true,
    lowercase: true,
  },

  password : {
    type: String,
    default: null,
  },

  googleId: {
    type: String,
    default: null,
  },

  avatar: {
    type: String,
    default: "",
  },

  isAuthor: {
    type: Boolean,
    default: false,
  },

  provider: {
      type: String,
      enum: ["local", "google"],
      required: true,
  },
}, 
  {
    timestamps: true,
  }
);


const User = mongoose.model("User", userSchema);
export default User;
