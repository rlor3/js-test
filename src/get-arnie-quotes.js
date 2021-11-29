const { httpGet } = require("./mock-http-interface");

const getArnieQuotes = async (urls) => {
  // TODO: Implement this function.
  // return results;
  const results = await Promise.all(
    urls.map(async (url) => {
      const response = await httpGet(url);
      if (response.status === 200) {
        return {
          "Arnie Quote": JSON.parse(response.body).message,
        };
      } else {
        return {
          FAILURE: JSON.parse(response.body).message,
        };
      }
    })
  );
  return results;
};

module.exports = {
  getArnieQuotes,
};
