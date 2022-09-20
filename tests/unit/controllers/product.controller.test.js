const chai = require('chai');
const sinon = require('sinon');

const productsController = require('../../../src/controllers/products.controller');
const productsService = require('../../../src/services/products.service');
const mocks = require('./mocks/products.mock')

describe('Testes na camada CONTROLLER', () => {
  describe('Listando todos os produtos', () => {

    const req = {};
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    it('Listando todos os produtos com sucesso', async () => {
      sinon.stub(productsService, 'listProducts').resolves(mocks.serviceList);

      await productsController.listAllProducts(req, res);

      chai.expect(res.status.calledWith(200)).to.be.equal(true);

      productsService.listProducts.restore();
    })
  })

  describe('Listando produto específico', () => {

    const req = { params: { id: 1 } };
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    it('Listando produto específico com sucesso', async () => {
      sinon.stub(productsService, 'listSpecificProduct').resolves(mocks.serviceFoundSpecificProduct);

      await productsController.listSpecificProduct(req, res);

      chai.expect(res.status.calledWith(200)).to.be.equal(true);
      chai.expect(res.json.calledWith(mocks.serviceFoundSpecificProduct.message)).to.be.equal(true);

      productsService.listSpecificProduct.restore();
    })
  })
});