const salesModel = require('../models/sales.model');

const listAllSales = async () => {
  const sales = await salesModel.listAllSales();
  return sales;
};

const listSpecificSales = async (id) => {
  const sales = await salesModel.listSpecificSales(id);

  if (!sales) return { type: 404, message: 'Sale not found' };

  return { type: null, message: sales };
};

module.exports = {
  listAllSales,
  listSpecificSales,
};