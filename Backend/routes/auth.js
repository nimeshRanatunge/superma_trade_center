const router = require("express").Router();
const User = require("../models/User");
const CryptoJs = require("crypto-js")

//register
router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });
  try {
    const savedUSer = await newUser.save();
    res.status(201).json(savedUSer); //successfully added
  } catch (err) {
    res.status(500).json(err); //any error
  }
});

module.exports = router;
