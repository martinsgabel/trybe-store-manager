const productsModel = require('../models');

const listProducts = async () => {
  const list = await productsModel.listProducts();

  return { type: null, message: list };
};

const listSpecificProduct = async (productId) => {
  const product = await productsModel.listSpecificProduct(productId);

  return { type: null, message: product };
};

module.exports = {
  listProducts,
  listSpecificProduct,
};