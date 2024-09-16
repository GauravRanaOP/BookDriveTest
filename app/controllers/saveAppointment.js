const aptdata = require("../models/AppointmentInfo.js");
const path = require("path");

module.exports = async (req, res) => {
  try {
    // console.log(req.body);
    
    await aptdata.create(req.body);
    res.redirect("/");
  } catch (error) {
    // Handle the error appropriately
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};
