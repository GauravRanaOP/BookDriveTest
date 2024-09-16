module.exports = async (req, res) => {
  res.render("signup" ,{
    errors: req.flash('validationErrors')
    });
};
