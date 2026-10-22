const db = require('../../database/db.config');
const Voyage = db.voyages;

// CREATE
exports.create = (req, res) => {

  const { titre, prix, duree, dateDepart, description, destination } = req.body;

  if (!titre || !prix || !duree || !dateDepart) {
    return res.status(400).send({
      message: "Champs obligatoires manquants"
    });
  }

  const newVoyage = new Voyage({
    titre,
    prix,
    duree,
    dateDepart,
    description,
    destination
  });

  newVoyage.save()
    .then(() => res.send({ message: "Voyage créé" }))
    .catch(err => console.log(err));
};

// GET ALL
exports.findAll = (req, res) => {
  Voyage.find().populate('destination')
    .then(data => res.send(data))
    .catch(err => console.log(err));
};

// GET BY ID
exports.findOne = (req, res) => {
  const id = req.params.id;

  Voyage.findById(id).populate('destination')
    .then(data => res.send(data))
    .catch(err => console.log(err));
};

// DELETE
exports.delete = (req, res) => {
  const id = req.params.id;

  Voyage.findByIdAndDelete(id)
    .then(() => res.send({ message: "Voyage supprimé" }))
    .catch(err => console.log(err));
};

// UPDATE
// UPDATE
exports.update = (req, res) => {

  const id = req.params.id;

  Voyage.findByIdAndUpdate(
    id,
    req.body,
    {
      new: true
    }
  )

    .populate('destination')

    .then(data => {

      if (!data) {

        return res.status(404).send({
          message: "Voyage non trouvé"
        });

      }

      res.send(data);

    })

    .catch(err => {

      res.status(500).send({
        message: err.message
      });

    });

};
// FILTER BY DESTINATION
exports.findByDestination = (req, res) => {
  const destId = req.params.id;

  Voyage.find({ destination: destId })
    .populate('destination')
    .then(data => res.send(data))
    .catch(err => res.status(500).send({ message: err.message }));
};
// DELETE
exports.delete = (req, res) => {

  const id = req.params.id;

  Destination.findByIdAndDelete(id)

    .then(() => {

      res.send({
        message: 'Destination supprimée'
      });

    })

    .catch(err => {

      res.status(500).send(err);

    });

};

// UPDATE
exports.update = (req, res) => {

  const id = req.params.id;

  Destination.findByIdAndUpdate(
    id,
    req.body,
    { new: true }
  )

    .then(data => {

      res.send(data);

    })

    .catch(err => {

      res.status(500).send(err);

    });

};