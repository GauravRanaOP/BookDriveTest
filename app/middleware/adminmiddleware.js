const g2_info = require("../models/G2PersonalInfo");

module.exports = async (req, res, next) => {
  try {
    // const details = await g2_info.findById(req.session.userId);
    const usertype = req.session.userType;
    if (usertype !== "Admin") {
      return res.redirect("/");
    }
    next();
  } catch (error) {
    console.error("Error:", error);
    return res.redirect("/");
  }
};
