
/* var id = document.getElementById('id');
var nome = document.getElementById('nome');
var idade = document.getElementById('idade');
var email = document.getElementById('email');
var senha = document.getElementById('senha');

var senha = document.getElementById('status');
*/

var nedb = require('nedb');
var db = new nedb({filename: 'banco.db', autoload: true});

var usuario = {
	nome: "Pedro Henrique",
	idade: 18,
	email: "pedro@gmail.com",
	senha: 123456789
};


db.insert(usuario, function(err){
	if(err)return console.log(err); //caso ocorrer algum erro
   
	console.log("Novo usuário adicionado!");
   });

  