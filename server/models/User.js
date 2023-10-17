import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "Please enter full Name"],
  },

  lastName: {
    type: String,
    required: [true, "Please enter full Name"],
  },

  email: {
    type: String,
    required: [true, "Please enter email"],
    unique: [true, "Email already Exist"],
    //validate: [isEmail, "Please Enter a valid Email"],
  },

  mobile: {
    type: String,
    required: [true, "Mobile Number of contact person is required"],
    minlength: [10, "Please Enter a valid Mobile Phone"],
  },
});

export default mongoose.model("User", UserSchema);
