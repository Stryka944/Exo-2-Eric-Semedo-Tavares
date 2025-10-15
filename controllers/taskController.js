import { getAllTasks, saveTasks } from "../models/taskModel.js";

// Affiche toutes les tâches
export const getTasks = (req, res) => {
  const tasks = getAllTasks();
  res.setHeader("Content-Type", "application/json");
  res.send(JSON.stringify(tasks, null, 2));
};

// Ajoute une tâche
export const addTask = (req, res) => {
  const { title } = req.body;
  if (!title) return res.status(400).json({ message: "Le titre est requis" });

  const tasks = getAllTasks();
  const newTask = { id: tasks.length + 1, title };
  tasks.push(newTask);
  saveTasks(tasks);

  res.status(201).json(newTask);
};

// Supprime une tâche
export const deleteTask = (req, res) => {
  const { id } = req.params;
  let tasks = getAllTasks();
  tasks = tasks.filter((task) => task.id !== parseInt(id));
  saveTasks(tasks);

  res.json({ message: "Tâche supprimée avec succès" });
};