const salesService = require('../services/sales.service');

const listAllSales = async (_req, res) => {
  const message = await salesService.listAllSales();

  return res.status(200).json(message);
};

const listSpecificSales = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await salesService.listSpecificSales(id);

  if (type) return res.status(type).json(message);

  return res.status(200).json(message);
};

module.exports = {
  listAllSales,
  listSpecificSales,
};