const GitHubStrategy = require("passport-github").Strategy;

const { User } = require("../models");

module.exports = function (passport) {
  passport.use(
    new GitHubStrategy(
      {
        clientID: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET,
        callbackURL: process.env.GITHUB_CALLBACK_URL
      },
      async (accessToken, refreshToken, profile, done) => {
        const newUser = {
          name: profile.displayName,
          image: profile.photos[0]?.value,
          email: profile.emails[0]?.value,
          githubId: profile.id
        };

        try {
          let user = await User.findOne({ where: { githubId: profile.id } });

          // If not found. Create a new user
          if (!user) user = await User.create(newUser);

          done(null, user);
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
    const user = await User.findByPk(id, { raw: true });
    done(null, user);
  });
};
