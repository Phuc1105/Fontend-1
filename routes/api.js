const express = require('express');
const usersApiControllers = require('../controllers/api/users');
const deliveryApiControllers = require('../controllers/api/delivery');
const personnelApiControllers = require('../controllers/api/personnels');
const router = express.Router();

// ============== Api Users ===========
router.get('/users',usersApiControllers.getUsers);
router.post('/users',usersApiControllers.create);
router.get('/users/:id',usersApiControllers.edit);
router.put('/users/:id',usersApiControllers.update);
router.delete('/users/:id',usersApiControllers.delete);

// ============== Api Delivery ===========
router.get('/delivery',deliveryApiControllers.getDelivery);
router.post('/delivery',deliveryApiControllers.create);
router.get('/delivery/:id',deliveryApiControllers.edit);
router.put('/delivery/:id',deliveryApiControllers.update);
router.delete('/delivery/:id',deliveryApiControllers.delete);


// ============== Api Personnel ===========
router.get('/personnels',personnelApiControllers.getPersonnel);
router.get('/personnels/:id',personnelApiControllers.detail);
router.post('/personnels/',personnelApiControllers.add);
router.delete('/personnels/:id',personnelApiControllers.delete);
router.put('/personnels/:id',personnelApiControllers.update);
module.exports = router;