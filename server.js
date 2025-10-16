import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./src/config/db.js";
import taskRoutes from "./src/routes/taskRoutes.js";

// Chargement des variables d'environnement
dotenv.config();

// Connexion à MongoDB
connectDB();

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Routes principales
app.use("/api/tasks", taskRoutes);

// Route de test
app.get("/", (req, res) => {
  res.send("Bienvenue sur l'API TodoList");
});

// Lancement du serveur
app.listen(PORT, () => {
  console.log(`Serveur Express démarré sur http://localhost:${PORT}`);
});