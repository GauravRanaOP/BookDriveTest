const mongoose = require("mongoose");

const aptdata = new mongoose.Schema({
  date: {
    type: String,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  isTimeSlotAvailable: {
    type: Boolean,
    default: true
  }
});

const aptschema = mongoose.model("appointmentInfo", aptdata);
module.exports = aptschema;
