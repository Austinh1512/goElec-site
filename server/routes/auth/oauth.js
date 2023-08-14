const router = require("express").Router();
const passport = require("passport");

const CLIENT_URL = "http://localhost:5173";

router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);
router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: CLIENT_URL,
    failureRedirect: CLIENT_URL + "/login",
  }),
  (req, res) => {
    console.log(req.user);
    res.sendStatus(200);
  }
);

module.exports = router;
