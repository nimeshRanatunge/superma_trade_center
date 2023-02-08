const Product = require('../models/Product');

const router = require('express').Router();

//register
router.post("/insert", async (req, res) => {
    const newProduct = new Product({
        title: req.body.title,
        desc: req.body.desc,
        img: req.body.img,
        categories: req.body.categories,
        price: req.body.price,
    });
    try {
      const savedProduct = await newProduct.save();
      res.status(201).json(savedProduct); //successfully added
    } catch (err) {
      res.status(500).json(err); //any error
    }
  });//register

module.exports = router