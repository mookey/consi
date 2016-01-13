const express = require('express');
const app = express();

require('babel-core/register');

global.root = __dirname;
global.env = require(global.root + '/server/env.js');

require(global.env.server + 'config.js')(app);
require(global.env.server + 'router.js')(app);
require(global.env.server + 'errors.js')(app);

app.listen(global.conf.PORT);