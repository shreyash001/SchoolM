const express = require('express');
const router = express.Router();

const {
    userLogin, getAllFees, getAllTeachers
} = require("../controller/user.controller");
const verifyToken = require('../middleware/auth.middleware');

router.post("/login", (req,res) => {
    userLogin(req,res)
})


router.post("/getAllFees", verifyToken , (req,res) => {
    getAllFees(req,res)
})

router.post("/getTeachers", verifyToken , (req,res) => {
    getAllTeachers(req,res)
})

module.exports = router;