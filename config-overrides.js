module.exports = function override(config) {
  const addLessLoader = require('./scripts/addLessLoader');

  addLessLoader({
    lessOptions: { javascriptEnabled: true },
  })(config);

  return config;
};
