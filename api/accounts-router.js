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

module.exports = router;
