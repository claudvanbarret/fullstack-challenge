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
        const { displayName, photos, emails } = profile;

        const image = photos && photos.length ? profile.photos[0]?.value : null;
        const email = emails && emails.length ? emails[0].value : null;

        const newUser = {
          name: displayName,
          image: image,
          email: email,
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
