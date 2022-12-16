const express = require('express');
const router = express.Router();
const User = require('../models/User')
const Area = require('../models/Area')
const path = require('path');
const Survey = require('../models/Survey');


const DIR = 'C:/Users/Inamul/Desktop/hands/public/static/'

router.get('/allocArea', (req, res) => {
  res.sendFile(path.join(DIR, 'alloc_area.html'));
}
);

router.post('/allocArea', async (req, res) => {
  // console.log(req.body)
  try {
    const { username, area_id } = req.body;

    const existingUser = await User.findOne({ username });

    if (!existingUser) {
      return res.status(400).json({ success: false, error: "User does not exist." });
    }

    else {
      console.log(existingUser)
      let update = { area_id: area_id }

      let updatedUser = await User.findOneAndUpdate({ 'username': username }, update, { new: true });

      res.redirect('/admin')
    }

  } catch (error) {

    console.error(error.message);
    res.status(500).send("Internal Server Error!");
  }
}
);

router.get('/areaDetail', (req, res) => {
  res.sendFile(path.join(DIR, 'areaDetail.html'));
}
);

router.post('/areaDetail', async (req, res) => {

  const area= await Area.create({
    area_id: req.body.area_id,
    city:req.body.city,
    district:req.body.district,
    circle:req.body.circle,
  });
  console.log(area)

  res.redirect('/admin')
}
);


router.get('/list_W', async (req, res) => {
  res.sendFile(path.join(DIR, 'listworker.html'));
}
);



router.get('/list_w', (req, res) => {
  res.sendFile(path.join(DIR, 'edit_profile.html'));
}
);


router.get('/list', async (req, res) => {
  try {
    const workers = await User.find({ des: 'worker' });
    res.json(workers);
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
}
);

router.get('/generateReport',async(req,res)=>{
    try {
      const surveys= await Survey.find({area_id:req.body.area_id});
      let numPreg=0
      let numLactating=0
      let numChildren=0
      let numaged=0

      for(let i=0;i<surveys.length;i++){
          if(surveys(i).pragnantWomen=="yes"){
            numPreg+=1;
          }

          if(surveys(i).Lactatingmother="yes"){
            numLactating+=1
          }

          if(surveys(i).children="yes"){
            numChildren+=1
          }

          if(surveys(i).aged="yes"){
            numaged+=1
          }
      }
      res.json({"pragnantWomen":numPreg,"Lactatingmother":numLactating,"children":numChildren,"aged":numaged})
    } catch (error) {
      
    }
})




module.exports = router;
