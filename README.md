<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Descrição

O proposito deste projeto testar novas ideias para melhorar o entendimento, a organização e para ser uma ferramenta de consulta.

Podemos encontrar alguns modulos que remetem a cenários diferentes que não fazem parte do mesmo contexto, porem, cada modulo traz um problema a ser testado. Com a complexidade baixa nos permite estressar o ponto em questão.

## Modulos/Questões

- [ ] **Banco** - CRUD com service desacoplado, tendo como objetivo o SOLID e multi-modulos
- [ ] **Github** - Tramentos de erro com http de api externas e erros internos, além de colocar a comunicação http em um repositorio

## Requisitos

> *Obs: As funcionalidades a baixo são fictícias e servem apenas para aumentar a complexidade do projeto!

### Banco

- Abrir uma conta
  - Não deve criar duas contas do mesmo tipo
  - Se conta corrente:
    - o cliente deve ser maior de idade (api externa fictícia)
    - precisa ter uma renda comprovada (api externa fictícia)
  - Se conta poupança:
    - deve conter pelo menos 100 reais
    - não pode estar com nome sujo (api externa fictícia)
- Fechar uma conta
  - se con
- Sacar
  - A quantia não deve ser menor que 50
  - A quantia não deve ser meior que 1500
  - Tem que no intervalor das 06:00 as 22:00
- Transferir
  - a conta de destino tem que pertencer ao mesmo banco
  - A quantia não deve ser menor que 10
  - A quantia não deve ser meior que 4000

### Github

- Registrar usuario
- Listar repositorio de um usuario registrado
- Deletar usuario

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
