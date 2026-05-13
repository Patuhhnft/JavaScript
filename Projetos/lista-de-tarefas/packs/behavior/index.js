// Contador para gerar IDs únicos das tarefas.
let contador = 0;
// Campo onde o usuário digita a tarefa.
let input = document.getElementById('inputTarefa');
// Botão usado para adicionar a tarefa.
let btnAdd = document.getElementById('btn-add');
// Área principal onde as tarefas aparecem.
let main = document.getElementById('areaLista');

function salvarDados(){
    // Salva o HTML atual da lista para restaurar depois.
    localStorage.setItem('tarefas', main.innerHTML);
    // Salva o contador para não repetir IDs quando a página recarregar.
    localStorage.setItem('contador', contador);
}

function carregarDados(){
    // Recupera os dados salvos.
    const tarefas = localStorage.getItem('tarefas');
    const contadorSalvo = localStorage.getItem('contador');

    // Se houver tarefas salvas, recria a lista inteira no HTML.
    if(tarefas !== null){
        main.innerHTML = tarefas;
    }

    // Restaura o contador salvo.
    if(contadorSalvo !== null){
        contador = parseInt(contadorSalvo, 10);
    }
}

// Carrega as tarefas assim que o script é executado.
carregarDados();


function addTarefa(){
    // Pega o texto digitado e remove espaços extras.
    let valorInput = input.value.trim();

    // Só adiciona se realmente houver conteúdo.
    if(valorInput !== ""){

        // Aumenta o contador para criar um novo identificador.
        ++contador;

        // Monta o bloco HTML da nova tarefa.
        let novoItem = `
        <div class="item" id="${contador}">
                <div onclick="marcarTarefa(${contador})" class="item-icone">
                    <i id="icone_${contador}" class="mdi mdi-circle-outline"></i>
                </div>
                <div id="icone_${contador}" onclick="marcarTarefa(${contador})" class="item-nome">
                    ${valorInput}
                </div>
                <div class="item-botao">
                    <button onclick="deletar(${contador})" class="delete"><i class="mdi mdi-delete"></i>Deletar</button>
                </div>
            </div>
            `;

        // Adiciona o novo item ao HTML já existente.
        main.innerHTML += novoItem;

        // Salva a lista atualizada no localStorage.
        salvarDados();

        // Limpa o campo e devolve o foco para digitar outra tarefa.
        input.value = "";
        input.focus();
    }
};

function deletar(id){
    // Localiza o item pelo ID.
    var tarefa = document.getElementById(id);
    // Remove o elemento da tela.
    tarefa.remove();
    // Atualiza o conteúdo salvo.
    salvarDados();
}

function marcarTarefa(id){
    // Pega o elemento da tarefa clicada.
    var item = document.getElementById(id);
    // Verifica a classe atual para saber se está marcada ou não.
    var classe = item.getAttribute('class');

    if(classe=="item"){
        // Marca como concluída.
        item.classList.add('clicado');

        // Troca o ícone para indicar conclusão.
        var icone = document.getElementById('icone_'+id)
        icone.classList.remove('mdi-circle-outline');
        icone.classList.add('mdi-check-circle');

        // Move o item para o final da lista.
        item.parentNode.appendChild(item);
    }else{
        // Desmarca a tarefa.
        item.classList.remove('clicado');
        // Volta o ícone para o estado inicial.
        var icone = document.getElementById('icone_'+id)
        icone.classList.add('mdi-circle-outline');
        icone.classList.remove('mdi-check-circle');
    }

    // Salva a alteração de estado.
    salvarDados();
}

// Permite adicionar a tarefa ao pressionar Enter.
input.addEventListener("keyup", function(event) {
    if(event.keyCode === 13) {
        event.preventDefault();
        btnAdd.click();
    }
})