const productsService = require('../services/products.service');

const listAllProducts = async (_req, _res) => {
  const message = await productsService.listProducts();
  console.log(message);

  // res.status(200).json(message);
};

const listSpecificProduct = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await productsService.listSpecificProduct(id);

  if (type === 404) return res.status(type).json(message);

  res.status(200).json(message);
};

module.exports = {
  listAllProducts,
  listSpecificProduct,
};