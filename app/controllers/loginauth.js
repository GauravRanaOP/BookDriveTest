const g2data = require("../models/G2PersonalInfo.js");
const bcrypt = require("bcrypt");

module.exports = async (req, res) => {
  try {
    const g2_info = await g2data.findOne({ username: req.body.username });
    if (g2_info) {
      const same = await bcrypt.compare(req.body.password, g2_info.password);
      if (same) {
        req.session.userId = g2_info._id;
        // if(g2_info.userType == "Driver"){
          req.session.userType = g2_info.userType;
        // }
        // if passwords match
        // store user session, will talk about it later
        res.redirect("/dashboard");
      } else {
        res.redirect("/login");
      }
    } else {
      res.redirect("/register");
    }
  } catch (error) {
    // Handle the error appropriately
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};
