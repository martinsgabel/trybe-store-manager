// const productModel = require('../../models/products.model');

// const productValidation = async (sale) => {
//   let resp;

//   sale.forEach(async (element) => {
//     if (!element.productId) { 
//       throw { type: 400, message: '"productId" is required' };
//     }

//     if (!element.quantity) return { type: 400, message: '"quantity" is required' };

//     if (element.quantity <= 0) {
//       return {
//         type: 422,
//         message: '"quantity" must be greater than or equal to 1',
//       };
//     }

//     const product = await productModel.listSpecificProduct(element.productId);

//     if (!product) return false;
//   });

//   return resp;
// };

// module.exports = {
//   productValidation,
// };