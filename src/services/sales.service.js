const salesModel = require('../models/sales.model');
// const validations = require('./validations/newSaleValidation');

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

// const addSale = async (sale) => {
//   // ForEach pode retornar alguma coisa? Não
//   try {
//     const productIdValidation = await validations.productValidation(sale);

//     console.log(productIdValidation);

//     if (!productIdValidation) return { type: 404, message: 'Product not found' };

//     const salesId = await salesModel.addInSales();
//     const newId = await salesModel.addInSalesProducts(sale, salesId);
//     const newSale = { id: newId, itemsSold: sale };

//     return { type: null, message: newSale };
//   } catch (error) {
//     throw error;
//   }
// };

module.exports = {
  listAllSales,
  listSpecificSales,
};