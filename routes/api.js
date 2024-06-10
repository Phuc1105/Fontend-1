const express = require('express');

const usersApiControllers = require('../controllers/api/users');
const personnelApiControllers = require('../controllers/api/personnels');
const discountApiControllers = require('../controllers/api/discounts')
const router = express.Router();


router.get('/users',usersApiControllers.getUsers);

// ============== Api Personnel ===========
router.get('/personnels',personnelApiControllers.getPersonnel);
router.get('/personnels/:id',personnelApiControllers.detail);
router.post('/personnels/',personnelApiControllers.add);
router.delete('/personnels/:id',personnelApiControllers.delete);
router.put('/personnels/:id',personnelApiControllers.update);

// ============== APi Discount ===========
router.get('/discounts',discountApiControllers.get);
router.get('/discounts/:id',discountApiControllers.getById);
router.delete('/discounts/:id',discountApiControllers.delete);
router.post('/discounts',discountApiControllers.add);
router.put('/discounts/:id',discountApiControllers.update);
module.exports = router;