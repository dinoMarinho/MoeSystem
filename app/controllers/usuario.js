module.exports.cadastro = function(application,req,res){
    res.render('pages/cadastro');
}

module.exports.login = function(application,req,res){
    res.render('forms/login');
}

module.exports.registraUsuario = function(application,req,res){
    // var connection = application.config.dbConnection();
    var connection = '';
    var usuarioModel = new application.app.models.UsuarioDAO(connection);

    // Chama a função do Model getNoticias
    usuarioModel.cadastroUsuario(function(error,result){
        res.render('noticias/noticias', {noticias : result});
    });
}