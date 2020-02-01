module.exports = function(application){
    application.get('/cadastro',function(req,res){
        application.app.controllers.usuario.cadastro(application,req,res);
    });

    application.get('/login',function(req,res){
        application.app.controllers.usuario.login(application,req,res);
    });

}