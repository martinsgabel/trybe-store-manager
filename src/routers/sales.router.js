const express = require('express');
const productsController = require('../controllers/products.controller');

const router = express.Router();

router.get('/', productsController);

router.get('/:id', productsController);

module.exports = router;