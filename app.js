let amigos = [];

function adicionarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nome = inputAmigo.value.trim();

    if (nome === ''){
        alert('Por favor, digite um nome válido');
        return;
    }

    amigos.push(nome);

    atualizarListaAmigos();

    inputAmigo.value = '';
    inputAmigo.focus();

    limparResultado();
}

function atualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

    amigos.forEach((amigos, index) => {
        const li = document.createElement('li');
        li.textContent = amigos;

        const botaoRemover = document.createElement('button');
        botaoRemover.textContent = 'X';
        botaoRemover.classList.add('botao-remover');
        botaoRemover.onclick = () => {
            removerAmigo(index);
        };

        li.appendChild(botaoRemover);
        listaAmigos.appendChild(li);
    });
}

function removerAmigo(index) {
    amigos.splice(index, 1);
    atualizarListaAmigos();
    limparResultado();
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Por favor, adicione pelo menos um amigos antes de sortear');
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];
    exibirResultado(amigoSorteado);
}

function exibirResultado(amigo) {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    const li = document.createElement('li');
    li.textContent = `🎉O amigo secreto é: ${amigo}🎉`;
    resultado.appendChild(li);
}


function limparResultado() {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
}

document.getElementById('amigo').addEventListener('keypess', function(event) {
    if (event.key === 'Enter') {
        adicionarAmigo();
    }
});

window.onload = function() {
    atualizarListaAmigos();
}