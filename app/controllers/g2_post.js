const g2data = require("../models/G2PersonalInfo.js");
const aptdata = require("../models/AppointmentInfo.js");

module.exports = async (req, res) => {
  try {
    // console.log(req.body);

    let id = req.session.userId;
    const g2_car_details = await g2data.findById(id);

    g2_car_details.firstName = req.body.firstName;
    g2_car_details.lastName = req.body.lastName;
    g2_car_details.licenseNo = req.body.licenseNo;
    g2_car_details.age = req.body.age;
    g2_car_details.dob = req.body.dob;
    g2_car_details.car_details.make = req.body.make;
    g2_car_details.car_details.model = req.body.model;
    g2_car_details.car_details.year = req.body.year;
    g2_car_details.car_details.platNo = req.body.platNo;

    if (req.body.date && req.body.appointmentTime) {
      const date = req.body.date;
      const time = req.body.appointmentTime;

      const appointmentData = await aptdata.findOne({ date, time });
      if (appointmentData) {
        appointmentData.isTimeSlotAvailable = false;
        await appointmentData.save();
      }
    g2_car_details.appointmentid = appointmentData._id;
    }

    await g2_car_details.save();

    // await g2data.create(req.body);
    res.redirect("/g_page");
  } catch (error) {
    // Handle the error appropriately
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};
