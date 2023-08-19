const jwt = require("jsonwebtoken");
const User = require("../models/User");

module.exports.handleRefresh = async (req, res) => {
  const token = req.cookies["jwt"];

  if (!token) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const decoded = jwt.verify(token, process.env.JWT_REFRESH_TOKEN_SECRET);
  const user = await User.findById(decoded.userID);

  if (!user) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const accessToken = jwt.sign(
    { userID: user._id },
    process.env.JWT_ACCESS_TOKEN_SECRET,
    { expiresIn: "30s" }
  );
  res.status(200).json({ userID: user._id, accessToken });
};
