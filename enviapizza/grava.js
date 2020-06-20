
function grava(){
    
var nomepizza = document.getElementById('form05-quantadae').value;
var precopizza = document.getElementById('form05-r-preo').value;
var descpizza = document.getElementById('form05-descrio').value;
var fotopizza = document.getElementById('form05-foto').value;

var status = document.getElementById('status');


var nedb = require('nedb');
var db = new nedb({filename: 'banco.db', autoload: true});

var pizza = {
	nome: nomepizza,
	preco: precopizza,
	email: descpizza,
	foto: fotopizza
};


    db.insert(pizza, function(err){
        if(err)return console.log(err); //caso ocorrer algum erro
       
        status.innerHTML = "Deu Certo essa porra";
       });

}
