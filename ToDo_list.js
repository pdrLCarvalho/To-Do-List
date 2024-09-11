const prompt = require('readline-sync')

const OPCAO_ADICIONAR_TAREFA = "1"
const OPCAO_EDITAR_TAREFA = "2"
const OPCAO_REMOVER_TAREFA = "3"
const OPCAO_LISTAR_TAREFAS = "4"
const OPCAO_OBTER_TAREFA_POR_ID = "5"
const OPCAO_SAIR = "6"

let continuar = true

let todoList = new Map()

let idCounter = 1

function exibirMenu() {
    console.log(`
      ========================
      Escolha uma opção:
      1. Adicionar uma tarefa
      2. Editar uma tarefa
      3. Remover uma tarefa
      4. Listar todas as tarefas
      5. Obter uma tarefa por ID
      6. Sair
      ========================
    `)
}

function adicionarTarefa() {
    try {
    console.log('Você escolheu a opção de adicionar uma tarefa.')
    let tituloTarefa = prompt.question('Digite o titulo da tarefa: ')
    let descricaoTarefa = prompt.question('Digite a descricao da tarefa: ')
    let dataEntrega = prompt.question('Digite a data de entrega da tarefa: ')
    let status = false
    
    if(!tituloTarefa || !descricaoTarefa){
        throw new Error("O titulo ou descrição não pode ser vazio")
    }
    console.log('Sua tarefa foi adicionada.')
    todoList.set(idCounter, { ID: idCounter, Titulo: tituloTarefa, Descricao: descricaoTarefa, Data: dataEntrega, Status: status == false ? "Em andamento" : "Finalizado" })
    console.log(todoList.get(idCounter))
    idCounter++
    } catch (error) {
        console.error("Error:", error.message)
    }
}

function editarTarefa() {
    try {
    console.log('Você escolheu a opção de editar uma tarefa')

    let procuraID = Number(prompt.question('Digite o ID da tarefa que voce deseja editar: '))

    todoList.forEach(element => {
        if (element.ID == procuraID) {
    console.log(`
        ========================
        Escolha uma opção que você deseja editar:
        1. Titulo
        2. Descrição
        3. Data
        4. Status
        5. Todos
        ========================
    `)
            let novoTitulo = ''
            let novaDescricaoTarefa = ''
            let novaDataEntrega = ''
            let novoStatus = ''

            let editar = prompt.question('Insira a opcao: ')
            switch (editar) {
                case '1':
                    novoTitulo = prompt.question('Digite o novo titulo para a tarefa: ')
                    if (!novoTitulo) {
                        throw new Error("Título inválido")
                    }
                    element.Titulo = novoTitulo
                    break
                case '2':
                    novaDescricaoTarefa = prompt.question('Digite a descricao da tarefa: ')
                    if (!novaDescricaoTarefa) {
                        throw new Error("Descrição inválida")
                    }
                    element.Descricao = novaDescricaoTarefa
                    break
                case '3':
                    novaDataEntrega = prompt.question('Digite a nova data de entrega da tarefa: ')
                    if (!novaDataEntrega) {
                        throw new Error("Data inválida")
                    }
                    element.Data = novaDataEntrega
                    break
                case '4':
                    novoStatus = prompt.question('Digite "s" para ja finalizada e "n" para ainda em andamento. ').toLocaleLowerCase()
                    if (!novoStatus) {
                        throw new Error("Status inválido")
                    }
                    element.Status = novoStatus == "s" ? "Finalizado" : "Em andamento"
                    break
                case '5':
                    novoTitulo = prompt.question('Digite o novo titulo para a tarefa: ')
                    novaDescricaoTarefa = prompt.question('Digite a descricao da tarefa: ')
                    novaDataEntrega = prompt.question('Digite a nova data de entrega da tarefa: ')
                    novoStatus = prompt.question('Atualize o status da tarefa. Digite "s" para ja finalizada e "n" para ainda em andamento. ').toLocaleLowerCase()

                    if (!novoStatus || !novaDescricaoTarefa || !novaDataEntrega || !novoStatus) {
                        throw new Error("Algum dos campos não foi preenchido.")
                    }
                    element.Titulo = novoTitulo
                    element.Descricao = novaDescricaoTarefa
                    element.Data = novaDataEntrega
                    element.Status = novoStatus == "s" ? "Finalizado" : "Em andamento"
                    break
                default:
                    throw new Error('Opção inválida. Tente novamente.')
            }
            console.log(todoList.get(procuraID))
        }
    })
    } catch(error) {
        console.error("Error:", error.message)
    }
}

function removerTarefa() {
    try {
        console.log('Você escolheu a opção de excluir uma tarefa.')
        let excluirItem = Number(prompt.question('Digite o ID da tarefa que voce deseja excluir: '))
        if (!todoList.get(excluirItem)) {
            throw new Error("Id Invalido, tente novamente!")
        }
        todoList.delete(excluirItem)
        console.log('Tarefa removida com sucesso.')
    } catch(error){
        console.error("Error:", error.message)
    }
}

function listarTarefas() {
    console.log('Você escolheu a opção para visualizar as tarefas.')
    console.log(todoList)
}

function obterTarefaPorId() {
    try {
        console.log('Você escolheu a opção de buscar uma tarefa por ID.')
        let buscarTarefa = Number(prompt.question('Digite o ID da tarefa que voce deseja buscar: '))
        if (!todoList.get(buscarTarefa)) {
            throw new Error("Id Invalido, tente novamente!")
        }
        console.log(todoList.get(buscarTarefa))
    } catch(error) {
        console.error("Error:", error.message)
    }
}

function delay(tempoms) {
    return new Promise(resolve => setTimeout(resolve, tempoms))
}

async function executarTodo() {

    while (continuar) {

        exibirMenu()
        let opcao = prompt.question('Digite qual opcao voce deseja executar: ')

        switch (opcao) {
            case OPCAO_ADICIONAR_TAREFA:
                adicionarTarefa()
                break
            case OPCAO_EDITAR_TAREFA:
                editarTarefa()
                break
            case OPCAO_REMOVER_TAREFA:
                removerTarefa()
                break
            case OPCAO_LISTAR_TAREFAS:
                listarTarefas()
                break
            case OPCAO_OBTER_TAREFA_POR_ID:
                obterTarefaPorId()
                break
            case OPCAO_SAIR:
                console.log("Saindo...")
                continuar = false
                break
            default:
                console.log("Opção inválida! Tente novamente.\n")
        }

        await delay(3000)
    }
}

executarTodo()