const camelize = require('camelize');
const snakeize = require('snakeize');
const connection = require('./connection');

const listProducts = async () => {
  const result = await connection.execute(
    'SELECT * FROM StoreManager.products',
  );
  return camelize(result);
};

const listSpecificProducts = async (productId) => {
  const result = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE id = ?',
    [productId],
  );
  return camelize(result);
};

module.exports = {
  listProducts,
  listSpecificProducts,
};