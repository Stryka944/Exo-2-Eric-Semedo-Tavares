import express from "express";
import { getTasks, addTask, deleteTask, deleteAllTasks} from "../controllers/taskController.js";

const router = express.Router();

// Route pour obtenir toutes les tâches
router.get("/", getTasks);

// Route pour ajouter une nouvelle tâche
router.post("/", addTask);

// Route pour supprimer une tâche
router.delete("/:id", deleteTask);

// Route pour supprimer toutes les tâches
router.delete("/", deleteAllTasks);

export default router;