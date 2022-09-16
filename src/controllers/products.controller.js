const productsService = require('../services/products.service');

const listAllProducts = async (_req, res) => {
  const { type, message } = await productsService.listProducts();

  if (type) return res.status(500).json(message);

  res.status(200).json(message);
};

module.exports = {
  listAllProducts,
};