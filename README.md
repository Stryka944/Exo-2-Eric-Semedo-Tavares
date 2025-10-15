Exo-2-Eric_Semedo_Tavares — API TodoList Express.

Créer une API TodoList en Node.js / Express.js suivant une architecture MVC, permettant de :

Ajouter une tâche

Supprimer une tâche

Afficher toutes les tâches

Architecture du projet
Exo-2-Eric_Semedo_Tavares/
│
├── .env → Variables d’environnement (port)
├── .gitignore → Fichiers ignorés par Git
├── package.json → Dépendances et scripts
├── server.js → Point d’entrée du serveur
│
├── controllers/
│ └── taskController.js → Logique métier (CRUD)
│
├── models/
│ └── taskModel.js → Lecture/écriture dans tasks.json
│
├── routes/
│ └── taskRoutes.js → Définition des endpoints
│
└── data/
└── tasks.json → Stockage local des tâches

2️ Installer les dépendances
npm install

3️ Créer un fichier .env
PORT=3000

4️ Lancer le serveur
npm start

Mode développement :
npm run dev

Le serveur démarre sur :
http://localhost:3000

Utilisation de l’API
Ajouter une tâche
curl -X POST http://localhost:3000/api/tasks \
 -H "Content-Type: application/json" \
 -d '{"title": "Faire les courses"}'

Lister toutes les tâches
curl http://localhost:3000/api/tasks

Supprimer une tâche
curl -X DELETE http://localhost:3000/api/tasks/1
