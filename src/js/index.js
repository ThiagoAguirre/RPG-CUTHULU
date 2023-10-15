function logar(){

    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if(login == "123" && senha == "123"){
        alert(`Bem vindo ${login} a ORDEM`);
        location.href = "./src/cesar/index.html";
    }else if(login == "222" && senha == "222"){
        alert(`Bem vindo ${login} a ORDEM`)
        location.href = "./src/matrix/home.html"
    }else if(login == "arrozdamamae" && senha == "9y4s2da7"){
        alert(`Bem vindo ${login} a ORDEM`)
        location.href = "./src/arroz/index.html";
    }else{
        alert('Usuario ou senha incorretos');
    }

}

