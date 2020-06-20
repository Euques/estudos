var nedb = require('nedb');
var db = new nedb({filename: 'banco.db', autoload: true});

var usuario = {
	nome: "Pedro Henrique",
	idade: 18,
	email: "pedro@gmail.com",
	senha: 123456789
};

function salva(){
db.insert(usuario, function(err){
    if(err)return console.log(err); //caso ocorrer algum erro
   
    console.log("Novo usuário adicionado!");
   });
}  

function mostra(){

db.find({ nome: 'Pedro Henrique' }, function (err, usuarios) {
 if(err)return console.log(err);
 console.log(usuarios);
});   

}
