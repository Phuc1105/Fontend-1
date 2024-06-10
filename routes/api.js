const express = require('express');

const usersApiControllers = require('../controllers/api/users');
const personnelApiControllers = require('../controllers/api/personnels');
const discountApiControllers = require('../controllers/api/discounts')
const router = express.Router();
const multer = require('multer');
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '../src/assets/images')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname)
    }
})
const upload = multer({ storage: storage });

router.get('/users',usersApiControllers.getUsers);

// ============== Api Personnel ===========
router.get('/personnels',personnelApiControllers.getPersonnel);
router.get('/personnels/:id',personnelApiControllers.detail);
router.post('/personnels/', upload.single('img'),personnelApiControllers.add);
router.delete('/personnels/:id',personnelApiControllers.delete);
router.put('/personnels/:id',upload.single('img'),personnelApiControllers.update);

// ============== APi Discount ===========
router.get('/discounts',discountApiControllers.get);
router.get('/discounts/:id',discountApiControllers.getById);
router.delete('/discounts/:id',discountApiControllers.delete);
module.exports = router;