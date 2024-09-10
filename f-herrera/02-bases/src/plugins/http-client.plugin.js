const axios = require("axios");

const httpClientPlugin = {
  get: async (url) => {
    const { data } = await axios.get(url);
    return data;

    /**
     * This is without Axios
     */
    // const data = await response.json();
    // return data;
  },
};

module.exports = {
  httpClientPlugin,
};
