const express = require('express');
const usersApiControllers = require('../controllers/api/users');
const router = express.Router();
// ============== Api User ================
router.get('/users',usersApiControllers.getUsers);

module.exports = router;