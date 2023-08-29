const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
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

module.exports.handleLogin = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    return res.status(404).json({ error: "Incorrect credentials." });
  }

  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    return res.status(401).json({ error: "Incorrect credentials." });
  }

  const refreshToken = jwt.sign(
    { userID: user._id },
    process.env.JWT_REFRESH_TOKEN_SECRET,
    { expiresIn: "7d" }
  );
  user.refreshToken = refreshToken;
  const accessToken = jwt.sign(
    { userID: user._id },
    process.env.JWT_ACCESS_TOKEN_SECRET,
    { expiresIn: "30s" }
  );
  res.cookie("jwt", refreshToken, { maxAge: 1000 * 60 * 60 * 24 * 7 });
  res.cookie("accessToken", accessToken, { maxAge: 1000 * 30 });
  res.status(200).json({ userID: user._id });
};

module.exports.handleRegister = async (req, res) => {
  const { email, displayName, password } = req.body;
  const user = new User({ email, displayName });
  const saltRounds = 10;
  const hash = await bcrypt.hash(password, saltRounds);
  user.password = hash;
  const refreshToken = jwt.sign(
    { userID: user._id },
    process.env.JWT_REFRESH_TOKEN_SECRET,
    { expiresIn: "7d" }
  );
  user.refreshToken = refreshToken;
  const accessToken = jwt.sign(
    { userID: user._id },
    process.env.JWT_ACCESS_TOKEN_SECRET,
    { expiresIn: "30s" }
  );
  res.cookie("jwt", refreshToken, { maxAge: 1000 * 60 * 60 * 24 * 7 });
  res.cookie("accessToken", accessToken, { maxAge: 1000 * 30 });
  await user.save();
  res.status(200).json({ userID: user._id });
};
