import mongoose from "mongoose";

const sessionSchema = new mongoose.Schema({
userId:{
    type:mongoose.Schema.Types.ObjectID,
ref:"User"}
})

export const Session = mongoose.model("Session", sessionSchema)                                                                          