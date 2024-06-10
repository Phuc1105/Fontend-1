const express = require('express');
const usersApiControllers = require('../controllers/api/users');
const deliveryApiControllers = require('../controllers/api/delivery');
const personnelApiControllers = require('../controllers/api/personnels');
const discountApiControllers = require('../controllers/api/discounts');
const categoriesApiControllers = require('../controllers/api/categories');
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
router.post('/personnels/', upload.single('img'),personnelApiControllers.add);
router.delete('/personnels/:id',personnelApiControllers.delete);
router.put('/personnels/:id',upload.single('img'),personnelApiControllers.update);

// ============== APi Discount ===========
router.get('/discounts',discountApiControllers.get);
router.get('/discounts/:id',discountApiControllers.getById);
router.delete('/discounts/:id',discountApiControllers.delete);

// ============== APi Categories ===========
router.get('/categories', categoriesApiControllers.getCategories);
router.get('/categories', categoriesApiControllers.detail);
router.post('/categories', categoriesApiControllers.add);
router.delete('/categories/:id', categoriesApiControllers.delete);
router.put('/category/:id', categoriesApiControllers.update);

module.exports = router;
