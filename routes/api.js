const express = require('express');
const usersApiControllers = require('../controllers/api/users');
const deliveryApiControllers = require('../controllers/api/delivery');
const personnelApiControllers = require('../controllers/api/personnels');
const discountApiControllers = require('../controllers/api/discounts');
const categoriesApiControllers = require('../controllers/api/categories');
const productsApiControllers = require('../controllers/api/products')
const statisticsApiControllers = require('../controllers/api/statistics')

const inventoriesApiControllers = require('../controllers/api/inventories')
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

// ============== Api Users ===========
router.get('/users', usersApiControllers.getUsers);
router.post('/users', usersApiControllers.create);
router.get('/users/:id', usersApiControllers.edit);
router.put('/users/:id', usersApiControllers.update);
router.delete('/users/:id', usersApiControllers.delete);

// ============== Api Delivery ===========
router.get('/delivery', deliveryApiControllers.getDelivery);
router.post('/delivery', deliveryApiControllers.create);
router.get('/delivery/:id', deliveryApiControllers.edit);
router.put('/delivery/:id', deliveryApiControllers.update);
router.delete('/delivery/:id', deliveryApiControllers.delete);

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

// ============== APi Categories ===========
router.get('/categories', categoriesApiControllers.getCategories);
router.get('/categories/:id', categoriesApiControllers.detail);
router.post('/categories', categoriesApiControllers.add);
router.delete('/categories/:id', categoriesApiControllers.delete);
router.put('/categories/:id', categoriesApiControllers.update);

// ============== APi inventories ===========
router.get('/inventories',inventoriesApiControllers.getInventories);
router.get('/inventories/:id',inventoriesApiControllers.detail);
router.post('/inventories/',inventoriesApiControllers.add);
router.delete('/inventories/:id',inventoriesApiControllers.delete);
router.put('/inventories/:id',inventoriesApiControllers.update)

// ============== APi Product ===========
router.get('/products',productsApiControllers.getProducts);
router.get('/products/:id',productsApiControllers.detail);
router.post('/products/',productsApiControllers.add);
router.delete('/products/:id',productsApiControllers.delete);
router.put('/products/:id',productsApiControllers.update)

// ============== APi statistics ===========
router.get('/statistics',statisticsApiControllers.getStatistics)
module.exports = router;
