const express = require('express');
const salesController = require('../controllers/sales.controller');

const router = express.Router();

router.get('/', salesController.listAllSales);

router.get('/:id', salesController.listSpecificSales);

// router.post('/', salesController.addSale);

module.exports = router;