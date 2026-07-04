import mongoose from "mongoose";

const sessionSchema = new mongoose.Schema({
userId:{
    type:mongoose.Schema.Types.ObjectID,
ref:"User",
unique:true
},
createdAt: {
  type: Date,
  default: Date.now,
  expires: 3600 // Auto-delete after 1 hour
}
})

export const Session = mongoose.model("Session", sessionSchema)                                                                          