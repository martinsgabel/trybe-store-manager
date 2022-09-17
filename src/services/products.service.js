const productsModel = require('../models/products.model');
const validation = require('./validations/validateId');

const listProducts = async () => {
  const list = await productsModel.listProducts();
  return list;
};

const listSpecificProduct = async (id) => {
  const error = await validation.validateId(id);

  if (error) return { type: 404, message: 'Product not found' };

  const product = await productsModel.listSpecificProducts(id);

  return { type: null, message: product };
};

const addNewProduct = async (name) => {
  const addedProduct = await productsModel.insertItem(name);

  return addedProduct;
};

module.exports = {
  listProducts,
  listSpecificProduct,
  addNewProduct,
};