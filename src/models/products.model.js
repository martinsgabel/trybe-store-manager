const camelize = require('camelize');
// const snakeize = require('snakeize');
const connection = require('./connection');

const listProducts = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM StoreManager.products',
  );
  return camelize(result);
};

const listSpecificProducts = async (id) => {
  const [[result]] = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE id = ?',
    [id],
  );
  return camelize(result);
};

const insertItem = async (name) => {
  const addedProduct = await connection.execute(
    'INSERT INTO StoreManager.products name VALUE ?',
    [name],
  );

  console.log(addedProduct);
  return addedProduct;
};

module.exports = {
  listProducts,
  listSpecificProducts,
  insertItem,
};