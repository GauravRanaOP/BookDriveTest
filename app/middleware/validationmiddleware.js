module.exports = (req, res, next) => {
  if (req.body.password != req.body.confirmpassword) {
    return res.redirect("/register");
  }
  next();
};
