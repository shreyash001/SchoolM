const express = require('express');
const router = express.Router();

const {
    userLogin
} = require("../controller/user.controller")

router.post("/login", (req,res) => {
    userLogin(req,res)
})

module.exports = router;