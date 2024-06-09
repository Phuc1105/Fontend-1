const express = require('express');
const usersApiControllers = require('../controllers/api/users');
const personnelApiControllers = require('../controllers/api/personnels');
const router = express.Router();
// ============== Api User ================
router.get('/users',usersApiControllers.getUsers);
router
// ============== Api Personnel ===========
router.get('/personnels',personnelApiControllers.getPersonnel);
router.get('/personnels/:id',personnelApiControllers.detail);
router.post('/personnels/',personnelApiControllers.add);
module.exports = router;