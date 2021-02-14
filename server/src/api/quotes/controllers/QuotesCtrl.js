const responseHandler = require('../../../helpers/resHandler');
const { QuotesModel } = require('../Models/QuotesModel');

exports.getListQuotes = async (req, res, next) => {
  try {
    const quotes = await QuotesModel.query().withGraphFetched(
      '[actor, show]',
    );
    responseHandler.responseHandler(req, res, quotes, 'data');
  } catch (error) {
    next(error);
  }
};

exports.addQuotes = async (req, res, next) => {
  try {
    const quote = req.body;
    const quoteSaved = await QuotesModel.query().insert(quote);
    responseHandler.responseHandler(req, res, quoteSaved, 'data');
  } catch (error) {
    next(error);
  }
};

exports.showQuote = async (req, res, next) => {
  try {
    const quoteAsked = await QuotesModel.query()
      .withGraphFetched('[actor, show]')
      .findById(req.params.id);
    responseHandler.responseHandler(req, res, quoteAsked, 'data');
  } catch (error) {
    next(error);
  }
};
