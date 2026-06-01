# Linux DevOps Monitoring Dashboard

Projeto Integrador de DevOps e Sistemas Operacionais com uma aplicação frontend em React/Vite/TypeScript e evidências práticas de Git Flow, automação Linux, Shell Script, Docker, Kubernetes, CI/CD, testes automatizados, logs, backups, configuração e documentação.

> O dashboard visual foi preservado durante as etapas de DevOps. Os dados exibidos na interface ainda são simulados no frontend; não existe backend ou API neste repositório.

## Objetivo

Demonstrar, em um projeto academico, como uma aplicação web pode ser organizada com práticas de DevOps e conceitos de Sistemas Operacionais Linux. O foco do trabalho não é apenas a interface, mas o ecossistema ao redor dela: automação, containerização, orquestração, pipeline, testes, logs e documentação.

## Contexto Acadêmico 

Este projeto atende a critérios comuns de avaliação em disciplinas de DevOps e Sistemas Operacionais:

- Git e Git Flow
- Conceitos de Linux
- Automação com Shell Script
- Docker
- Kubernetes
- CI/CD com GitHub Actions
- Testes automatizados
- Logs e monitoramento
- Gerenciamento de configuração 
- Documentação e prontidão para apresentação 

## Tecnologias

| Area | Tecnologias |
| --- | --- |
| Frontend | React, Vite, TypeScript |
| UI | Tailwind CSS, Radix UI/shadcn-style components, Lucide React |
| Testes | Vitest, Testing Library, jsdom |
| Qualidade | ESLint |
| CI/CD | GitHub Actions |
| Linux | Bash, cron, comandos GNU/Linux |
| Containers | Docker, Docker Compose, Nginx |
| Kubernetes | Deployment, Service, ConfigMap, Secret example |
| Configuracao | `.env.example`, ConfigMap Kubernetes |

## Arquitetura

```text
Usuario
  |
  v
React/Vite Dashboard
  |
  v
Build estatico em dist/
  |
  v
Nginx no container Docker
  |
  v
Docker Compose ou Kubernetes Service
```

O dashboard e uma aplicação frontend estatica. O Dockerfile gera o build com Node.js e serve o resultado com Nginx. No Kubernetes, o Deployment usa a imagem `linux-devops-dashboard:latest` e o Service expõe a aplicação dentro do cluster.

## Estrutura

