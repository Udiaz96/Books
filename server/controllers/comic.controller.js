var mysql = require("mysql");
var config = require("../helpers/config");
var conexion = mysql.createConnection(config);

module.exports.comicList = (req, res, next) => {
  let sql = `SELECT titulo, autor, numero, imagen, idEditorial FROM Usuarios JOIN UsuariosComics on Usuarios.idUsuarios = UsuariosComics.idUsuarios JOIN Comics on UsuariosComics.idComics = Comics.idComics WHERE  Usuarios.idUsuarios = ?;`;
  conexion.query(sql, [req.params.id], (error, results, fields) => {
    if (error) res.send(error);
    res.json(results);
  });
};
module.exports.comic = (req, res, next) => {
  var comics = req.body;
  let sql = `SELECT titulo, autor, numero, imagen, idEditorial FROM Usuarios JOIN UsuariosComics on Usuarios.idUsuarios = UsuariosComics.idUsuarios
  join Comics on UsuariosComics.idComics = Comics.idComics WHERE  Comics.titulo = ? and Usuarios.idUsuarios = ?;`;
  conexion.query(
    sql,
    [comics.titulo, comics.idUsuarios],
    (error, results, fields) => {
      if (error) res.send(error);
      res.json(results);
    }
  );
};
module.exports.comicUpdate = (req, res, next) => {
  var products = req.body;
  let sql = `UPDATE products set productName= ?, productLine=?,
  productScale=?, productVendor=?, productDescription=?, quantityInStock=?,
  buyPrice=?, MSRP=? WHERE productCode= ?`;
  conexion.query(
    sql,
    [
      products.productName,
      products.productLine,
      products.productScale,
      products.productVendor,
      products.productDescription,
      products.quantityInStock,
      products.buyPrice,
      products.MSRP,
      products.productCode
    ],
    (error, results, fields) => {
      if (error) {
        res.send(error);
      }
      res.json(results);
    }
  );
};
module.exports.comicDelete = function(req, res, next) {
  let sql = `DELETE from Comics where idComics= ?`;
  conexion.query(sql, [req.params.id], (error, results, fields) => {
    if (error) {
      res.send(error);
    }
    res.json(results);
  });
};

module.exports.productSave = (req, res, next) => {
  var comics = req.body;
  let sql =
    "INSERT into products(productCode, productName, productLine, productScale, productVendor, productDescription, quantityInStock, buyPrice, MSRP) values (?, ?, ?, ?, ?, ?, ?, ?, ?)";
  conexion.query(
    sql,
    [
      comics.titulo,
      comics.autor,
      comics.numero,
      comics.imagen,
      comics.idEditorial
    ],
    (error, results, fields) => {
      if (error) {
        res.send(error);
      }
      res.json(results);
    }
  );
};
