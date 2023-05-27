const Redis = require("redis");
const redisClient = Redis.createClient({});
let getPath = (ItemId) => {
  return new Promise((Resolve, Reject) => {
    redisClient.get(ItemId, (Err, Data) => {
      if (Err) Reject({ msg: Err });
      Resolve(Data);
    });
  });
};

let setPath = (ItemId, value) => {
  return new Promise((Resolve, Reject) => {
    redisClient.set(ItemId, value, (Err) => {
      if (Err) Reject({ msg: Err });
      else Resolve();
    });
  });
};

module.exports = {
  getPath,
  setPath,
};
