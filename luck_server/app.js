const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const index = require('./routes/index')

var server = express();
// cors跨域
server.use(cors({
  origin:'http://localhost:8080',
  credentials:true
}))
server.listen(8787);

server.use(bodyParser.urlencoded({extended:false}));

server.use(express.static('public'));

server.use('/index',index);