import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/", {dbName : "Todo_API"})
    .then(() => console.log("DB connected"))
    .catch((e) => console.log(e));

const schema = new mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    description : {
        type : String,
        unique : true,
        required : true,
    },
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : true
    },
    isCompleted : {
        type : Boolean,
        default : false
    },
    createdAt: {
        type : Date,
        default : Date.now(),
    }
})

export const Task = mongoose.model("Task", schema);
