const { getAge } = require("../plugins/get-age.plugin");
const { getUUID } = require("../plugins/get-id.plugin");
const { httpClientPlugin } = require("../plugins/http-client.plugin");
const buildLogger = require("../plugins/logger.plugin");
module.exports = {
  getAge,
  getUUID,
  httpClientPlugin,
  buildLogger,
};
