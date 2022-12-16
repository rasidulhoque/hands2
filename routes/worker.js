const express = require('express');
const router = express.Router();
const User = require('../models/User')
const path = require('path')
const Survey=require('../models/Survey');
const Area = require('../models/Area');

const DIR = 'C:/Users/Inamul/Desktop/hands/public/static/'

router.get('/fetch_profile', async (req,res) => {
  console.log("worker")
  try {
        const worker = await User.find({ username: req.cookies.username });

        res.json(worker);
      } catch (error) {
        res.status(500).send("Internal Server Error");
      }
})







router.get('/fetch_area', async (req,res) => {
  console.log("area")
  try {
        const user = await User.findOne({ username: req.cookies.username });
        console.log(req.cookies.username)
        const area = await Area.findOne({area_id: user.area_id});
        console.log(area)

        res.json(area);
      } catch (error) {
        res.status(500).send("Internal Server Error");
      }
})


router.get('/viewArea', (req, res) => {
  res.sendFile(path.join(DIR, 'viewArea.html'));
});


router.get('/survey', (req, res) => {
  res.sendFile(path.join(DIR, 'survey.html'));
});

router.post('/survey', async (req, res) => {
  const survey = await Survey.create({
    area_id:req.body.area_id,
    hno:req.body.hno,
    pragnantWomen:req.body.pragnantWomen,
    pname:req.body.pname,
    page:req.body.page,
    pweight:req.body.pweight,
    p_rec_govt:req.body.p_rec_govt,
    p_rec_per_med:req.body.p_rec_per_med,
    husname:req.body.husname,
    p_ph:req.body.p_ph,
    p_month:req.body.p_month,
    Lactatingmother:req.body.Lactatingmother,
    L_name:req.body.L_name,
    l_age:req.body.l_age,
    l_weight: req.body.l_weight,
    l_month: req.body.l_month,
    l_rec_food:req.body.l_rec_food,
    l_rec_med: req.body.l_rec_med,
    children: req.body.children,                
    c_name:req.body.c_name,
    c_age:req.body.c_age,
    c_height:req.body.c_height,
    c_weight: req.body.c_weight,
    goesto: req.body.goesto,
    c_rec_vacc: req.body.c_rec_vacc,
    c_rec_med:req.body.c_rec_med,
    aged: req.body.aged,
    aged_name: req.body.aged_name,
    aged_age: req.body.aged_age,
    a_rec_med: req.body.a_rec_med,
    l_month: req.body.l_month
  });
  res.redirect('/worker');
  console.log("first")
});







router.get('/worker_details', async (req, res) => {
  if(req.cookies.username) {
    const user = await User.findOne()
  }
})







module.exports = router;