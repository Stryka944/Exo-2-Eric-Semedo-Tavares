import Task from "../models/taskModel.js";

// Afficher toutes les tâches
export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.setHeader("Content-Type", "application/json");
    res.send(JSON.stringify(tasks, null, 2));
      } catch (error) {
    res.status(500).json({ message: "Erreur lors de la récupération des tâches" });
  }
};

// Ajouter une nouvelle tâche
export const addTask = async (req, res) => {
  try {
    const { title } = req.body;
    if (!title) return res.status(400).json({ message: "Le titre est requis" });

    const task = new Task({ title });
    await task.save();
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de l'ajout de la tâche" });
  }
};

// Supprimer une tâche
export const deleteTask = async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ message: "Tâche supprimée avec succès" });
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la suppression de la tâche" });
  }
};

// Supprime toutes les tâches
export const deleteAllTasks = async (req, res) => {
  try {
    await Task.deleteMany({});
    res.json({ message: "Toutes les tâches ont été supprimées avec succès" });
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la suppression de toutes les tâches" });
  }
};