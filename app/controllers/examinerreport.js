const examinerData = require("../models/ExaminerReport.js");
const aptdata = require("../models/AppointmentInfo.js");

module.exports = async (req, res) => {
  try {
    let id = req.params._id;  
    // const { com, res } = req.body;
    const com = req.body.comments;
    const result = req.body.result
       

        const examinerReport = await examinerData.create({
            comments: com,
            result: result,
            userid: id
        });

  
    res.redirect("/examiner");

  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};
