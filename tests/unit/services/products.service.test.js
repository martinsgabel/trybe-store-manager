const chai = require('chai');
const sinon = require('sinon');

const productsService = require('../../../src/services/products.service');
const productsModel = require('../../../src/models/products.model');
const validations = require('../../../src/services/validations/newProductValidation')
const mocks = require('./mocks/products.mock');

describe('Testando a camada service', () => {
  describe('Listando todos os produtos', () => {
    before(async () => {
      sinon.stub(productsModel, 'listProducts').resolves(mocks.modelList);
    })

    after(async () => {
      productsModel.listProducts.restore();
    })

    it('Listando todos os produtos com sucesso', async () => {
      const list = await productsService.listProducts();

      chai.expect(list).to.deep.equal(mocks.modelList);
    })
  })

  describe('Listando produto específico', () => {
    it('Listando produto específico com sucesso', async () => {
      sinon.stub(productsModel, 'listSpecificProduct').resolves(mocks.modelSpecificProduct);

      const result = await productsService.listSpecificProduct(1);

      chai.expect(result).to.deep.equal(mocks.foundSpecificProduct);

      productsModel.listSpecificProduct.restore();
    })

    it('Listando produto não encontrado', async () => {
      sinon.stub(productsModel, 'listSpecificProduct').resolves(null);

      const result = await productsService.listSpecificProduct(21);

      chai.expect(result).to.deep.equal(mocks.notFoundSpecificProduct);

      productsModel.listSpecificProduct.restore();
    })
  })

  describe('Adicionando novo produto', () => {
    it('Adicionando novo produto com sucesso', async () => {
      sinon.stub(productsModel, 'insertItem').resolves(21);

      const result = await productsService.addNewProduct(mocks.newProduct.name);

      chai.expect(result).to.deep.equal(mocks.addedProduct);

      productsModel.insertItem.restore();
    })

    it('Adicionando novo produto sem nome', async () => {
      const result = await productsService.addNewProduct();

      chai.expect(result).to.deep.equal(mocks.nameRequired);
    })

    it('Adicionando novo produto com nome inválido', async () => {
      sinon.stub(validations, 'nameLength').resolves(false);

      const result = await productsService.addNewProduct({ name: 'Do' });

      chai.expect(result).to.deep.equal(mocks.nameInvalid);
    })
  })
});