<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest



## 📜 Descrição

O proposito deste projeto é testar novas ideias para melhorar o entendimento, a organização e para ser um local de consulta. Uma lista de objetivo a serem alcaçados de 

O cenário de banco nos permite inventar regras de negócios mais complexas pra tester métodos e tecnologias novas com mais profundidade.

## 🗄 Modulos

- Clientes
- Conta
- Transferencias

## 📑 Objetivos

- [x] CRUD com services desacoplados e contendo somente sua reponsabilidade, tendo como objetivo seguir os princípios de SOLID
- [ ] Log de erros

- [ ] Fazer conexões multiplas com typeorm
- [ ] Tratamento de erro de *repositórios* e *regra de negócios*
- [ ] Comunicação gRPC
- [ ] Documentação Swegger gerada via Nestjs

## Requisitos funcionais

> *Obs: As funcionalidades a baixo são fictícias e servem apenas para aumentar a complexidade do projeto.

- Cadastrar um novo cliente
  - não pode estar com nome sujo (api externa fictícia)
- Abrir uma conta
  - Não deve criar duas contas do mesmo tipo
  - Se conta corrente:
    - o cliente deve ser maior de idade (api externa fictícia)
    - precisa ter uma renda comprovada (api externa fictícia)
  - Se conta poupança:
    - deve conter pelo menos 100 reais
- Fechar uma conta
  - a conta não pode ter dinheiro
- Sacar
  - A quantia não deve ser menor que 50
  - A quantia não deve ser meior que 1500
  - Tem que no intervalor das 06:00 as 22:00
- Transferir
  - A quantia não deve ser menor que 10
  - A quantia não deve ser meior que 4000

## Instalação

```bash
$ npm install
```

ou

```bash
$ yarn
```

## Rodar o projeto

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

ou 

```bash
# development
$ yarn start

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod
```

## Testes

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

ou 

```bash
# unit tests
$ yarn test

# e2e tests
$ yarn test:e2e

# test coverage
$ yarn test:cov
```
