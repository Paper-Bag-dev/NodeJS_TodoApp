import express from "express";
import { deleteTasks, getTasks, newTask, updateTasks } from "../controllers/task.js";
import { isAuthenticated } from "../middlewares/Auth.js";
const router = express.Router();

router.post("/newTask", isAuthenticated, newTask);
router.get("/getMyTasks", isAuthenticated, getTasks);
router.route("/:id").put(isAuthenticated, updateTasks).delete(isAuthenticated, deleteTasks);

export default router;