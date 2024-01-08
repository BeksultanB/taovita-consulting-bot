const productsReducer = require("./productsReducer");
const reviewsReducer = require("./reviewsReducer");

const callbackReducers = [reviewsReducer, productsReducer];

function callbackHandler(query, bot) {
  const [data] = query.data.split("_");

  callbackReducers.find((reducer) => {
    const { handler } = reducer;

    if (data === reducer.query) {
      handler(query, bot);
      return true;
    }
    return false;
  });
}

module.exports = callbackHandler;
