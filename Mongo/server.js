const express = require('express');
const mongoos = require('mongoose');
const bodyParser = require('body-parser');
const { default: mongoose } = require('mongoose');

// CONNECTER MONGOOS
mongoose.connect('mongodb+srv://samsirathsylla:Sylla2015@samsycluster.n50br.mongodb.net//taskDB' )
.then(() => console.log("MongoDB connecté"))
.catch(err => console.error("Erreur de connexion", err));

// défni schéma et modèle
 const mailSchema = new mongoose.Schema({
    nom: { type:String, required: true },
    description: { type:String, required: true }
 });

 const mail = mongoose.model('mail', mailSchema);


const app = express();
const port = 3000;

app.use(bodyParser.json());


app.listen(port,() => {
console.log(`Serveur écoutant sur le port ${port}`);
});



app.get('/task/:id', async (req, res)=>{
     const task = await mail.findById(req.params.id);

    if (task) {
        res.json(task);
    
    } else{
        res.status(404).json({error:'Tâche non trouvé'});
    }
});
//  ajouter une tache
app.post('/tasks', async(req, res) =>{
    const newTask = {
         description: req.body.description
    };
     await newTask.save();
    res.status(201).json({message:'Tâche ajoutée avec succès', task:newTask});
})

// Modifier une tâche
app.put('/task/:id', async(req, res)=>{
    const taskId = await mail.findByIdAndUpdate(req.params.id);
    
    if (task) {
        task.description = req.body.description
        res.json({message:'Tâche mise à jour avec succès', task});
    
    } else{
        res.status(404).json({error:'Tâche non trouvé'});
    }
});

// supression des tâches

app.delete('/task/:id', async(req, res) =>{
    const taskId = await mail.findByIdAndDelete(req.params.id);
    
    res.json({message: 'Tâche supprimer avec succès'});
});