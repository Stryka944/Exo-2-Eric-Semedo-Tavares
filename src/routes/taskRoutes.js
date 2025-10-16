import express from "express";
import { getTasks, addTask, deleteTask } from "../controllers/taskController.js";

const router = express.Router();

// Route pour obtenir toutes les tâches
router.get("/", getTasks);

// Route pour ajouter une nouvelle tâche
router.post("/", addTask);

// Route pour supprimer une tâche
router.delete("/:id", deleteTask);

export default router;