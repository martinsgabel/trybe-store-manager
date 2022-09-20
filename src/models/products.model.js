const camelize = require('camelize');
// const snakeize = require('snakeize');
const connection = require('./connection');

const listProducts = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM StoreManager.products',
  );
  return camelize(result);
};

const listSpecificProduct = async (id) => {
  const [result] = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE id = ?',
    [id],
  );
  console.log(result);
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

const deletingProduct = async (id) => {
  await connection.execute(
    'DELETE FROM StoreManager.products WHERE id = ?',
    [id],
  );
};

module.exports = {
  listProducts,
  listSpecificProduct,
  insertItem,
  editSpecificProduct,
  deletingProduct,
};