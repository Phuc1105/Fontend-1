const express = require('express');
const usersApiControllers = require('../controllers/api/users');
const personnelApiControllers = require('../controllers/api/personnels');
const router = express.Router();
// ============== Api User ================
router.get('/users',usersApiControllers.getUsers);
router.post('/users',usersApiControllers.create);
router.get('/users/:id',usersApiControllers.edit);
router.put('/users/:id',usersApiControllers.update);
//delivery
router.get('/delivery',deliveryApiControllers.getDelivery);
router.post('/delivery',deliveryApiControllers.create);
router.get('/delivery/:id',deliveryApiControllers.edit);
router.put('/delivery/:id',deliveryApiControllers.update);
router.delete('/delivery/:id',deliveryApiControllers.delete);


// ============== Api Personnel ===========
router.get('/personnels',personnelApiControllers.getPersonnel);
router.get('/personnels/:id',personnelApiControllers.detail);
router.post('/personnels/',personnelApiControllers.add);
module.exports = router;