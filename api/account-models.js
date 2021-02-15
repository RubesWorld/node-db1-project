const db = require("../data/dbConfig");

module.exports = {
  get,
  getById,
};

function get() {
  //get * from posts
  return db("accounts");
}

function getById(id) {
  return db("accounts").where("id", id).first();
}
