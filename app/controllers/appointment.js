module.exports = (req, res) => {
    // console.log(req.session);
    res.render("appointment", { times: null, dateprovided: null});
  };
  