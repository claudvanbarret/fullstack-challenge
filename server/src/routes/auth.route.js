const router = require("express").Router();
const passport = require("passport");
const { auth } = require("../middlewares/auth.middleware");

/**
 * @desc Auth with github
 */
router.get("/github", passport.authenticate("github"));

/**
 * @desc Github auth callback
 */
router.get(
  "/github/callback",
  passport.authenticate("github", { failureRedirect: process.env.APP_LOGIN_URL }),
  (req, res) =>
    // Successful authentication, redirect home.
    res.redirect(process.env.APP_HOME_URL)
);

/**
 * @desc Logout user
 */
router.get("/logout", (req, res) => {
  req.logout();
  req.session.destroy();
  res.end();
});

/**
 * @desc Get user logged
 */
router.get("/user", (req, res) => {
  res.status(200).json({ data: req.user });
});

module.exports = router;
