const g2data = require("../models/G2PersonalInfo");

module.exports = async (req, res) => {
  let id = req.session.userId;
  let submitrequest;
  // console.log(req.session);
  if (id) {
    submitrequest = true;
  }
  const g2_info = await g2data.findById(id);
  // console.log("G2 Details: " + g2_info);
  if (g2_info && g2_info.firstName != "Default") {
    res.render("g_page", { g2_info });
  } else {
    res.render("g_page", { g2_info: null, submitrequest });
  }
};
