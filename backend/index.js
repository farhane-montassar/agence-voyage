const express = require('express');
const database = require('./src/database/db.config');
require('dotenv').config();

const app = express(); // ✅ DÉCLARER AVANT

const cors = require('cors');

// middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// connexion MongoDB
database.mongoose.connect(database.url)
  .then(() => {
    console.log('connected to database');
  })
  .catch(err => {
    console.log(err);
  });

// test route
app.get('/', (req, res) => {
  res.send({ message: 'Backend fonctionne' });
});

// ✅ IMPORTANT → routes APRÈS création de app
require('./src/api/routes/routes')(app);

// lancement serveur
app.listen(process.env.PORT, () => {
  console.log('listening on port', process.env.PORT);
});