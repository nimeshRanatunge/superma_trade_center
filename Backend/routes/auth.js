const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

//register
router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SEC
    ).toString(),
  });
  try {
    const savedUSer = await newUser.save();
    res.status(201).json(savedUSer); //successfully added
  } catch (err) {
    res.status(500).json(err); //any error
  }
});

//login
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({
      username: req.body.username,
    });
    !user && res.status(401).json("Wrong credentials");

    const hashedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASS_SEC
    );
    const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
    const inputPassword = req.body.password;

    originalPassword !== inputPassword &&
      res.status(401).json("Wrong password");

    const accesstoken = jwt.sign({
      id: user.id, isAdmin: user.isAdmin,

    }, process.env.JWT_SEC,
    {expiresIn: "3d"}); //after 3 days need to login again

      //mongo storese data inside  "_doc": 
    const { password, ...others } = user._doc;
    res.status(200).json({others, accesstoken});
    
  } catch (err) {
    res.status(500).json(err); //any error
  }
});

module.exports = router;
