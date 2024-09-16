const g2data = require("../models/G2PersonalInfo");
const examinerReport = require("../models/ExaminerReport");

module.exports = async (req, res) => {
    // console.log(req.session);
    try {
        const userdetails = await g2data.find({ appointmentid: { $ne: null } }).populate('appointmentid');
        const reports = await examinerReport.find();

        const details = userdetails.filter(userdetail => {
            return !reports.some(report => userdetail._id.equals(report.userid));
            })
        if (details && details.length > 0) {
            res.render("examiner", { details });
        } else {
            res.render("examiner", { details: null });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
};
