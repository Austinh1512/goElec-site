const passport = require("passport");
const User = require("../models/User");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const jwt = require("jsonwebtoken");

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.OAUTH_CLIENT_ID,
      clientSecret: process.env.OAUTH_CLIENT_SECRET,
      callbackURL: "/api/auth/google/callback",
      session: false,
    },
    async (googleAccessToken, googleRefreshToken, profile, done) => {
      try {
        const user = await User.findOne({ googleID: profile.id });

        if (!user) {
          const newUser = new User({
            displayName: profile.displayName,
            googleID: profile.id,
            email: profile.emails[0].value,
          });
          const accessToken = jwt.sign(
            { userID: newUser._id },
            process.env.JWT_ACCESS_TOKEN_SECRET,
            { expiresIn: "30s" }
          );
          const refreshToken = jwt.sign(
            { userID: newUser._id },
            process.env.JWT_REFRESH_TOKEN_SECRET,
            { expiresIn: "7d" }
          );
          newUser.refreshToken = refreshToken;
          await newUser.save();
          done(null, { newUser, refreshToken, accessToken });
        }
        const accessToken = jwt.sign(
          { userID: user._id },
          process.env.JWT_ACCESS_TOKEN_SECRET,
          { expiresIn: "30s" }
        );
        const refreshToken = jwt.sign(
          { userID: user._id },
          process.env.JWT_REFRESH_TOKEN_SECRET,
          { expiresIn: "7d" }
        );
        done(null, { user, refreshToken, accessToken });
      } catch (err) {
        console.error(err);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);
  done(null, user);
});
