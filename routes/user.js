import express from "express";
import { login, getMyProfile, register, logout } from "../controllers/user.js";
import { isAuthenticated } from "../middlewares/Auth.js";

const router = express.Router();

router.post("/login", login);

router.get("/logout", logout);

router.post("/register", register);

router.get("/me", isAuthenticated, getMyProfile);

export default router;