const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken");
const User = require("../models/User");
const router = require("express").Router();

//UPDATE-CAN DONE BY ADMIN OR OWNED USER
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
  if (req.body.password) { //when user goes to password change with other details changing, encrypt that password again
    req.body.password = CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SEC
    ).toString();
  }

  try {
    const updatedUser = await User.findByIdAndUpdate( //mondodb methods
      req.params.id,
      {
        $set: req.body, //set all details in the req body
      },
      { new: true }//return updated one 
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});//write middleware for verify jwt

//DELETE - CAN DONE BY ADMIN ONLY
router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id); //findByIdAndDelete is a mongo method
    res.status(200).json("User has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET USER
router.get("/find/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...others } = user._doc;
    res.status(200).json(others); //show without password
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL USER - here based on query parameters
router.get("/", verifyTokenAndAdmin, async (req, res) => {
  const query = req.query.new;
  try {
    const users = query
      ? await User.find().sort({ _id: -1 }).limit(2)
      : await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET USER STATS
router.get("/stats", verifyTokenAndAdmin, async (req, res) => {
  const date = new Date();
  const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

  try {
    //group my items for statitics per months - using mongoDB aggregate
    const data = await User.aggregate([
      //gte-greater than last year
      { $match: { createdAt: { $gte: lastYear } } }, 
      {
        $project: {
          month: { $month: "$createdAt" },
        },
      },
      //month numbers
      {
        $group: {
          _id: "$month",
          total: { $sum: 1 },
        },
      },
    ]);
    res.status(200).json(data)
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
