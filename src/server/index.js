const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
var webpack = require('webpack');
var webpackConfig = require('./../../webpack.config');
var compiler = webpack(webpackConfig);

const tables = require('./tables/routes');
const cards = require('./cards/routes');

const app = express();

// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/../../dist'));

app.use(require("webpack-dev-middleware")(compiler, {
    noInfo: true, publicPath: webpackConfig.output.publicPath
}));
app.use(require("webpack-hot-middleware")(compiler));

const port = process.env.PORT || 8080;

app.use('/api/cards', cards);
app.use('/api/tables', tables);

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../../dist/', 'index.html'))
});

// START THE SERVER
app.listen(port);
console.log('Magic happens on port ' + port);
