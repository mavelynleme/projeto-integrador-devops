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
| Kubernetes | Manifestos em `k8s/` para Deployment, Service, ConfigMap e Secret de exemplo |
| CI/CD | GitHub Actions em `.github/workflows/ci.yaml` |
| Testes | Vitest configurado com testes basicos |
| Shell script | `deploy.sh` e scripts operacionais em `scripts/` |
| Logs | `logs/` criado para evidencias geradas pelos scripts |
| Backups | `backups/` criado para arquivos `.tar.gz` gerados pelo script de backup |
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
|   |-- configmap.yaml
|   |-- deployment.yaml
|   |-- secret.example.yaml
|   `-- service.yaml
|-- public/
|-- backups/
|   `-- .gitkeep
|-- logs/
|   `-- .gitkeep
|-- scripts/
|   |-- backup.sh
|   |-- cleanup-logs.sh
|   |-- install-cron.sh
|   `-- monitor-system.sh
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
|-- docker-compose.yml
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

## Testes Automatizados

O projeto usa Vitest com Testing Library para validar comportamento da aplicacao e evidencias importantes do projeto DevOps.

Execute os testes com:

```bash
npm run test
```

Os testes atuais verificam:

- renderizacao da aplicacao principal sem quebrar
- exibicao de textos operacionais importantes do dashboard
- renderizacao acessivel do botao de tema
- existencia de arquivos de evidencia DevOps, como `docker-compose.yml`, manifests em `k8s/`, scripts em `scripts/` e workflow de CI
- conteudo essencial de Docker Compose, Kubernetes Deployment e GitHub Actions

Os testes nao exigem Docker, Kubernetes, Bash ou `kubectl` instalados localmente. O GitHub Actions executa `npm run test` como parte do pipeline de CI.

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

O projeto possui um `Dockerfile` multi-stage para producao:

1. Usa Node.js para instalar dependencias com `npm ci` e gerar o build com Vite.
2. Usa Nginx para servir os arquivos estaticos gerados em `dist/`.

Para validar localmente, e necessario ter Docker instalado, como Docker Desktop, WSL com Docker ou outro ambiente Linux com Docker Engine.

### Build da imagem

```bash
docker build -t linux-devops-dashboard .
```

### Execucao com Docker

```bash
docker run --name linux-devops-dashboard -p 8080:80 linux-devops-dashboard
```

Acesse no navegador:

```text
http://localhost:8080
```

Para parar e remover o container:

```bash
docker stop linux-devops-dashboard
docker rm linux-devops-dashboard
```

### Execucao com Docker Compose

O arquivo `docker-compose.yml` define o servico `linux-devops-dashboard`, faz build a partir do diretorio atual, expõe a porta `8080` do host para a porta `80` do Nginx e usa `restart: unless-stopped`.

```bash
docker compose up --build
```

Acesse:

```text
http://localhost:8080
```

Para parar:

```bash
docker compose down
```

### O que Docker demonstra neste projeto

- empacotamento da aplicacao frontend
- build reproduzivel com `npm ci`
- separacao entre etapa de build e runtime
- servidor Nginx leve para arquivos estaticos
- exposicao de portas entre host e container
- healthcheck simples no container via Docker Compose
- uso de `.dockerignore` para reduzir contexto de build e evitar arquivos desnecessarios

---

## Kubernetes

Os manifestos Kubernetes estao em `k8s/` e demonstram como executar o dashboard em um cluster.

Arquivos principais:

- `k8s/deployment.yaml`: Deployment com 2 replicas, probes HTTP e requests/limits de CPU e memoria
- `k8s/service.yaml`: Service `ClusterIP` expondo a porta 80 dentro do cluster
- `k8s/configmap.yaml`: configuracoes nao sensiveis como `APP_NAME`, `NODE_ENV` e `LOG_LEVEL`
- `k8s/secret.example.yaml`: exemplo com placeholders, sem segredos reais

