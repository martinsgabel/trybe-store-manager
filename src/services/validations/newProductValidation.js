const nameLength = async (name) => {
  if (name.length < 5) return false;
  return true;
};

module.exports = {
  nameLength,
};