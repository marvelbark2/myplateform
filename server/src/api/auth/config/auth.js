const passport = require('passport');

const LocalStrategy = require('passport-local').Strategy;
const { Users } = require('../../users/models/Users');

passport.use(
  'signup',
  new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
    },
    // eslint-disable-next-line consistent-return
    async (email, password, done) => {
      try {
        const user = await Users.query().insert({
          email,
          password,
        });

        return done(null, user);
      } catch (error) {
        done(error, error.message);
      }
    },
  ),
);

passport.use(
  'login',
  new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
    },
    async (email, password, done) => {
      try {
        const user = await Users.query().where('email', email).limit(1);

        if (!user) {
          return done(null, false, { message: 'User not found' });
        }

        const validate = await user[0].isValidPassword(password);

        if (!validate) {
          return done(null, false, { message: 'Wrong Password' });
        }

        return done(null, user[0], {
          success: true,
          message: 'Logged in Successfully',
        });
      } catch (error) {
        return done(error);
      }
    },
  ),
);

require('./jwt');
