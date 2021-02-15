const Account = require("../account-models");

async function checkId(req, res, next) {
  const { id } = req.params;
  const idExist = await Account.getById(id);
  idExist
    ? next()
    : res.status(400).json({ message: "ID does not exist in the DB" });
}

function checkAccount(req, res, next) {
  const { name, budget } = req.body;
  name && budget
    ? next()
    : res
        .status(400)
        .json({ message: "You need to have a name and budget for this post" });
}

module.exports = {
  checkId,
  checkAccount,
};
