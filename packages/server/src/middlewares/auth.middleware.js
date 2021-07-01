module.exports = {
  auth: function (req, res, next) {
    if (req.user) {
      return next();
    } else {
      return res.status(401).send({ message: "UNAUTHORIZED" });
    }
  }
};
