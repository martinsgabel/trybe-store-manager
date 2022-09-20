const serviceList = [
  {
    id: 1,
    name: "Martelo de Thor"
  },
  {
    id: 2,
    name: "Traje de encolhimento"
  }
];

const serviceFoundSpecificProduct = {
  type: null,
  message: [{
    id: 1,
    name: "Martelo de Thor"
  }]
};

const serviceAddedProduct = {
  type: null,
  message: {
    id: 21,
    name: "RWBY Doll"
  }
};

module.exports = {
  serviceList,
  serviceFoundSpecificProduct,
  serviceAddedProduct,
};