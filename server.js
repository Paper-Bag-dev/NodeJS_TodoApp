import { app } from "./app.js";
import { ConnectDB } from "./data/database.js";

// connect DB
ConnectDB();
console.log(process.env.PORT)

app.listen(4000, () =>{
    console.log(`Server Running on port : ${process.env.PORT} in ${process.env.NODE_ENV} mode`);
})
