const express = require('express');
const QCtrl = require('../controllers/QuotesCtrl');

const router = express.Router();

router.route('/')
  .get(QCtrl.getListQuotes)
  .post(QCtrl.addQuotes);

router.route('/:id')
  .get(QCtrl.showQuote);

router.put('/:id', (req, res) => {
  res.json({
    success: true,
    message: `Editing Quote where id is ${req.params.id}`,
  });
});

router.delete('/:id', (req, res) => {
  res.json({
    success: true,
    message: `Deleting Quote where id is ${req.params.id}`,
  });
});

module.exports = router;
