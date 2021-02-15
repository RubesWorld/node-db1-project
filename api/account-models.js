const db = require("../data/dbConfig");

module.exports = {
  get,
  getById,
  create,
  update,
  remove,
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

function update(id, data) {
  const accountId = id;
  return db("accounts")
    .where("id", id)
    .update(data)
    .then(() => {
      return db("accounts").where("id", accountId).first();
    });
}

function remove(id) {
  return db("accounts")
    .where("id", id)
    .del()
    .then(() => {
      return db("accounts");
    });
}
