const express = require('express');
const bodyParser= require('body-parser')
const MongoClient = require('mongodb').MongoClient
const app = express();
const ObjectID = require('mongodb').ObjectID;
app.set('view engine', 'ejs'); // générateur de template «ejs»
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.static('public'))  // pour utiliser le dossier public

var db // variable qui contiendra le lien sur la BD
//127.0.0.1 est équivalent à localhost
MongoClient.connect('mongodb://127.0.0.1:27017/carnet-adresse', (err, database) => {
  if (err) return console.log(err)
  db = database
  app.listen(8081, () => {
    console.log('connexion à la BD et on écoute sur le port 8081')//confirmation de la connexion réussie
  })
})

app.get('/',  (req, res) => {
   console.log('la route route get / = ' + req.url)
 
    var cursor = db.collection('adresse').find().toArray(function(err, resultat){
       if (err) return console.log(err)
    // renders index.ejs
    // affiche le contenu de la BD
    res.render('index_1.ejs', {adresse: resultat})//récupère les données du ul adresse

    })
})

//ROUTE - permet d'enregistrer les données entrées dans la base de données
app.post('/adresse',  (req, res) => {
  db.collection('adresse').save(req.body, (err, result) => {
      if (err) return console.log(err)
      console.log('sauvegarder dans la BD')
      res.redirect('/')
    })
})

//ROUTE - détruire une entrée
app.get('/detruire/:id', (req, res) => {
 var id = req.params.id
 console.log(id)
 db.collection('adresse').findOneAndDelete({"_id": ObjectID(req.params.id)}, (err, resultat) => {

if (err) return console.log(err)
 res.redirect('/')  // redirige vers la route qui affiche la collection
 })
})

//ROUTE - modifier une entrée
app.post('/modifier', (req, res) => {
var id = req.params.id
 //console.log(id)
 console.log("voici req.body.nom: " + req.body.nom) //console qui permet de vérifier si le bon nom est récupéré
 db.collection('adresse').findOneAndUpdate({"_id": ObjectID(req.body._id)}, {"prenom" : req.body.prenom, "nom" : req.body.nom, "telephone" : req.body.telephone}, (err, resultat) => {

if (err) return console.log(err)
 res.redirect('/')  // redirige vers la route qui affiche la collection
 })
})