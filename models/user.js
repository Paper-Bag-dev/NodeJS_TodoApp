import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/", {dbName : "Todo_API"})
    .then(() => console.log("DB connected"))
    .catch((e) => console.log(e));

const schema = new mongoose.Schema({
    name: {
        type : String,
        required : true,
    },
    email: {
        type : String,
        unique : true,
        required : true,
    },
    password: {
        type : String,
        select : false,
        required : true,
    },
    createdAt: {
        type : Date,
        default : Date.now(),
        required : true,
    }
})

export const User = mongoose.model("User", schema);
