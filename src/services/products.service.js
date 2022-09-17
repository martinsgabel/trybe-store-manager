const productsModel = require('../models/products.model');
const validation = require('./validations/newProductValidation');

const listProducts = async () => {
  const list = await productsModel.listProducts();
  return list;
};

const listSpecificProduct = async (id) => {
  const product = await productsModel.listSpecificProducts(id);

  if (!product) return { type: 404, message: 'Product not found' };

  return { type: null, message: product };
};

const addNewProduct = async (name) => {
  if (!name) return { type: 400, message: '"name" is required' };

  const isNameLong = await validation.nameLength(name);

  if (!isNameLong) {
    return { type: 422, message: '"name" length must be at least 5 characters long' };
  }

  const newId = await productsModel.insertItem(name);
  const addedProduct = { id: newId, name };

  return { type: null, message: addedProduct };
};

module.exports = {
  listProducts,
  listSpecificProduct,
  addNewProduct,
};