Para validar localmente, e necessario ter `kubectl` e um cluster Kubernetes, como Docker Desktop Kubernetes, Minikube, Kind ou um cluster remoto.

### Aplicar os manifestos

```bash
kubectl apply -f k8s/
```

### Inspecionar recursos

```bash
kubectl get pods
kubectl get svc
kubectl get deployments
```

### Acessar com port-forward

```bash
kubectl port-forward svc/linux-devops-dashboard 8080:80
```

Acesse no navegador:

```text
http://localhost:8080
```

### Remover recursos

```bash
kubectl delete -f k8s/
```

### O que Kubernetes demonstra neste projeto

- declaracao de estado desejado com manifests YAML
- replicas para disponibilidade basica
- Service para descoberta interna da aplicacao
- ConfigMap para configuracao nao sensivel
- exemplo de Secret sem valores reais
- readinessProbe e livenessProbe para saude da aplicacao
- requests e limits para controle de recursos

---

## Automacao Linux

O arquivo `deploy.sh` existe como script inicial de deploy. Ele verifica recursos do sistema Linux, valida Docker/kubectl, executa build da imagem Docker e aplica o manifesto Kubernetes quando `kubectl` esta disponivel.

Tambem existem scripts operacionais em `scripts/` para demonstrar conceitos de Sistemas Operacionais Linux, automacao, logs, backup e agendamento com cron.

### Permissao de execucao

Em Linux, WSL ou Git Bash, conceda permissao de execucao com:

```bash
chmod +x scripts/*.sh
```

### Monitoramento do sistema

Executa uma coleta operacional e registra em `logs/system-monitor.log`.

```bash
./scripts/monitor-system.sh
```

O script coleta:

- data e horario
- hostname
- usuario atual
- uptime
- load average
- uso de memoria
- uso de disco
- quantidade de processos
- principais processos por CPU, quando disponivel

### Backup do projeto

Cria um backup `.tar.gz` timestampado em `backups/` e registra a execucao em `logs/backup.log`.

```bash
./scripts/backup.sh
```

O backup exclui arquivos gerados ou sensiveis, como `node_modules`, `dist`, `build`, `.git`, `backups`, `logs`, `.env` e `coverage`.

### Limpeza de logs

Remove arquivos `.log` antigos em `logs/` e registra a execucao em `logs/cleanup.log`.

```bash
./scripts/cleanup-logs.sh
```

Por padrao, a retencao e de 7 dias. Para alterar:

```bash
LOG_RETENTION_DAYS=3 ./scripts/cleanup-logs.sh
```

### Agendamento com cron

Instala uma entrada no cron para executar `scripts/monitor-system.sh` a cada 5 minutos.

```bash
./scripts/install-cron.sh
```

O script evita entradas duplicadas e registra a configuracao em `logs/cron-install.log`. Se `crontab` nao estiver disponivel, ele exibe um aviso claro.

Para conferir o cron instalado:

```bash
crontab -l
```

### Inspecao dos logs

```bash
ls -la logs
tail -n 50 logs/system-monitor.log
tail -n 50 logs/backup.log
tail -n 50 logs/cleanup.log
tail -n 50 logs/cron-install.log
```

Arquivos `.log` e backups `.tar.gz` sao gerados localmente e nao devem ser commitados. Apenas os arquivos `.gitkeep` mantem as pastas `logs/` e `backups/` versionadas.

### Conceitos de Sistemas Operacionais demonstrados

- processos e listagem com `ps`
- usuario atual e contexto de execucao com `whoami`
- hostname da maquina
- uptime do sistema
- load average via `/proc/loadavg`
- uso de memoria com `free`
- uso de disco com `df`
- automacao com Bash e `set -euo pipefail`
- persistencia de logs
- backup compactado com `tar`
- retencao e limpeza de arquivos com `find`
- agendamento de tarefas com cron

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
