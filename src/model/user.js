import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username:String,
    password:String,
    phone:Number,
    telephone:Number,
    email:String
}) ;

export default mongoose.model("User",UserSchema);
