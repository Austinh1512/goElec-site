const router = require("express").Router();
const passport = require("passport");

const CLIENT_URL = "http://localhost:5173";

router.get(
  "/",
  passport.authenticate("google", { scope: ["profile", "email"] })
);
router.get(
  "/callback",
  passport.authenticate("google", {
    failureRedirect: CLIENT_URL + "/login",
    failureMessage: "Login failed",
    session: false,
  }),
  (req, res) => {
    const { accessToken, refreshToken } = req.user;
    res.cookie("jwt", refreshToken, { maxAge: 1000 * 60 * 60 * 24 * 7 });
    res.cookie("accessToken", accessToken, { maxAge: 1000 * 30 });
    res.redirect(CLIENT_URL);
  }
);

module.exports = router;
