const express = require("express")

const db = require("./users-model");
const restricted = require("../auth/restricted-middleware");

const router = express.Router();

router.get("/", restricted, async (req, res, next) => {
    try {
        const users = await db.find();
    } catch(error) {
        next({ apiCode: 500, apiMessage: 'You shall not pass', ...err })
    }
})


module.exports = router;