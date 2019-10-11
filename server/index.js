const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('express-jwt');
const jwks = require('jwks-rsa');
require('dotenv').config();

const app = express();
const privateBattles = require('./data/private');
const publicBattles = require('./data/public');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const authCheck = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`,
  }),
  // This is the identifier we set when we created the API
  audience: `${process.env.API_AUDIENCE}`,
  issuer: `https://${process.env.AUTH0_DOMAIN}/`,
  algorithms: ['RS256'],
});

app.get('/api/battles/public', (req, res) => {
  res.json(publicBattles);
});

app.get('/api/battles/private', authCheck, (req, res) => {
  res.json(privateBattles);
});

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening on http://localhost:${process.env.PORT}`);
});
