const express = require("express");

const Users = require("./users-model");
const authorization = require("../auth/restricted-middleware");


const router = express.Router();

router.get("/", authorization, async (req, res, next) => {
  try {
    const users = await Users.find();
    res.status(200).json(users);
  } catch (err) {
    next({ apiCode: 500, apiMessage: 'db error getting users', ...err })
  }
});

module.exports = router;
