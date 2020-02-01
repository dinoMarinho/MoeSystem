// Criando uma conexão com o banco de dados e exportando
var mysql = require('mysql');

var conMysql = function(){
    return mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : '',
        database : 'moesystem'
    });
}

module.exports = function(){
    return conMysql;
}

