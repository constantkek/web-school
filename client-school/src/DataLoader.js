// const fetch = require("node-fetch");

export const dataLoader = () => {
  return fetch("https://www.cbr-xml-daily.ru/daily_json.js").then((response) =>
    response
      .json()
      .then((data) => data)
      .catch((error) => {
        return error.message;
      })
  );
};