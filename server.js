const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const usuarios = require("./server/routes/usuarios");
const port = 3000;
const app = express();

var mysql = require('mysql');
var myConnection = require('express-myconnection');
app.use(myConnection(mysql, {
  /*host: 'localhost',
  user: 'root',
  password : '',
  port: 3306,
  database: 'comics'*/

  host: 'localhost',
  user: 'root',
  password : 'root',
  port: 8889,
  database: 'comics'
}, 'single'));

app.use(express.static(path.join(__dirname, 'dist')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/api', usuarios);
app.get("*", (req, res) => {
res.sendFile(path.join(__dirname,'dist/index.html'));
});
app.listen(port, () =>{
console.log("Server listen at " + port + " port");
});
