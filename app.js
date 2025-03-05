let amigos = [];

function adicionarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nome = inputAmigo.trim();

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