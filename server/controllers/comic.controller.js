var mysql = require("mysql");
var config = require("../helpers/config");
var conexion = mysql.createConnection(config);

module.exports.comicList = (req, res, next) => {
  var id = req.body.id;
  console.log(id);
  let sql = `SELECT titulo, autor, numero, imagen, idEditorial FROM Usuarios JOIN UsuariosComics on Usuarios.idUsuarios = UsuariosComics.idUsuarios JOIN Comics on UsuariosComics.idComics = Comics.idComics WHERE  Usuarios.idUsuarios = ?;`;
  conexion.query(sql, [id], (error, results, fields) => {
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
  var comics = req.body;
  let sql = `UPDATE Comics set titulo= ?, autor=?, numero=?, imagen=?, idEditorial=? WHERE idComics = ?;`;
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
module.exports.comicDelete = function(req, res, next) {
  let sql = `DELETE FROM Comics where idComics= ?`;
  conexion.query(sql, [req.params.id], (error, results, fields) => {
    if (error) {
      res.send(error);
    }
    res.json(results);
  });
};

module.exports.comictSave = (req, res, next) => {
  var comics = req.body;
  console.log(comics);

    let sql =
    "CALL NUEVO_COMIC(? ,?, ?, ? ,?);";
  conexion.query(
    sql,
    [
      comics.idUsuarios,
      comics.titulo,
      comics.autor,
      comics.numero,
      comics.idEditorial
    ],
    (error, results, fields) => {
      if (error) {
        console.log(error);
        res.send(error);
      }
      console.log(results[0]);
      console.log(results[0][0].ID);
      console.log(results[0][0].USER);
      let sql = "INSERT INTO `UsuariosComics`(`idUsuarios`, `idComics`, `cambio`) VALUES (?,?,?);"
      conexion.query(sql,[results[0][0].USER,results[0][0].ID,0],(error,results,fields) =>{
        if(error)
        {
          console.log(error)
        }
        results.json(results);
      });
    }
  );
};
