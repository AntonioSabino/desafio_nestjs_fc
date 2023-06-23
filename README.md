# Desafio Nest.js com Docker

Este é um projeto de uma aplicação Nest.js com Docker que roda na porta 3000. A aplicação expõe 4 rotas de API Rest para manipulação de assets e orders.

## Rotas

- **Listar assets** - POST `/api/assets`
- **Criar assets** - GET `/api/assets`
- **Criar orders** - POST `/api/orders`
- **Listar orders** - GET `/api/orders`

## Dados

### Asset

Um asset possui os seguintes dados:

- **id** (informado pelo usuário)
- **symbol** (símbolo do ativo)

### Order

Uma order possui os seguintes dados:

- **id** (gerado automaticamente pelo banco)
- **asset_id** (relacionado com Asset)
- **price**
- **status** (open, pending, closed) (não pode ser enviado no POST)

## ORM e Banco de Dados

Neste projeto, utilizamos o Prisma ORM juntamente com o banco de dados MongoDB. Para o banco de dados, utilizamos a imagem `bitnami/mongodb:5.0.17`.

## Como executar o projeto

Para executar este projeto usando a extensão Dev Containers do Visual Studio Code, siga as instruções abaixo:

1. Certifique-se de ter o Docker instalado em sua máquina.
2. Clone este repositório em seu ambiente de desenvolvimento.
3. Abra o Visual Studio Code.
4. Instale a extensão "Remote - Containers" se ainda não estiver instalada.
5. Na barra lateral do Visual Studio Code, clique no ícone "><" (canto inferior esquerdo) para abrir o menu de comandos remotos.
6. Selecione a opção "Reopen in Container" para abrir o projeto no contêiner de desenvolvimento.
7. Aguarde o contêiner ser configurado e as dependências serem instaladas.
8. Após o processo de configuração, abra um novo terminal dentro do Visual Studio Code.
9. Execute o comando `npm run start:dev` para iniciar a aplicação.
10. A aplicação estará disponível em `http://localhost:3000`.

Agora você pode usar as rotas da API para listar e criar assets e orders.

## Considerações Finais

Este projeto foi desenvolvido com base nos requisitos fornecidos. Caso precise de mais informações ou tenha alguma dúvida, sinta-se à vontade para entrar em contato.

Divirta-se codificando!
