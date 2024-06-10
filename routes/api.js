const express = require('express');

const usersApiControllers = require('../controllers/api/users');
const personnelApiControllers = require('../controllers/api/personnels');
const discountApiControllers = require('../controllers/api/discounts')
const productsApiControllers = require('../controllers/api/products')
const statisticsApiControllers = require('../controllers/api/statistics')
const router = express.Router();
// const multer = require('multer');
// var storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, '../src/assets/images')
//     },
//     filename: function (req, file, cb) {
//         cb(null, Date.now() + '-' + file.originalname)
//     }
// })
// const upload = multer({ storage: storage });
// ============== Api products ===========
router.get('/products',productsApiControllers.getProducts);
router.get('/products/:id',productsApiControllers.detail);
router.post('/products/',productsApiControllers.add);
router.delete('/products/:id',productsApiControllers.delete);
router.put('/products/:id',productsApiControllers.update)

router.get('/statistics',statisticsApiControllers.getStatistics)


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
module.exports = router;