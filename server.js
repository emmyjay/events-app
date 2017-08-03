const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const cors = require('cors');

const config = require('./server/config');

mongoose.connect(config.MONGO_URL);
const monDb = mongoose.connection;


monDb.on('error', function () {
  console.error('MongoDB Connection Error. Please make sure that', config.MONGO_URL, 'is running.');
});

monDb.once('open', function callback () {
   console.info('Connected to MongoDB:', config.MONGO_URL);
});


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(cors());


const port = process.env.PORT || '8083';
app.set('port', port);

// Set static path to Angualar App in dist
// Don't run in dev
if (process.env.NODE_ENV !== 'dev') {
    app.use('/', express.static(path.join(__dirname, './dist')));
}

require('./server/api') (app, config);

// Pass routing to Angular app
// Don't run in dev
if (process.env.NODE_ENV !== 'dev') {
  app.get('*', function(req, res) {
      res.sendFile(path.join(__dirname, '/dist/index.html'));
  });
}

app.listen(port, () => console.log(`Server running on localhost:${port}`));