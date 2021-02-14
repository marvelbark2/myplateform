/* eslint-disable consistent-return */
const router = require('express').Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const path = require('path');

require('dotenv').config({ path: path.join(path.dirname(require.main.filename), '..', '.env') });

router.post(
  '/signup',
  passport.authenticate('signup', { session: false }),
  async (req, res) => {
    res.json({
      message: 'Signup successful',
      user: req.user
    });
  }
);

router.post(
  '/login',
  async (req, res, next) => {
    passport.authenticate(
      'login',
      async (err, user, info) => {
        try {
          if (!user) {
            res.status(200).json({
              info: {
                success: false,
                error: 'Auth is failed'
              }
            });
          }

          if (err) {
            next(err);
          }
          req.login(
            user,
            { session: false },
            async (error) => {
              if (error) next(error);
              const body = await user.getResObj();
              const token = jwt.sign({ user: body }, process.env.JToken);
              res.json({ token, info });
            }
          );
        } catch (error) {
          next(error);
        }
      }
    )(req, res, next);
  }
);

module.exports = router;
