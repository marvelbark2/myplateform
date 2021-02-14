const router = require('express').Router();
const { Users } = require('../models/Users');

router.get(
  '/',
  (req, res) => {
    res.json({
      message: 'You made it to the secure route',
      user: req.user,
      token: req.query.secret_token
    });
  }
);

router.get('/profil', async (req, res, next) => {
  try {
    const profil = await Users.query().findById(req.user.user.id);
    res.json(profil);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
