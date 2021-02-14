const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const passport = require('passport');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./config/swagger.json');

require('dotenv').config();

const middlewares = require('./middlewares');
const api = require('./api');
const auth = require('./api/auth');

const app = express();

app.use(passport.initialize());

require('./api/auth/config/auth');

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: 'API Page'
  });
});

app.use('/api/v1', passport.authenticate('jwt', { session: false }), api);
app.use('/api/auth', auth);
app.get('/docs', (_, res) => {
  const ros = app._router;
  res.json(ros);
});
app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;
