import mongoose from "mongoose";

export const ConnectDB = () => {
    mongoose.createConnection(process.env.MONGO_URI, {dbName : "Todo_API"})
    .then((c) => console.log(`Database Connected with ${c.connection.host}`))
    .catch((e) => console.log(e));
};