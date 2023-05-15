const fetch = require("node-fetch");

let myGetFetch = async (URL) => {
  let Ans = await fetch(URL);
  Ans = await Ans.json();
  return Ans;
};
let myDeleteFetch = async (URL) => {
  let Ans = await fetch(URL, {
    method: "DELETE",
  });
  Ans = await Ans.json();
  return Ans;
};

module.exports = {
  myGetFetch,
  myDeleteFetch,
};
