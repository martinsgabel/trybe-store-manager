const salesService = require('../services/sales.service');

const listAllSales = async (_req, res) => {
  const message = await salesService.listAllSales();

  return res.status(200).json(message);
};

const listSpecificSales = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await salesService.listSpecificSales(id);

  if (type) return res.status(type).json({ message });

  return res.status(200).json(message);
};

// const addSale = async (req, res) => {
//   try {
//     const sale = req.body;

//     const { type, message } = await salesService.addSale(sale);

//     if (type) return res.status(type).json({ message });

//     return res.status(200).json(message);
//   } catch (error) {
//     return res.status(500).json({ message: 'deu ruim' });
//   }
// };

module.exports = {
  listAllSales,
  listSpecificSales,
};