function logar(){

    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if(login == "admin" && senha == "admin"){
        alert('Sucesso');
        location.href = "arroz.html";
    }else if(login == "Mantega" && senha == "1234"){
        alert('Sucesso')
        location.href = "./src/html/pag-1.html"

    }else{
        alert('Usuario ou senha incorretos');
    }

}