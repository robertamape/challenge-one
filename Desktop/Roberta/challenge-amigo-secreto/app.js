let inputNomeAmigo = document.getElementById('amigo');
let listaAmigos = document.getElementById('listaAmigos');
let resultado = document.getElementById('resultado');
let arrayAmigos = [];
let li = '';
let ul = '<ul>';
let indice = 0;

inputNomeAmigo.focus();


function adicionarAmigo() {
    let nome = inputNomeAmigo.value.trim();
    if (nome !== '') {
        arrayAmigos.push(nome);
        li = `<li>${arrayAmigos[indice]}</li>`;
        ul += li;
        listaAmigos.innerHTML = ul;
        inputNomeAmigo.value = '';
        indice += 1;
        inputNomeAmigo.focus();
        resultado.innerHTML = '';
    } else {
        inputNomeAmigo.focus();
        alert("Insira um nome válido!"); 
    }
}

function sortearAmigo() {
    if (arrayAmigos.length >= 1) {
        let amigoSorteado = arrayAmigos[Math.floor(Math.random() * arrayAmigos.length)];
        resultado.innerHTML = `O amigo sorteado foi: ${amigoSorteado}`;
        li = '';
        ul = '<ul></ul>';
        listaAmigos.innerHTML = ul;
        arrayAmigos.length = 0;
        indice = 0;
    } else {
        alert("Não há pessoas para o sorteio!"); 
}
}