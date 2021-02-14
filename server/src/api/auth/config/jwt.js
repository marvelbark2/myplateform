const JWTstrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;
const passport = require('passport');
const path = require('path');

require('dotenv').config({ path: path.join(path.dirname(require.main.filename), '..', '.env') });

passport.use(
  new JWTstrategy(
    {
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JToken,
    },
    // eslint-disable-next-line consistent-return
    async (token, done) => {
      try {
        return done(null, token);
      } catch (error) {
        done(error, 'Private Page');
      }
    }
  )
);
