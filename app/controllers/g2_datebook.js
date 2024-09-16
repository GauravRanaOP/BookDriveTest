const aptdata = require("../models/AppointmentInfo.js");

module.exports = async (req, res) => {
  try {
    const dateprovided = req.query.date;
    const data = await aptdata.find({ date: dateprovided });
    const times = [];

    data.map((doc) => {
      if (doc.isTimeSlotAvailable) {
        times.push(doc.time);
      }
    });
    res.json(times);
  } catch (error) {
    // Handle errors
    console.error(error);
    // Send a 500 Internal Server Error response
    res.status(500).send("Internal Server Error");
  }
};