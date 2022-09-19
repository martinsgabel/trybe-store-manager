const { expect } = require('chai');
const chai = require('chai');
const sinon = require('sinon');

const connection = require('../../../src/models/connection');
const productsModel = require('../../../src/models/products.model');
const mocks = require('./mocks/products.mock');

describe('Testes de unidade do model products', () => {
  describe('Listando todos os produtos', () => {
    before(() => {
      sinon.stub(connection, 'execute').resolves([mocks.list]);
    })

    after(() => {
      connection.execute.restore();
    })

    it('Lista todos os produtos com sucesso', async () => {
      const list = await productsModel.listProducts();

      chai.expect(list).to.deep.equal(mocks.list);
    })
  })

  describe('Listando produto específico', () => {
    before(() => {
      sinon.stub(connection, 'execute').resolves([[mocks.specificProduct]]);
    })

    after(() => {
      connection.execute.restore();
    })

    it('Lista produto específico com sucesso', async () => {
      const product = await productsModel.listSpecificProduct(1);

      chai.expect(product).to.deep.equal(mocks.specificProduct);
    })
  })

  describe('Inserindo item', () => {
    before(() => {
      sinon.stub(connection, 'execute').resolves([{ insertId: 21 }]);
    })

    after(() => {
      connection.execute.restore();
    })

    it('Inserindo item com sucesso', async () => {
      const id = await productsModel.insertItem(mocks.newProduct);

      expect(id).to.equal(21);
    })
  })

  // describe('Editando produto', () => {
  //   before(() => {
  //     sinon.stub(connection, 'execute').resolves([]);
  //   })

  //   after(() => {
  //     connection.execute.restore();
  //   })

  //   it('Editando produto com sucesso', async () => {
  //     const edited = productsModel.editSpecificProduct(1, 'RWBY Doll');
  //   })
  // })
});