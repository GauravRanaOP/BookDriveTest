module.exports = (req, res, next) => {
  if (req.session.userId) {
    return res.redirect("/dashboard"); // if user logged in, redirect to home page
  }
  next();
};
