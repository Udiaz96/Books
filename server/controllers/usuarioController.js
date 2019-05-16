var controller = {};

controller.listaUsuarios = (req, res) => {
    let sql = 'SELECT  idUsuarios,usuario, correo, contrasena, I.nombre, apellidos,'+
    'edad, R.nombre AS rol from usuarios U' +
    ' INNER JOIN informacionpersonal I' +
    ' ON U.idInformacionPersonal = I.idInformacionPersonal'+
    ' INNER JOIN rol R ON U.idRol = R.idRol;'
    req.getConnection((err, conn) =>{
        conn.query(sql, (err, productos) =>{
            if(err){
                res.json(err);
            }
            res.json(productos);
        });
    });
};

controller.unUsuario = (req, res) =>{
    var id = req.params.id;
    let sql = 'SELECT usuario, correo, contrasena, I.nombre, apellidos,'+
    'edad, R.nombre AS rol from usuarios U' +
    ' INNER JOIN informacionpersonal I' +
    ' ON U.idInformacionPersonal = I.idInformacionPersonal'+
    ' INNER JOIN rol R ON U.idRol = R.idRol WHERE U.idUsuarios = ?;'
    req.getConnection((err, conn) =>{
        conn.query(sql, [id], (error, results) =>{
            if(error){
                res.send(error);
            }
            res.json(results);
        });
    });
};

controller.agregarUsuario = (req, res) =>{
    var Rusuario = req.body;
    let sql = 'CALL Registra_Usuario(?, ?, ?, ?, ?, ?, ?)';
    idRol = 2; //Agrego esto aqui porque me dije que el error era que faltaba el parametro. Es que aunque en el model user.ts se pone tomo tipo number, no se asigna en el formulario.
    req.getConnection((err, conn) =>{
        conn.query(sql,
            [Rusuario.nombre, Rusuario.apellidos, Rusuario.edad,Rusuario.usuario, Rusuario.correo, Rusuario.contrasena, idRol ],
            (error, results)=>{
            if(error){
                res.send(error);
            }
            res.json(results);
        });
    });
};

controller.updateUsuario = (req, res) =>{
    var usrAct = req.body;
    var id = req.params.id;
    let sql = 'CALL Actualiza_Usuario(?,?,?,?,?,?,?,?)';
    req.getConnection((err, conn) =>{
        conn.query(sql,
                    [id,usrAct.nombre, usrAct.apellidos, usrAct.edad,
                        usrAct.usuario, usrAct.correo, usrAct.contrasena, usrAct.idRol],
                        (error, results) =>{
                    if(error){
                        res.send(error);
                    }
                    res.json(results);
        });
    });
};

controller.eliminaUsuario = (req, res) =>{
  console.log(req.params);
    var id = req.params.id;
    let sql = 'CALL Elimina_Usuario(?)';
    req.getConnection((err, conn) =>{
        conn.query(sql, id, (err, results) =>{
            if(err){
                res.send(err);
            }
            res.json(results);
        });
    });
};

controller.authUsuario = (req,res) => {

  var usuario = req.body.user;
  var password = req.body.password;

  var sql = 'CALL AUTH(?,?);';
  console.log(usuario,password);

  req.getConnection((err,conn) =>{
    conn.query(sql,[usuario,password],(error,results) =>{
      if(err)
      {
        res.send(error);
      }
      res.json(results);
    });
  });

}
module.exports = controller;
