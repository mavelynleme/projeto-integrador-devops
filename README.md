# Projeto Integrador — DevOps e Sistemas Operacionais

<p align="center">
<<<<<<< HEAD
  <img src="https://media.giphy.com/media/LmNwrBhejkK9EFP504/giphy.gif" width="700">
=======
  <img src="https://media.giphy.com/media/LmNwrBhejkK9EFP504/giphy.gif" width="700">
>>>>>>> 340ced7503f4c9e8fefda7ea17ceed9888c034bf
</p>

![Linux](https://img.shields.io/badge/Linux-Ubuntu-E95420?logo=ubuntu&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-Containerized-2496ED?logo=docker&logoColor=white)
![Kubernetes](https://img.shields.io/badge/Kubernetes-Orchestration-326CE5?logo=kubernetes&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/CI%2FCD-GitHub_Actions-2088FF?logo=github-actions&logoColor=white)
![Git](https://img.shields.io/badge/Git-Version_Control-F05032?logo=git&logoColor=white)
![DevOps](https://img.shields.io/badge/DevOps-Automation-blueviolet)
![Status](https://img.shields.io/badge/Status-Em_Desenvolvimento-success)

---

# Objetivo do Projeto

Este projeto integrador tem como objetivo aplicar conceitos modernos de:

- DevOps
- Sistemas Operacionais Linux
- Automação
- Containers
- Integração Contínua (CI)
- Entrega Contínua (CD)
- Monitoramento e Observabilidade

A proposta busca demonstrar como o desenvolvimento moderno depende da integração entre:

- desenvolvimento de software
- infraestrutura
- operações Linux
- automação operacional

O foco principal do projeto é demonstrar domínio prático do ambiente Linux através de:

- Shell Scripts
- logs
- automação
- Docker
- Kubernetes
- pipelines CI/CD
- organização operacional

---

# Objetivos Acadêmicos

✅ Aplicar conceitos de DevOps na prática

✅ Utilizar Git e Git Flow em equipe

✅ Automatizar tarefas administrativas Linux

✅ Utilizar containers Docker

✅ Compreender conceitos básicos de Kubernetes

✅ Criar pipelines CI/CD

✅ Gerar logs e monitoramento operacional

✅ Desenvolver visão integrada entre software e infraestrutura

---

# Perfil Acadêmico

O projeto segue a proposta acadêmica do professor Deivison Takatu e da Fatec Itapetininga, priorizando:

- aprendizagem prática
- integração entre desenvolvimento e operações
- domínio operacional Linux
- automação de ambientes
- boas práticas DevOps
- colaboração em equipe
- uso profissional de GitHub
- organização de infraestrutura computacional

A proposta aproxima os alunos de cenários reais encontrados no mercado de tecnologia e infraestrutura moderna.

---

<<<<<<< HEAD
# Tecnologias Utilizadas

## Sistemas Operacionais

- Linux Ubuntu
- Shell Bash

## Containers e Virtualização

- Docker
- Docker Compose
- Kubernetes

## DevOps e Automação

- GitHub Actions
- CI/CD
- Shell Script

## Versionamento

- Git
- GitHub

## Observabilidade

- Logs Linux
- Monitoramento básico de containers

---

# Estrutura da Aplicação

```
projeto-devops/
│
├── app/
│   ├── scripts/
│   │   ├── monitor.sh
│   │   ├── backup.sh
│   │   └── coleta_logs.sh
│   │
│   └── logs/
│
├── docker/
│   ├── Dockerfile
│   └── docker-compose.yml
│
├── kubernetes/
│   ├── deployment.yaml
│   └── service.yaml
│
├── .github/
│   └── workflows/
│       └── pipeline.yml
│
├── README.md
│
└── docs/
```
---

# A estrutura foi organizada para separar:

- automações Linux
- containers
- pipelines
- arquivos Kubernetes
- documentação
- logs operacionais

Isso facilita:

- manutenção
- escalabilidade
- colaboração em equipe
- organização do ambiente DevOps

---

# Organização do Ambiente

O ambiente do projeto foi estruturado utilizando Linux Ubuntu como sistema operacional principal.

A organização inclui:

- terminal Linux
- Shell Scripts
- containers Docker
- automação de tarefas
- versionamento Git
- integração com GitHub

O ambiente segue uma estrutura semelhante à utilizada em projetos reais de infraestrutura moderna.

## Fluxo operacional do ambiente

1. Desenvolvimento local no Linux  
2. Versionamento com Git  
3. Push para GitHub  
4. Execução automática do pipeline  
5. Build dos containers  
6. Execução dos testes e automações  
7. Simulação de deploy com Kubernetes  

---

# Explicação do Pipeline

O pipeline CI/CD foi criado utilizando GitHub Actions.

## Objetivos do pipeline

- automatizar processos
- validar o ambiente
- executar scripts automaticamente
- garantir integração contínua

## Etapas principais

### 1. Clone do Repositório

O GitHub Actions realiza checkout automático do projeto.

### 2. Configuração do Ambiente

Instala dependências e prepara o ambiente Linux.

### 3. Execução dos Scripts

Os scripts Shell são executados automaticamente.

#### Exemplos:

- monitoramento
- backup
- coleta de logs

### 4. Build Docker

Criação automática da imagem containerizada.

### 5. Testes Operacionais

Verificação básica do funcionamento do container.

### 6. Simulação de Deploy

Execução simulada utilizando conceitos de Kubernetes.

---

# Explicação da Automação

As automações do projeto foram desenvolvidas utilizando Shell Script Bash.

## Objetivos

- automatizar tarefas Linux
- reduzir atividades manuais
- organizar logs
- monitorar ambiente
- simular administração operacional

## Automatizações implementadas

### Monitoramento

Script responsável por verificar:

- uso de CPU
- memória
- processos ativos
- status operacional

### Backup

Automação simples de backup de arquivos e logs.

### Coleta de Logs

Scripts para organizar logs operacionais automaticamente.

## Benefícios da automação

- produtividade
- padronização
- redução de erros
- controle operacional

---

# Explicação dos Containers

O projeto utiliza Docker para containerização da aplicação.

## Objetivos

- isolamento do ambiente
- padronização operacional
- facilidade de deploy
- portabilidade

## Funcionalidades

- criação de imagens Docker
- execução de containers
- gerenciamento via Docker Compose
- simulação de microsserviços

## Vantagens do uso de containers

✅ Ambiente reproduzível

✅ Facilidade de manutenção

✅ Portabilidade entre sistemas

✅ Escalabilidade

✅ Integração com pipelines CI/CD

---

# Explicação da Infraestrutura Utilizada

A infraestrutura do projeto foi baseada em conceitos modernos de DevOps e Cloud Native.

## Componentes utilizados

### Linux Ubuntu

Sistema operacional principal para administração e automação.

### Docker

Responsável pela containerização da aplicação.

### Kubernetes

Utilizado para simular orquestração de containers.

### GitHub Actions

Ferramenta de automação CI/CD.

### GitHub

Hospedagem do repositório e integração colaborativa.

### Shell Script

Automação operacional Linux.

---

# Fluxo Geral da Infraestrutura

```
Desenvolvedor
      ↓
Git/GitHub
      ↓
GitHub Actions (CI/CD)
      ↓
Docker Build
      ↓
Containers
      ↓
Kubernetes
      ↓
Monitoramento e Logs
``` 

---

# DevOps Mood

<p align="center">
  <img src="https://media.giphy.com/media/xTiTnxpQ3ghPiB2Hp6/giphy.gif" width="700">
=======
# DevOps Mood

<p align="center">
  <img src="https://media.giphy.com/media/xTiTnxpQ3ghPiB2Hp6/giphy.gif" width="700">
>>>>>>> 340ced7503f4c9e8fefda7ea17ceed9888c034bf
</p>

> “Código sozinho não resolve problemas.
> Ecossistemas resolvem.”
<<<<<<< HEAD
---

=======
>>>>>>> 340ced7503f4c9e8fefda7ea17ceed9888c034bf
