const express = require('express');
const usersApiControllers = require('../controllers/api/users');
const deliveryApiControllers = require('../controllers/api/delivery');
const router = express.Router();

//users
router.get('/users',usersApiControllers.getUsers);
router.post('/users',usersApiControllers.create);
router.get('/users/:id',usersApiControllers.edit);
router.put('/users/:id',usersApiControllers.update);
//delivery
router.get('/delivery',deliveryApiControllers.getDelivery);
router.post('/delivery',deliveryApiControllers.create);
router.get('/delivery/:id',deliveryApiControllers.edit);
router.put('/delivery/:id',deliveryApiControllers.update);

module.exports = router;