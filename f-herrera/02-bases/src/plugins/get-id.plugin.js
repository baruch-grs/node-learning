const { v4: uuidv4 } = require("uuid");

const getUUID = () => uuidv4();

module.exports = {
  getUUID,
};
