import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import taskRoutes from "./routes/taskRoutes.js";

// Chargement des variables d'environnement (.env)
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000; // Récupération du port depuis .env

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Déclaration des routes principales
app.use("/api/tasks", taskRoutes);

// Route de test (racine)
app.get("/", (req, res) => {
  res.send("Bienvenue sur l'API TodoList d'Eric (version dotenv) 🚀");
});

// Lancement du serveur
app.listen(PORT, () => {
  console.log(`Serveur Express démarré sur http://localhost:${PORT}`);
});