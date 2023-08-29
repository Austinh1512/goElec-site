const router = require("express").Router();
const {
  handleLogin,
  handleRefresh,
  handleRegister,
} = require("../../controllers/auth");

router.get("/refresh", handleRefresh);

router.post("/login", handleLogin);

router.post("/register", handleRegister);

module.exports = router;
