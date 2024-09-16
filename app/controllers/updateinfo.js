const g2data = require("../models/G2PersonalInfo.js");


module.exports =  async (req, res) => {
    // console.log(req.params._id);
    let id = req.params._id;
    const g2_car_details = await g2data.findById(id);
  
    g2_car_details.car_details.make = req.body.make;
    g2_car_details.car_details.model = req.body.model;
    g2_car_details.car_details.year = req.body.year;
    g2_car_details.car_details.platNo = req.body.platNo;
  
    const g2_info = await g2_car_details.save();
  
    res.render("g_page", { g2_info });
  };
  