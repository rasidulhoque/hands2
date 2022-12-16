const express = require('express');
const router = express.Router();
const path = require('path')
const User = require('../models/User')

const Area = require('../models/Area')


const argon2 = require('argon2')
const crypto = require('crypto')
const fs = require('fs')

const DIR = 'C:/Users/Inamul/Desktop/hands/public/static/'

router.get('/', (req, res) => {
  res.sendFile(path.join(DIR, 'home.html'));
});




router.get('/signup', (req, res) => {
  res.sendFile(path.join(DIR, 'signup.html'));
});






router.post('/signup', async (req, res) => {

  console.log(req.body.gender)
  const oldUser = await User.findOne({ email: req.body.email });
  if (oldUser) {
    return res.status(400).json({ success: false, error: "Sorry! A user with this email already exists." });
  }


  let password = req.body.password;
  let salt = crypto.randomBytes(16);
  try {
    var hash = await argon2.hash(password, { salt: salt, saltLength: 16 });
    console.log('hash: ', hash);
  } catch (e) {

  }


  if (req.body.username == process.env.ADMIN_USERNAME && req.body.password == process.env.ADMIN_PASSWORD) {
    des = 'admin';
  }
  else {
    des = 'worker';
  }

  const user = await User.create({
    username: req.body.username,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    designation: des,
    gender:req.body.gender,
    age: req.body.age,
    email: req.body.email,
    phone: req.body.phone,
    password: hash,
    area_id: req.body.area_id
  });

  res.cookie('username', req.body.username)

  if (des === 'admin') res.redirect('/admin');
  else if (des === 'worker') res.redirect('/worker');

});

router.get('/login', (req, res) => {
  res.sendFile(path.join(DIR, 'login.html'));
});


router.post('/login', async (req, res) => {


  if (req.body.username == process.env.ADMIN_USERNAME && req.body.password == process.env.ADMIN_PASSWORD)
    res.redirect('/admin');

  else {


    try {
      const { username, password } = req.body;

      const existingUser = await User.findOne({ username });

      if (!existingUser) {
        return res.status(400).json({ success: false, error: "Please try to login with correct credentials." });
      }

      if (await argon2.verify(existingUser.password, password)) {
        res.cookie('username', req.body.username)
        res.redirect('/worker');
      }
      else res.redirect('/login');

    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error!");
    }
  }

});


router.get('/logout', (req, res) => {

  res.clearCookie('username');
  res.redirect('/');
})


router.get('/admin', (req, res) => {
  res.sendFile(path.join(DIR, 'adminInterface.html'));
})

router.get('/worker', (req, res) => {
  res.sendFile(path.join(DIR, 'workerInterface.html'));
})



module.exports = router;