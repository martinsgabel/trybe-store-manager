const camelize = require('camelize');
// const snakeize = require('snakeize');
const connection = require('./connection');

const listAllSales = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM StoreManager.sales',
  );
  return camelize(result);
};

const listSpecificSales = async (id) => {
  const [[result]] = await connection.execute(
    'SELECT * FROM StoreManager.sales WHERE id = ?',
    [id],
  );
  return camelize(result);
};

module.exports = {
  listAllSales,
  listSpecificSales,
};