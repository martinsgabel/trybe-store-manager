const modelList = [
  {
    id: 1,
    name: "Martelo de Thor"
  },
  {
    id: 2,
    name: "Traje de encolhimento"
  }
];

const modelSpecificProduct = [{
  id: 1,
  name: "Martelo de Thor"
}]

const foundSpecificProduct = {
  type: null,
  message: [{
    id: 1,
    name: "Martelo de Thor"
  }]
};

const notFoundSpecificProduct = {
  type: 404,
  message: 'Product not found'
};

const addedProduct = {
  type: null,
  message: {
    id: 21,
    name: "RWBY Doll"
  }
};

const newProduct = {
  name: "RWBY Doll"
}

const nameRequired = {
  type: 400,
  message: '"name" is required'
}

const nameInvalid = {
  type: 422,
  message: '"name" length must be at least 5 characters long'
}

module.exports = {
  modelList,
  modelSpecificProduct,
  notFoundSpecificProduct,
  foundSpecificProduct,
  addedProduct,
  newProduct,
  nameRequired,
  nameInvalid,
};