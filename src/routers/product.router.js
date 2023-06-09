const express = require('express');
const productsController = require('../controllers/products.controller');

const router = express.Router();

router.get('/', productsController.listAllProducts);
router.get('/:id', productsController.listSpecificProduct);
router.post('/', productsController.addNewProduct);
router.put('/:id', productsController.editSpecificProduct);
router.delete('/:id', productsController.deletingProduct);

module.exports = router;