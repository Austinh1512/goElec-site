const passport = require("passport");
const User = require("../models/User");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.OAUTH_CLIENT_ID,
      clientSecret: process.env.OAUTH_CLIENT_SECRET,
      callbackURL: "/api/auth/google/callback",
      session: false,
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const user = await User.findOne({ googleID: profile.id });

        if (!user) {
          const newUser = new User({
            displayName: profile.displayName,
            googleID: profile.id,
            email: profile.emails[0].value,
          });
          done(null, newUser);
        }
      } catch (err) {
        console.error(err);
      }
    }
  )
);
