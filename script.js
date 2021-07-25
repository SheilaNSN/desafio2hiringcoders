if (localStorage.codigoproduto) {
    document.getElementById('codigoproduto').value = localStorage.codigoproduto;
}
if (localStorage.produto) {
    document.getElementById('produto').value = localStorage.produto;
}
if (localStorage.descricao) {
    document.getElementById('descricao').value = localStorage.descricao;
}
if (localStorage.qtd) {
    document.getElementById('qtd').value = localStorage.qtd;
}

if (localStorage.cpf) {
    document.getElementById('cpf').value = localStorage.cpf;
}
if (localStorage.nome) {
    document.getElementById('nome').value = localStorage.nome;
}
if (localStorage.endereco) {
    document.getElementById('endereco').value = localStorage.endereco;
}

if (localStorage.email) {
    document.getElementById('email').value = localStorage.email;
}

if (localStorage.telefone) {
    document.getElementById('telefone').value = localStorage.telefone;
}

const saveData = function () {
    const codigoproduto = document.getElementById('codigoproduto').value;
    const produto = document.getElementById('produto').value;
    const descricao = document.getElementById('descricao').value;
    const qtd = document.getElementById('qtd').value;

    const cpf = document.getElementById('cpf').value;
    const nome = document.getElementById('nome').value;
    const endereco = document.getElementById('endereco').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;

    localStorage.setItem('codigoproduto', codigoproduto);
    localStorage.setItem('produto', produto);
    localStorage.setItem('descricao', descricao);
    localStorage.setItem('qtd', qtd);

    localStorage.setItem('cpf', cpf);
    localStorage.setItem('nome', nome);
    localStorage.setItem('endereco', endereco);
    localStorage.setItem('email', email);
    localStorage.setItem('telefone', telefone);
}

document.onchange = saveData