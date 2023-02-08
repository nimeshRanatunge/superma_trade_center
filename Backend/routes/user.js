const router = require('express').Router();

router.get("/usertt", (req, res) => {
    res.send("User test is success")
})

router.get("/usertt2", (req, res) => {
    res.send("User2 test is success")
})

router.post("/addName", (req, res) => {
    const username = req.body.username;
    res.send("Your username is " + username)
})

module.exports = router