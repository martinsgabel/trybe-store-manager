const productsModel = require('../../models/products.model');

const validateId = async (id) => {
  const product = await productsModel.listSpecificProducts(id);

  if (!product) return true;
  return false;
};

module.exports = {
  validateId,
};