const db = require('../../database/db.config');
const Destination = db.destinations;

// CREATE
exports.create = (req, res) => {
  const { nom, pays, description, image } = req.body;

  if (!nom || !pays || !description) {
    return res.status(400).send({
      message: "Nom, pays et description sont obligatoires"
    });
  }

  const newDestination = new Destination({
    nom,
    pays,
    description,
    image
  });

  newDestination.save()
    .then(() => res.status(200).send({ message: "Destination créée" }))
    .catch(err => res.status(500).send({ message: err.message }));
};

// GET ALL
exports.findAll = (req, res) => {
  Destination.find()
    .then(data => res.send(data))
    .catch(err => res.status(500).send({ message: err.message }));
};

// GET BY ID
exports.findOne = (req, res) => {
  const id = req.params.id;

  Destination.findById(id)
    .then(data => {
      if (!data) {
        return res.status(404).send({ message: "Destination introuvable" });
      }
      res.send(data);
    })
    .catch(err => res.status(500).send({ message: err.message }));
};

// DELETE
exports.delete = (req, res) => {
  const id = req.params.id;

  Destination.findByIdAndDelete(id)
    .then(data => {
      if (!data) {
        return res.status(404).send({ message: "Destination introuvable" });
      }
      res.send({ message: "Destination supprimée" });
    })
    .catch(err => res.status(500).send({ message: err.message }));
};

// UPDATE
exports.update = (req, res) => {
  const id = req.params.id;

  Destination.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        return res.status(404).send({ message: "Destination introuvable" });
      }
      res.send({ message: "Destination modifiée" });
    })
    .catch(err => res.status(500).send({ message: err.message }));
    // GET BY ID
exports.findOne = (req, res) => {

  const id = req.params.id;

  Destination.findById(id)

    .then(data => {

      res.send(data);

    })

    .catch(err => {

      res.status(500).send(err);

    });

};
};