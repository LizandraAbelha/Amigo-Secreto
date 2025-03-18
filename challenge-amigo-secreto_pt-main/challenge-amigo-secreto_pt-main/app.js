//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim(); 

    if (nome === "") {
        alert("Digite um nome válido!");
        return;
    }

    if (amigos.includes(nome)) {
        alert("Esse nome já foi adicionado!");
        return;
    }

    amigos.push(nome);
    input.value = ""; 
    atualizarLista(); 
}

function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; 

    amigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function removerAmigo(index) {
    amigos.splice(index, 1); 
    atualizarLista(); 
}

function limparLista() {
    amigos = []; 
    atualizarLista(); 
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos 2 amigos para sortear!");
        return;
    }

    const vencedor = amigos[Math.floor(Math.random() * amigos.length)];
    const listaResultado = document.getElementById("resultado");
    listaResultado.innerHTML = `<li> O vencedor é: <strong>${vencedor}</strong> </li>`;
}

function exibirResultado(resultado) {
    const listaResultado = document.getElementById("resultado");
    listaResultado.innerHTML = ""; 

    resultado.forEach((par) => {
        const li = document.createElement("li");
        li.textContent = par;
        listaResultado.appendChild(li);
    });
}