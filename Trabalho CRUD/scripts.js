// Função para inserir um contato na tabela
function inserirContato(event) {
    event.preventDefault();

    // Obter valores dos campos do formulário
    var nome = document.getElementById('nome').value;
    var telefone = document.getElementById('telefone').value;
    var email = document.getElementById('email').value;

    // Criar uma nova linha na tabela
    var tabela = document.getElementById('tabelaContatos');
    var novaLinha = tabela.insertRow();
    novaLinha.innerHTML = `<td>${nome}</td><td>${telefone}</td><td>${email}</td><td><button class="btnExcluir">Excluir</button><button class="btnEditar">Editar</button></td>`;

    // Limpar os campos do formulário
    document.getElementById('nome').value = '';
    document.getElementById('telefone').value = '';
    document.getElementById('email').value = '';
}

// Função para excluir um contato
function excluirContato(event) {
    if (confirm("Deseja realmente excluir este contato?")) {
        var linha = event.target.closest('tr');
        linha.remove();
    }
}

// Função para editar um contato
function editarContato(event) {
    var linha = event.target.closest('tr');
    var colunas = linha.getElementsByTagName('td');
    
    // Substituir valores da tabela por inputs para edição
    colunas[0].innerHTML = `<input type="text" value="${colunas[0].innerText}">`;
    colunas[1].innerHTML = `<input type="text" value="${colunas[1].innerText}">`;
    colunas[2].innerHTML = `<input type="email" value="${colunas[2].innerText}">`;
    colunas[3].innerHTML = `<button class="btnSalvar">Salvar</button><button class="btnCancelar">Cancelar</button>`;
}

// Função para salvar a edição de um contato
function salvarEdicao(event) {
    var linha = event.target.closest('tr');
    var colunas = linha.getElementsByTagName('td');
    
    // Obter os valores dos inputs editados
    var nome = colunas[0].getElementsByTagName('input')[0].value;
    var telefone = colunas[1].getElementsByTagName('input')[0].value;
    var email = colunas[2].getElementsByTagName('input')[0].value;
    
    // Atualizar os valores na tabela
    colunas[0].innerHTML = nome;
    colunas[1].innerHTML = telefone;
    colunas[2].innerHTML = email;
    colunas[3].innerHTML = `<button class="btnExcluir">Excluir</button><button class="btnEditar">Editar</button>`;
}

// Função para cancelar a edição de um contato
function cancelarEdicao(event) {
    var linha = event.target.closest('tr');
    var colunas = linha.getElementsByTagName('td');
    
    // Restaurar os valores originais da tabela
    colunas[0].innerHTML = colunas[0].getElementsByTagName('input')[0].defaultValue;
    colunas[1].innerHTML = colunas[1].getElementsByTagName('input')[0].defaultValue;
    colunas[2].innerHTML = colunas[2].getElementsByTagName('input')[0].defaultValue;
    colunas[3].innerHTML = `<button class="btnExcluir">Excluir</button><button class="btnEditar">Editar</button>`;
}

// Adicionar eventos aos botões Excluir, Editar, Salvar e Cancelar
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('btnExcluir')) {
        excluirContato(event);
    } else if (event.target.classList.contains('btnEditar')) {
        editarContato(event);
    } else if (event.target.classList.contains('btnSalvar')) {
        salvarEdicao(event);
    } else if (event.target.classList.contains('btnCancelar')) {
        cancelarEdicao(event);
    }
});

// Adicionar evento de submissão ao formulário
document.getElementById('formContato').addEventListener('submit', inserirContato);
