const mongoose = require('mongoose');
const { Schema } = mongoose;

const areaSchema = new Schema({
    area_id: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  district: {
    type: String,
    required: true
  },
  circle: {
    type: String,
    required: true
  },

});

const Area = mongoose.model('area', areaSchema);

module.exports = Area;