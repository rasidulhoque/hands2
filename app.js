var express = require('express');
var path = require('path');

var authRouter = require('./routes/auth');
var adminRouter = require('./routes/admin');
var workerRouter = require('./routes/worker');
var cookieParser = require('cookie-parser');
var app = express();
const connectToMongo = require('./db');
connectToMongo();

require("dotenv").config();

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', authRouter);
app.use('/admin', adminRouter);
app.use('/worker', workerRouter);



app.listen(4000, () => {
  console.log('Connected')
})