function logar(){

    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if(login == "admin" && senha == "admin"){
        alert('Sucesso');
        location.href = "home.html";
    }else if(login =="mantegadoseupao" && senha == "arroz"){
        alert('Sucesso');
        location.href = "home.html"
    }
    else{
        alert('Usuario ou senha incorretos');


const usuarios = [
    {
        login: 'victor',
        pass: 'victor'
    },
    {
        login: 'julio',
        pass: 'julio'
    },
    {
        login: 'admin',
        pass: 'admin'
    }
]

let botao = document.getElementById('btnLogar')

botao.addEventListener('click', function logar(){

    let pegaUsuario = document.getElementById('usuario').value
    let pegaSenha = document.getElementById('senha').value

    for(let i in usuarios){

        if(pegaUsuario == usuarios[i].login){
            alert('ok')
            location.href = "arroz.html";
        }

    }

});