const mongoose = require("mongoose");
var uniqueValidator = require('mongoose-unique-validator');
const bcrypt = require("bcrypt");

const g2data = new mongoose.Schema({
  firstName: {
    type: String,
    default: "Default",
  },
  lastName: {
    type: String,
    default: "Default",
  },
  licenseNo: {
    type: String,
    default: "Default",
  },
  username: {
    type: String,
    unique: true,
    // required: true,
  },
  password: {
    type: String,
    // required: true,
  },
  userType: {
    type: String,
    // requried: true,
  },
  age: {
    type: Number,
    default: 0,
  },
  dob: {
    type: Date,
    default: Date.now,
  },
  fees: {
    type: String,
    default: "$106",
  },
  car_details: {
    make: {
      type: String,
      default: "Default",
    },
    model: {
      type: String,
      default: "Default",
    },
    year: {
      type: Number,
      default: 0,
    },
    platNo: {
      type: String,
      default: "Default",
    },
  },
  appointmentid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'appointmentInfo',
    default:null,
    },
});

g2data.plugin(uniqueValidator);

// g2data.pre("save", function (next) {
//   const details = this;
//   bcrypt.hash(details.licenseNo, 10, (error, hash) => {
//     details.licenseNo = hash;
//     bcrypt.hash(details.password, 10, (error, hash) => {
//       details.password = hash;
//       next();
//     });
//   });
// });

const g2schema = mongoose.model("g2_personal", g2data);
module.exports = g2schema;