```text
.
|-- .github/workflows/ci.yaml
|-- backups/.gitkeep
|-- docs/
|   |-- evaluation-checklist.md
|   `-- presentation-script.md
|-- k8s/
|   |-- configmap.yaml
|   |-- deployment.yaml
|   |-- secret.example.yaml
|   `-- service.yaml
|-- logs/.gitkeep
|-- public/
|-- scripts/
|   |-- backup.sh
|   |-- cleanup-logs.sh
|   |-- install-cron.sh
|   `-- monitor-system.sh
|-- src/
|   |-- assets/
|   |-- components/
|   |-- pages/
|   `-- test/
|-- .dockerignore
|-- .env.example
|-- .gitattributes
|-- Dockerfile
|-- docker-compose.yml
|-- package.json
|-- package-lock.json
|-- README.md
|-- vite.config.ts
`-- vitest.config.ts
```

## Git Flow

O repositorio possui historico com branches como `develop` e `feature/*`. A estrategia recomendada para a demonstracao e:

```bash
git checkout develop
git checkout -b feature/nome-da-etapa
git add .
git commit -m "feat: descreve a melhoria"
git push origin feature/nome-da-etapa
```

Pull Requests devem ser abertos para `develop`. O CI esta configurado para rodar em `develop`, `master` e `main`, tanto em `push` quanto em `pull_request`.

## Ambiente Local

Instale dependências:

```bash
npm ci
```

Execute em desenvolvimento:

```bash
npm run dev
```

Validações principais:

```bash
npm run lint
npm run test
npm run build
```

## Variáveis de Ambiente

O arquivo `.env.example` documenta variaveis seguras:

```env
VITE_APP_NAME="Projeto Integrador DevOps"
VITE_API_BASE_URL=""
NODE_ENV="development"
```

Atualmente o dashboard nao consome API real. `VITE_API_BASE_URL` fica reservado para uma futura integracao.

## Testes Automatizados

O projeto usa Vitest com Testing Library.

```bash
npm run test
```

Os testes verificam:

- renderização da aplicação principal
- textos operacionais do dashboard
- botão de tema como controle acessivel
- existência de evidências DevOps, como Docker Compose, manifests Kubernetes, scripts Linux e workflow de CI
- trechos essenciais de Docker Compose, Kubernetes Deployment e GitHub Actions

Os testes não exigem Docker, Kubernetes, Bash ou `kubectl`.

## CI/CD

Workflow: `.github/workflows/ci.yaml`

O GitHub Actions executa:

1. `npm ci`
2. `npm run lint`
3. `npm run test`
4. `bash -n` nos scripts shell
5. `npm run build`
6. `docker build -t linux-devops-dashboard:ci .`

O pipeline não faz deploy e não envia imagem para registry.

## Linux e Shell Scripts

Os scripts ficam em `scripts/` e usam Bash com `set -euo pipefail`.

Dar permissão de execução em Linux, WSL ou Git Bash:

```bash
chmod +x scripts/*.sh
```

Validar sintaxe sem executar:

```bash
bash -n scripts/monitor-system.sh
bash -n scripts/backup.sh
bash -n scripts/cleanup-logs.sh
bash -n scripts/install-cron.sh
```

Executar monitoramento:

```bash
./scripts/monitor-system.sh
```

Criar backup:

```bash
./scripts/backup.sh
```

Limpar logs antigos:

```bash
./scripts/cleanup-logs.sh
LOG_RETENTION_DAYS=3 ./scripts/cleanup-logs.sh
```

Instalar cron para monitoramento a cada 5 minutos:

```bash
./scripts/install-cron.sh
crontab -l
```

Conceitos demonstrados:

- processos com `ps`
- usuario com `whoami`
- hostname com `hostname`
- uptime e load average
- memoria com `free`
- disco com `df`
- `/proc/loadavg`
- compactacao com `tar`
- limpeza com `find`
- agendamento com cron

## Logs e Backups

Diretorios versionados:

- `logs/.gitkeep`
- `backups/.gitkeep`

Arquivos gerados localmente não devem ser commitados:

- `logs/*.log`
- `backups/*.tar.gz`

Inspeção:

```bash
ls -la logs backups
tail -n 50 logs/system-monitor.log
tail -n 50 logs/backup.log
tail -n 50 logs/cleanup.log
tail -n 50 logs/cron-install.log
```

## Docker

O Dockerfile usa multi-stage build:

1. `node:20-alpine` instala dependencias com `npm ci` e executa o build.
2. `nginx:1.25-alpine` serve os arquivos estaticos.

Docker local requer Docker Desktop, Docker Engine, WSL com Docker ou ambiente equivalente.

Build:

```bash
docker build -t linux-devops-dashboard .
```

Run:

```bash
docker run --name linux-devops-dashboard -p 8080:80 linux-devops-dashboard
```

Acesso:

```text
http://localhost:8080
```

Parar/remover:

```bash
docker stop linux-devops-dashboard
docker rm linux-devops-dashboard
```

Docker Compose:

```bash
docker compose up --build
docker compose down
```

## Kubernetes

Manifests em `k8s/`:

- `deployment.yaml`: 2 replicas, probes HTTP e requests/limits
- `service.yaml`: Service `ClusterIP` na porta 80
- `configmap.yaml`: `APP_NAME`, `NODE_ENV`, `LOG_LEVEL`
- `secret.example.yaml`: exemplo sem segredos reais

Validação local requer `kubectl` e um cluster, como Docker Desktop Kubernetes, Minikube, Kind ou cluster remoto.

Aplicar:

```bash
kubectl apply -f k8s/
```

Inspecionar:

```bash
kubectl get pods
kubectl get svc
kubectl get deployments
```

Port-forward:

```bash
kubectl port-forward svc/linux-devops-dashboard 8080:80
```

Acesso:

```text
http://localhost:8080
```

Remover:

```bash
kubectl delete -f k8s/
```

## Comandos de Demonstração 

```bash
git branch -a
git log --oneline --graph --decorate -n 10
npm run lint
npm run test
npm run build
bash -n scripts/*.sh
docker build -t linux-devops-dashboard .
docker compose up --build
kubectl apply -f k8s/
kubectl get pods
kubectl port-forward svc/linux-devops-dashboard 8080:80
```

Docker e Kubernetes dependem de ferramentas locais instaladas. Em maquinas Windows, use Docker Desktop, WSL, Minikube, Kind ou um cluster remoto.


## Validação local com Docker e Kubernetes

A validacao local registrou o build Docker da aplicacao, a execucao com Docker Compose em `http://localhost:8080` e o uso de um cluster Kubernetes local pelo Docker Desktop.

No Kubernetes, foram validados o Deployment com 2 replicas disponiveis, os Pods em estado `Running`, o Service do tipo `ClusterIP` e o acesso via port-forward em `http://localhost:8081`.

As evidencias completas, incluindo screenshots, estao em [docs/local-docker-kubernetes-validation.md](docs/local-docker-kubernetes-validation.md).

## Documentacao de Apoio

## Documentação de Apoio


- `docs/evaluation-checklist.md`: mapeamento dos criterios de avaliacao para evidencias.
- `docs/local-docker-kubernetes-validation.md`: validacao local com Docker, Docker Compose e Kubernetes.
- `docs/presentation-script.md`: roteiro para apresentacao.

## Melhorias Futuras

- backend/API real para coletar metricas do sistema
- integracao do dashboard com dados reais
- cobertura de testes mais ampla
- publicacao de imagem em registry
- deploy em cluster real
- observabilidade com ferramentas como Prometheus/Grafana
- documentacao de troubleshooting por ambiente
