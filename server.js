const express = require('express');
const morgan = require('morgan');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const http = require('http');
const path = require('path');

const config = require('./webpack.config.js');
const compiler = webpack(config);

const app = express();
app.use(morgan('tiny'));
app.use('/', express.static(path.join(__dirname, 'public')));
app.use(webpackDevMiddleware(compiler, { publicPath: config.output.publicPath }));

const server = http.createServer(app);
server.listen(process.env.PORT || 3000);
server.on('listening', onListening);

// Event listener for HTTP server "listening" event.
function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
    console.log('Listening on ' + bind);
}