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
    'INSERT INTO StoreManager.products (name) VALUE (?)',
    [name],
  );
  return addedProduct[0].insertId;
};

const editSpecificProduct = async (id, name) => {
  await connection.execute(
    `UPDATE StoreManager.products SET StoreManager.products.name = ?
    WHERE id = ?`,
    [name, id],
  );
};

module.exports = {
  listProducts,
  listSpecificProducts,
  insertItem,
  editSpecificProduct,
};