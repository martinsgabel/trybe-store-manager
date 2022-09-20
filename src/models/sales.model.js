const camelize = require('camelize');
// const snakeize = require('snakeize');
const connection = require('./connection');

const listAllSales = async () => {
  const [result] = await connection.execute(
    `SELECT * FROM StoreManager.sales 
    INNER JOIN StoreManager.sales_products
    ON StoreManager.sales.id = StoreManager.sales_products.sale_id`,
  );
  return camelize(result);
};

const listSpecificSales = async (id) => {
  const [result] = await connection.execute(
    `SELECT StoreManager.sales.date, 
    StoreManager.sales_products.product_id, 
    StoreManager.sales_products.quantity
    FROM StoreManager.sales_products
    RIGHT JOIN StoreManager.sales
    ON StoreManager.sales.id = StoreManager.sales_products.sale_id
    WHERE id = ?`,
    [id],
  );
  return camelize(result);
};

// const addInSales = async () => {
//   const result = await connection.execute(
//     'INSERT StoreManager.sales () VALUES ()',
//   );

//   return result[0].insertId;
// };

// const addInSalesProducts = async ({ productId, quantity }, salesId) => {
//   const result = await connection.execute(
//     'INSERT INTO StoreManager.sales_products (product_id, sales_id, quantity) VALUES (?, ?, ?)',
//     [...productId, salesId, ...quantity],
//   );

//   return result[0].insertId;
// };

module.exports = {
  listAllSales,
  listSpecificSales,
};