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
    
}