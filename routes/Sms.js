var express = require('express');
var router = express.Router();
var sms = require('../controllers/smsController');
const { users, getUser, getUserByID } = require('../controllers/UserController');


//sms
router.post('/sms', sms.received)

//user
router.post("/users", users)
router.get("/users", getUser)
router.get("/users/:number", getUserByID)
router.get("/welcome", function (req, res) {
    res.send("Welcome")
    
})


module.exports = router