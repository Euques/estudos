var funcionarios = 
    {
        "Marconildo":
        {
            "url": "http://www.marconildo.com.br/",
            "idade": 34
        },
        "Joanorta":
        {
            "url": "http://www.joanorta.com.br/",
            "idade": 22
        },
        "Estripafurgia":
        {
            "url": "http://www.estripafurgia.com.br/",
            "idade": 47
        }
    };
 

var funcionario = JSON.parse(funcionarios);
 
function funciona(){
    alert(funcionario.Marconildo);
    alert(funcionario.Marconildo.idade);
}
