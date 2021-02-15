const Account = require("../account-models");

async function checkId(req, res, next) {
  const { id } = req.params;
  const idExist = await Account.getById(id);
  idExist
    ? next()
    : res.status(400).json({ message: "ID does not exist in the DB" });
}

module.exports = {
  checkId,
};
