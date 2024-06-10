const express = require('express');
const usersApiControllers = require('../controllers/api/users');
const router = express.Router();
// ============== Api User ================
router.get('/users',usersApiControllers.getUsers);
router.get('/personnels',personnelApiControllers.getPersonnel);
module.exports = router;