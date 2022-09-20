const productsService = require('../services/products.service');

const listAllProducts = async (_req, res) => {
  const message = await productsService.listProducts();

  return res.status(200).json(message);
};

const listSpecificProduct = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await productsService.listSpecificProduct(id);

  if (type) return res.status(type).json({ message });

  res.status(200).json(message);
};

const addNewProduct = async (req, res) => {
  const { name } = req.body;

  const { type, message } = await productsService.addNewProduct(name);

  if (type) return res.status(type).json({ message });

  return res.status(201).json(message);
};

const editSpecificProduct = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const { type, message } = await productsService.editSpecificProduct(id, name);

  if (type) return res.status(type).json({ message });

  return res.status(200).json(message);
};

const deletingProduct = async (req, res) => {
  const { id } = req.params;

  const { type, message } = await productsService.deletingProduct(id);

  if (type) return res.status(type).json(message);

  return res.status(204).json();
};

module.exports = {
  listAllProducts,
  listSpecificProduct,
  addNewProduct,
  editSpecificProduct,
  deletingProduct,
};