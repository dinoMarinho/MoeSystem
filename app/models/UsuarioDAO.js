function UsuarioDAO(connection){
    this._connection = connection;
}

UsuarioDAO.prototype.cadastroUsuario = function(){
    console.log('entrou aqui');
}

module.exports = function(){
    return UsuarioDAO;
}