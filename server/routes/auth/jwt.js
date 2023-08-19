const router = require("express").Router();
const { handleRefresh } = require("../../controllers/auth");

router.get("/refresh", handleRefresh);

module.exports = router;
