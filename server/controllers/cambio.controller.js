var mysql = require("mysql");
var config = require("../helpers/config");
var conexion = mysql.createConnection(config);

module.exports.cambio = (req, res, next) => {
  var cambio = req.body;
  let sql = `CALL cambioComic(?,?,?,?,?)`;
  conexion.query(
    sql,
    [cambio.idUsuarios, cambio.idUsuarios, cambio.idComics, cambio.idComics],
    (error, results, fields) => {
      if (error) res.send(error);
      res.json(results);
    }
  );
};

module.exports.cambioLista = (req, res, next) => {
  let sql = `CALLL cambioLista()`;
  conexion.query(sql, (error, results, fields) => {
    if (error) res.send(error);
    res.json(results);
  });
};
