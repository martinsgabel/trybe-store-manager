const productModel = require('../../models/products.model');

const productIdValidation = async (id) => {
  const product = await productModel.listSpecificProduct(id);

  if (!product.name) return false;
};

module.exports = {
  productIdValidation,
};