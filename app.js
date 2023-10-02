import express from "express";
import userRouter from "./routes/user.js";
import taskRouter from "./routes/task.js";
import {config} from "dotenv";
import cookieParser from "cookie-parser";
import { error_middleware } from "./middlewares/error.js";
import cors from "cors";

export const app = express();

config({
    path: "./data/config.env",
})


// middleware to access/send json data through body
app.use(express.json());
app.use(cookieParser());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
    next();
  });
app.use(cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}));

// Routes
app.use("/api/v1/users" ,userRouter);
app.use("/api/v1/task", taskRouter);

app.get("/", (req, res) => {
    res.send("App working");
})

// Using Error Middleware

app.use(error_middleware); 