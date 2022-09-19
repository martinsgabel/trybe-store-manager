const salesModel = require('../models/sales.model');
const validations = require('./validations/newSaleValidation');

const listAllSales = async () => {
  const sales = await salesModel.listAllSales();
  return sales;
};

const listSpecificSales = async (id) => {
  const sales = await salesModel.listSpecificSales(id);
  console.log(sales);

  if (!sales || !sales.length) return { type: 404, message: 'Sale not found' };

  return { type: null, message: sales };
};

const addSale = async (sale) => {
  // usar forEach pra cada if?
  // se forem várias vendas não signfica que teremos retornado mais de um id?

  if (!sale.productId) return { type: 400, message: '"productId" is required' };

  if (!sale.quantity) return { type: 400, message: '"quantity" is required' };

  if (sale.quantity <= 0) {
    return {
      type: 422,
      message: '"quantity" must be greater than or equal to 1',
    };
  }

  const productIdValidation = await validations.productIdValidation(sale.productId);

  if (!productIdValidation) return { type: 404, message: 'Product not found' };

  const newId = await salesModel.addSale(sale);
  const newSale = { id: newId, itemsSold: sale };

  return { type: null, message: newSale };
};

module.exports = {
  listAllSales,
  listSpecificSales,
  addSale,
};