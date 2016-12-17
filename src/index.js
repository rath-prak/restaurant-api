import express from 'express';
import http from 'http'; // this is a object that let us create a server
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import config from './config';
import routes from './routes';

let app = express();
app.server = http.createServer(app);
// let PORT = process.env.PORT || 3000;

// middleware
// Parse application/json
app.use(bodyParser.json({
  limit: config.bodyLimit
}));

// passport config

// api routes v1
app.use('/v1', routes);


app.server.listen(config.port, function(){
  console.log(`Started on port ${app.server.address().port}`);
});

export default app;
