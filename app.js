let amigos = [];


function adicionarAmigo(){
    let imputAmigo = document.querySelector('#amigo');
    let nomeAmigo = imputAmigo.value.trim();

    if (nomeAmigo === "") {
        alert("Por favor, insira um nome.");
    } else{
        amigos.push(nomeAmigo);
        imputAmigo.value = "";
        atualizarListaAmigos();
    }
}

function atualizarListaAmigos(){
    let listaAmigos = document.querySelector('#listaAmigos');
     listaAmigos.innerHTML = "";

  amigos.forEach(function (amigo, index) {
    let li = document.createElement('li');
    li.textContent = amigo;
    listaAmigos.appendChild(li); }
    );
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Nome invalido, adicione um nome valido.");
        return;
    }

    let nomeAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[nomeAleatorio];

    let resultado = document.querySelector('#resultado');
    resultado.innerHTML = `O amigo sorteado e: <strong>${amigoSorteado}</strong>`;
}

















