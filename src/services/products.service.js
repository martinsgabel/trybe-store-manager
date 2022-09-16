const productsModel = require('../models/products.model');
const validateId = require('./validations/validateId');

const listProducts = async () => {
  const list = await productsModel.listProducts();
  // return { type: null, message: list };
  return list;
};

const listSpecificProduct = async (id) => {
  const error = await validateId(id);

  if (error) return { type: 404, message: 'Product not found' };

  const product = await productsModel.listSpecificProduct(id);

  return { type: null, message: product };
};

module.exports = {
  listProducts,
  listSpecificProduct,
};