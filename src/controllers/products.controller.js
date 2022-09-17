const productsService = require('../services/products.service');

const listAllProducts = async (_req, res) => {
  const message = await productsService.listProducts();

  return res.status(200).json(message);
};

const listSpecificProduct = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await productsService.listSpecificProduct(id);

  if (type === 404) return res.status(type).json(message);

  res.status(200).json(message);
};

const addNewProduct = async (req, res) => {
  const { name } = req.body;

  const { type, message } = await productsService.addNewProduct(name);

  if (type) return res.status(type).json(message);

  return res.status(201).json(message);
};

module.exports = {
  listAllProducts,
  listSpecificProduct,
  addNewProduct,
};