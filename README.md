# Projeto Integrador - DevOps e Sistemas Operacionais

<p align="center">
  <img src="https://media.giphy.com/media/LmNwrBhejkK9EFP504/giphy.gif" width="700">
</p>

![Linux](https://img.shields.io/badge/Linux-Ubuntu-E95420?logo=ubuntu&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-Containerized-2496ED?logo=docker&logoColor=white)
![Kubernetes](https://img.shields.io/badge/Kubernetes-Orchestration-326CE5?logo=kubernetes&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/CI%2FCD-GitHub_Actions-2088FF?logo=github-actions&logoColor=white)
![Git](https://img.shields.io/badge/Git-Version_Control-F05032?logo=git&logoColor=white)
![DevOps](https://img.shields.io/badge/DevOps-Automation-blueviolet)
![Status](https://img.shields.io/badge/Status-Em_Desenvolvimento-success)

---

## Objetivo do Projeto

Este projeto integrador tem como objetivo aplicar conceitos de DevOps e Sistemas Operacionais em uma aplicacao web demonstravel.

O estado atual do projeto e um dashboard frontend feito com React, Vite e TypeScript. A interface apresenta informacoes simuladas de monitoramento de sistema, como CPU, memoria, uptime, rede e status geral. Esses dados estao hardcoded/mocados no frontend; ainda nao existe backend ou API real neste repositorio.

O projeto tambem possui artefatos iniciais para demonstrar praticas de DevOps:

- versionamento com Git e GitHub
- pipeline de CI com GitHub Actions
- containerizacao com Docker
- manifesto inicial de Kubernetes
- script inicial de automacao/deploy em Bash
- testes automatizados basicos com Vitest
- documentacao do progresso e lacunas

---

## Objetivos Academicos

- Aplicar conceitos de DevOps na pratica
- Utilizar Git e Git Flow em equipe
- Automatizar tarefas administrativas Linux
- Utilizar containers Docker
- Compreender conceitos basicos de Kubernetes
- Criar pipelines CI/CD
- Gerar logs e monitoramento operacional
- Desenvolver visao integrada entre software e infraestrutura

---

## Estado Atual

| Area | Status atual |
| --- | --- |
| Aplicacao | Frontend React/Vite/TypeScript |
| Backend/API | Nao existe ainda |
| Dados do dashboard | Hardcoded/mocados no frontend |
| Docker | `Dockerfile` presente |
| Kubernetes | `k8s/deployment.yaml` presente |
| CI/CD | GitHub Actions em `.github/workflows/ci.yaml` |
| Testes | Vitest configurado com testes basicos |
| Shell script | `deploy.sh` presente |
| Logs | Pasta e fluxo de logs ainda pendentes |
| Configuracao | `.env.example` documenta variaveis iniciais |

---

## Tecnologias Utilizadas

### Frontend

- React
- Vite
- TypeScript
- Tailwind CSS
- Radix UI / shadcn-style components
- Lucide React

### DevOps e Infraestrutura

- Git e GitHub
- GitHub Actions
- Docker
- Nginx para servir o build estatico
- Kubernetes
- Shell Script Bash

### Qualidade e Testes

- ESLint
- Vitest
- Testing Library

---

## Estrutura Atual do Repositorio

```text
.
|-- .github/
|   `-- workflows/
|       `-- ci.yaml
|-- docs/
|   `-- evaluation-checklist.md
|-- k8s/
|   `-- deployment.yaml
|-- public/
|-- src/
|   |-- assets/
|   |-- components/
|   |-- hooks/
|   |-- lib/
|   |-- pages/
|   `-- test/
|-- .dockerignore
|-- .env.example
|-- Dockerfile
|-- deploy.sh
|-- package.json
|-- package-lock.json
|-- README.md
|-- vite.config.ts
`-- vitest.config.ts
```

---

## Como Executar Localmente

Instale as dependencias:

```bash
npm ci
```

Execute o ambiente de desenvolvimento:

```bash
npm run dev
```

Execute as validacoes principais:

```bash
npm run lint
npm run test
npm run build
```

---

## Pipeline CI/CD

O workflow atual usa GitHub Actions e executa:

1. Checkout do codigo
2. Configuracao do Node.js 20
3. Instalacao com `npm ci`
4. Lint com `npm run lint`
5. Testes com `npm run test`
6. Build com `npm run build`

Arquivo: `.github/workflows/ci.yaml`

---

## Docker

O projeto possui um `Dockerfile` multi-stage:

1. Usa Node.js para instalar dependencias e gerar o build com Vite.
2. Usa Nginx para servir os arquivos estaticos gerados em `dist/`.

Exemplo de build:

```bash
docker build -t projeto-integrador-devops .
```

---

## Kubernetes

O manifesto inicial esta em `k8s/deployment.yaml` e define:

- Deployment da aplicacao
- Service do tipo NodePort
- requests e limits basicos de CPU/memoria
- 2 replicas

Esse manifesto ainda deve ser validado em um cluster local ou ambiente de demonstracao.

---

## Automacao Linux

O arquivo `deploy.sh` existe como script inicial de automacao. Ele verifica recursos do sistema Linux, valida Docker/kubectl, executa build da imagem Docker e aplica o manifesto Kubernetes quando `kubectl` esta disponivel.

Scripts separados para monitoramento, backup e coleta de logs ainda estao pendentes.

---

## Checklist de Avaliacao

O status honesto dos requisitos esta documentado em:

```text
docs/evaluation-checklist.md
```

---

## DevOps Mood

<p align="center">
  <img src="https://media.giphy.com/media/xTiTnxpQ3ghPiB2Hp6/giphy.gif" width="700">
</p>

> "Codigo sozinho nao resolve problemas.
> Ecossistemas resolvem."
