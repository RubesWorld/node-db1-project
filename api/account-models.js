const db = require("../data/dbConfig");

module.exports = {
  get,
};

function get() {
  //get * from posts
  return db("accounts");
}
