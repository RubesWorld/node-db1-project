const db = require("../data/dbConfig");

module.exports = {
  get,
  getById,
  create,
};

function get() {
  //get * from posts
  return db("accounts");
}

function getById(id) {
  return db("accounts").where("id", id).first();
}

function create(data) {
  return db("accounts")
    .insert(data)
    .then(([id]) => {
      return db("accounts").where("id", id).first();
    });
}
