Voici un exemple de README que tu pourrais rédiger pour ce projet :



# API de gestion de tâches

Ce projet propose une API RESTful pour gérer une liste de tâches. L'API permet de récupérer, ajouter, modifier et supprimer des tâches via des requêtes HTTP.

## Prérequis

- Node.js
- npm (ou yarn)

## Installation

1. Clonez ce repository sur votre machine locale.
   
   ```bash
   git clone https://votre-repository-url.git
   ```

2. Installez les dépendances nécessaires :

   ```bash
   npm install
   ```

## Démarrer le serveur

1. Lancez le serveur avec la commande suivante :

   ```bash
   npm start
   ```

2. Le serveur sera accessible sur le port `3000`. Vous devriez voir un message dans la console :

   ```bash
   Serveur écoutant sur le port 3000
   ```

## Endpoints de l'API

L'API expose plusieurs endpoints pour manipuler les tâches.

### 1. Récupérer toutes les tâches

- **URL** : `/tasks`
- **Méthode** : `GET`
- **Réponse** : Une liste des références de tâches disponibles.


### 2. Récupérer une tâche spécifique

- **URL** : `/task/:id`
- **Méthode** : `GET`
- **Paramètre** : `id` (ID de la tâche)
- **Réponse** : La tâche correspondante si elle existe, ou un message d'erreur si la tâche n'est pas trouvée.


### 3. Ajouter une nouvelle tâche

- **URL** : `/tasks`
- **Méthode** : `POST`
- **Corps de la requête** : Un objet JSON avec une propriété `description` représentant la tâche à ajouter.


### 4. Modifier une tâche existante

- **URL** : `/task/:id`
- **Méthode** : `PUT`
- **Paramètre** : `id` (ID de la tâche)
- **Corps de la requête** : Un objet JSON avec la nouvelle description de la tâche.


### 5. Supprimer une tâche

- **URL** : `/task/:id`
- **Méthode** : `DELETE`
- **Paramètre** : `id` (ID de la tâche)
- **Réponse** : Un message confirmant la suppression de la tâche.


## Technologies utilisées

- **Node.js** : Environnement d'exécution JavaScript.
- **Express** : Framework pour créer l'API.
- **Body-Parser** : Middleware pour analyser le corps des requêtes JSON.

## Licence

Ce projet est sous licence MIT.

---

