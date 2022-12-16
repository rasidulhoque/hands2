const mongoose = require('mongoose');
const { Schema } = mongoose;

const surveySchema = new Schema({
    area_id: {
    type: String,
    required: true,
    unique: true
  },
  hno: {
    type: Number,
    required: true
  },
  pragnantWomen: {
    type: String
  },
  pname: {
    type: String
  },
  page: {
    type: String
  },
  pweight: {
    type: String
  },
  p_rec_govt: {
    type: String
  },
  p_rec_per_med: {
    type: String
  },
  husname: {
    type: String
  },
  p_ph: {
    type: Number,
    unique: true
  },
  p_month: {
    type: String,
  },
  Lactatingmother: {
    type: String,
  },
  L_name: {
    type: String,
  },
  l_age: {
    type: String,
  },
  l_weight: {
    type: String,
  },
  l_month: {
    type: String,
  },
  l_rec_food: {
    type: String,
  },
  l_rec_med: {
    type: String,
  },
  children: {
    type: String,
  },
  c_name: {
    type: String,
  },
  c_age: {
    type: String,
  },
  c_height: {
    type: String,
  },
  c_weight: {
    type: String,
  },
  goesto: {
    type: String,
  },
  c_rec_vacc: {
    type: String,
  },
  c_rec_med: {
    type: String,
  },
  aged: {
    type: String,
  },
  aged_name: {
    type: String,
  },
  aged_age: {
    type: String,
  },
  a_rec_med: {
    type: String,
  },
  l_month: {
    type: String,
  },

});

const Survey = mongoose.model('survey', surveySchema);

module.exports = Survey;