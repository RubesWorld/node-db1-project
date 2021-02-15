const express = require("express");

const Account = require("./account-models");

const router = express.Router();
const mw = require("./middleware/middleware");

router.get("/", async (req, res) => {
  try {
    const data = await Account.get();
    res.json(data);
  } catch (err) {
    res.status(400).json({ message: "Failure" });
  }
});

router.get("/:id", mw.checkId, async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Account.getById(id);
    res.json(data);
  } catch {
    res.status(400).json({ message: "Failure" });
  }
});

router.post("/", async (req, res) => {
  try {
    const account = req.body;
    const data = await Account.create(account);
    res.json(data);
  } catch {
    res.status(400).json({ message: "Failure" });
  }
});

router.put("/:id", mw.checkId, mw.checkAccount, async (req, res) => {
  try {
    const { id } = req.params;
    const changes = req.body;
    const data = await Account.update(id, changes);
    res.json(data);
  } catch {
    res.status(400).json({ message: "error" });
  }
});

router.delete("/:id", mw.checkId, async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Account.remove(id);
    res.status(200).json(data);
  } catch (err) {
    res.status(400).json({ Message: "error" });
  }
});

module.exports = router;
