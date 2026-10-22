module.exports = app => {

  const router = require('express').Router();

  const voyageController = require('../controllers/voyage.controller');
  const destinationController = require('../controllers/destination.controller');

  // routes voyages
  router.post('/voyages', voyageController.create);
  router.get('/voyages', voyageController.findAll);
  router.get('/voyages/:id', voyageController.findOne);
  router.delete('/voyages/:id', voyageController.delete);
  router.put('/voyages/:id', voyageController.update);
  router.get('/voyages/destination/:id', voyageController.findByDestination);

  // routes destinations
  router.post('/destinations', destinationController.create);
  router.get('/destinations', destinationController.findAll);
  router.get('/destinations/:id', destinationController.findOne);
  router.delete('/destinations/:id', destinationController.delete);
  router.put('/destinations/:id', destinationController.update);
  router.delete(
  '/destinations/:id',
  destinationController.delete
);

router.put(
  '/destinations/:id',
  destinationController.update
);
router.get(
  '/destinations/:id',
  destinationController.findOne
);

  app.use('/api', router);
};