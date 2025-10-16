import fs from "fs";
import path from "path";

const filePath = path.resolve("data/tasks.json");

// Récupère toutes les tâches
export const getAllTasks = () => {
  if (!fs.existsSync(filePath)) return [];
  const data = fs.readFileSync(filePath);
  return JSON.parse(data);
};

// Sauvegarde les tâches dans le fichier
export const saveTasks = (tasks) => {
  fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2));
};