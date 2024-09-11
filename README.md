# ToDo List - Projeto Final do Módulo 2 | Santander Coders

Este projeto é uma aplicação de lista de tarefas (ToDo List) desenvolvida como parte do Módulo 2 do curso **Santander Coders**. O objetivo do projeto é criar uma aplicação de console que permita o gerenciamento de tarefas de forma simples e interativa, aplicando os conceitos de lógica de programação aprendidos ao longo do módulo.

## 🚀 Funcionalidades

A aplicação oferece as seguintes funcionalidades:

- **Adicionar Tarefa**: Permite criar novas tarefas com título, descrição, data de entrega e status inicial.
- **Editar Tarefa**: Modifique informações de uma tarefa existente, como título, descrição, data de entrega e status.
- **Remover Tarefa**: Exclua tarefas da lista com base no ID fornecido.
- **Listar Todas as Tarefas**: Exiba todas as tarefas registradas, mostrando seus detalhes.
- **Obter Tarefa por ID**: Busque e visualize uma tarefa específica através de seu identificador único.

## 🛠️ Tecnologias Utilizadas

- **JavaScript (ES6+)**
- **Node.js**: Ambiente de execução para JavaScript no backend.
- **readline-sync**: Biblioteca Node.js para interação com o usuário via linha de comando.

## 📦 Estrutura do Projeto

```bash
.
├── projeto_final.js    # Arquivo principal do programa
├── package.json        # Gerenciador de dependências e scripts do Node.js
└── README.md           # Documentação do projeto
```
## 📋 Pré-requisitos

Antes de começar, você precisará ter o Node.js instalado na sua máquina. Caso não tenha, faça o download e instale a partir do [site oficial do Node.js](https://nodejs.org/).

## 🔧 Instalação

Siga as instruções abaixo para configurar e executar o projeto em seu ambiente local:

1. Clone este repositório para o seu computador:

   ```bash
   git clone https://github.com/pdrLCarvalho/To-Do-List
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd Modulo 2
   ```

3. Instale as dependências necessárias:

   ```bash
   npm install i readline-sync
   ```

## ▶️ Como Executar

Para iniciar o programa, execute o seguinte comando:

```bash
node ToDo_list.js
```

Após executar, um menu interativo será exibido no console, permitindo que você gerencie suas tarefas.

## 📝 Como Usar

### Menu de Opções

1. **Adicionar uma Tarefa**: Permite adicionar uma nova tarefa, solicitando título, descrição, e data de entrega.
2. **Editar uma Tarefa**: Insira o ID da tarefa que deseja modificar e escolha o campo que deseja atualizar.
3. **Remover uma Tarefa**: Insira o ID da tarefa que deseja excluir.
4. **Listar Todas as Tarefas**: Exibe todas as tarefas cadastradas com seus detalhes.
5. **Obter uma Tarefa por ID**: Insira o ID da tarefa para visualizar suas informações completas.
6. **Sair**: Encerra o programa.

## ⚙️ Estrutura do Código

### Funções Principais

- **`adicionarTarefa()`**: Adiciona uma nova tarefa ao sistema, verificando se os campos obrigatórios estão preenchidos.
- **`editarTarefa()`**: Permite a edição dos atributos de uma tarefa selecionada por ID.
- **`removerTarefa()`**: Exclui uma tarefa existente com base no ID fornecido.
- **`listarTarefas()`**: Lista todas as tarefas salvas no sistema, exibindo seus detalhes.
- **`obterTarefaPorId()`**: Busca uma tarefa específica através do seu ID e exibe suas informações.
- **`executarTodo()`**: Função principal que controla o loop de execução do programa e gerencia as interações do usuário.

## 👥 Integrantes do Grupo

- **Gabryel Costa** - gabryelcosta
- **Lucas Borges** - LucasBorgesDeCarvalho
- **Pedro Carvalho** - pdrLCarvalho
- **Wagner Leme** - WagnerRamalho

## 🏡 Contribuições

Esse é um projeto educacional, mas se você quiser contribuir, sinta-se à vontade para abrir uma [issue](https://github.com/zarkio42/Santander-Coders-Front-End/issues) ou enviar um pull request.