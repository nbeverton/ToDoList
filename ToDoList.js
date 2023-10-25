/* 
Desenvolver, utilizando os conceitos abordados ao longo do módulo, uma aplicação de lista de tarefas (ToDo List).

Adicionar uma tarefa
Editar uma tarefa salva
Remover uma tarefa salva
Listar todas as tarefas salvas
Obter uma tarefa, através de um parâmetro (id)

Não haverá a persistência das tarefas em banco de dados. 
Para isso, podem utilizar um array para armazenar a lista das tarefas cadastradas.
*/


/*
TODO LIST
Funcionalidades:
- Adicionar uma tarefa
- Editar uma tarefa salva
- Remover uma tarefa salva
- Listar todas as tarefas salvas
- Obter uma tarefa, através de um parâmetro (id)
*/



// GRUPO 2: Alvaro, Everton, Gabriel Hein, Kalinka

const opcoes = `Opções: 
1 Adicionar uma tarefa
2 Editar uma tarefa
3 Remover uma tarefa
4 Ver todas as tarefas
5 Ver uma tarefa específica
6 Sair`;

const prompt = require("prompt-sync")();

let tarefas = [];
let contador = 0;

function gerenciadorDeTarefas() {
    console.log(opcoes);

    const opcao = prompt("O que você deseja fazer? ");

    switch (opcao) {
        case "1":
            adicionarTarefas();
            break;
        case "2":
            editarTarefa();
            break;
        case "3":
            removerTarefa();
            break;
        case "4":
            listarTarefas();
            break;
        case "5":
            procurarTarefa();
            break;
        case "6":
            break;
        default:
            console.log("Opção inválida!");
            gerenciadorDeTarefas();
            break;
    }
}


// 1 - Função Adicionar Tarefa
function adicionarTarefas() {
    const descricao = prompt("Que tarefa você quer adicionar? ");
    const tarefa = {
        id: ++contador,
        descricao,
    }
    tarefas.push(tarefa);
    console.log(`Tarefa ${tarefa.descricao} com id ${tarefa.id} foi adicionada.`);

    prompt(`ENTER para voltar ao menu principal`);
    gerenciadorDeTarefas();
}

// Função Encontrar Tarefa - auxiliar
function encontrarTarefa (idDigitado) {
    return tarefas.findIndex((tarefa) => tarefa.id === idDigitado);
}

// Função Editar Tarefa
function editarTarefa() {
    const idDigitado = +prompt(`Qual o id da tarefa que você quer editar? `);
    const posicaoDaTarefaParaEditar = encontrarTarefa(idDigitado);

    if (posicaoDaTarefaParaEditar < 0) {
        console.error('Tarefa não encontrada');
    } else {
        const novaDescricao = prompt(`Digite a nova descrição: `);

        tarefas[posicaoDaTarefaParaEditar].descricao = novaDescricao;
        console.log("Item editado com sucesso!");
    }
    prompt(`ENTER para voltar ao menu principal`);
    gerenciadorDeTarefas();
}

// Função Remover Tarefa
function removerTarefa() {
    const idDigitado = +prompt(`Qual o id da tarefa que você quer remover? `);
    const posicaoDaTarefaParaRemover = encontrarTarefa(idDigitado);

    if (posicaoDaTarefaParaRemover < 0) {
        console.error('Tarefa não encontrada');
    } else {
        tarefas = tarefas.filter((tarefa) => tarefa.id !== idDigitado);
        console.log("Item removido com sucesso!");
    }

    prompt(`ENTER para voltar ao menu principal`);
    gerenciadorDeTarefas();
}

// Função para Listar Tarefas
function listarTarefas() {
    console.log(`LISTA DE TAREFAS`);
    console.log(tarefas);

    prompt(`ENTER para voltar ao menu principal`);
    gerenciadorDeTarefas();
}


// Função para Procurar Tarefas Específicas
function procurarTarefa() {
    let tarefa;
    const opcao = prompt(`Buscar por: (1) Id ou (2) Descrição? `);

    switch (opcao) {
        case "1":
            const id = +prompt("Digite o id da tarefa: ");
            tarefa = tarefas.find((tarefa) => tarefa.id === id);
            break;
        case "2":
            const descricao = prompt("Digite a descricao da tarefa: ");
            tarefa = tarefas.find((tarefa) => tarefa.descricao === descricao);
            break;
        default:
            console.error("Opção inválida");
            procurarTarefa();
    }

    if (tarefa) {
        console.log(tarefa);
    } else {
        console.error("Tarefa não encontrada");
    }
    prompt(`ENTER para voltar ao menu principal`);
    gerenciadorDeTarefas();
}

gerenciadorDeTarefas();