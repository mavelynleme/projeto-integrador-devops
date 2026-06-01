# Roteiro de Apresentação



## 1. Introdução do Projeto

- Apresentar o nome do projeto: Linux DevOps Monitoring Dashboard.
- Explicar que a aplicação é um dashboard React/Vite/TypeScript.
- Esclarecer que as métricas do dashboard são simuladas no frontend atualmente, e que o foco do projeto é o ecossistema de DevOps e Sistemas Operacionais ao redor da aplicação.
- Mostrar as principais pastas do repositório: `src/`, `scripts/`, `k8s/`, `.github/workflows/`, `docs/`, `logs/` e `backups/`.

## 2. Demonstração de Git Flow

Comandos sugeridos:

```bash
git branch -a
git log --oneline --graph --decorate -n 10
```

Pontos de fala:

- Explicar o papel de `develop` como branch de integração.
- Explicar branches de feature, como `feature/nome-da-etapa`.
- Explicar que Pull Requests para `develop` acionam o CI.

## 3. Demonstração do Dashboard

Comandos sugeridos:

```bash
npm ci
npm run dev
```

Pontos de fala:

- Abrir a URL local do Vite.
- Mostrar o título do dashboard e rótulos operacionais como CPU, RAM e uptime.
- Explicar que o layout foi preservado enquanto recursos de DevOps foram adicionados ao redor dele.

## 4. Demonstração dos Scripts Linux

Comandos sugeridos em Linux, WSL ou Git Bash:

```bash
chmod +x scripts/*.sh
bash -n scripts/*.sh
./scripts/monitor-system.sh
./scripts/backup.sh
./scripts/cleanup-logs.sh
```

Pontos de fala:

- `monitor-system.sh` coleta hostname, usuário, uptime, load average, memória, disco e dados de processos.
- `backup.sh` cria um backup `.tar.gz` com timestamp.
- `cleanup-logs.sh` remove logs antigos com base na retenção.
- `install-cron.sh` instala o monitoramento a cada 5 minutos quando `crontab` existe.

## 5. Demonstração de Logs

Comandos sugeridos:

```bash
ls -la logs backups
tail -n 50 logs/system-monitor.log
tail -n 50 logs/backup.log
```

Pontos de fala:

- Logs são gerados localmente e ignorados pelo Git.
- `.gitkeep` mantém pastas vazias de evidência no repositório.
- Backups são gerados localmente em `backups/` e ignorados pelo Git.

## 6. Demonstração de Testes

Comando sugerido:

```bash
npm run test
```

Pontos de fala:

- Vitest é o test runner.
- Testing Library valida comportamentos visíveis da aplicação para o usuário.
- Os testes também validam arquivos de evidência DevOps sem exigir Docker, Kubernetes, Bash ou kubectl.

## 7. Demonstração de CI/CD

Locais sugeridos para mostrar:

- `.github/workflows/ci.yaml`
- Aba GitHub Actions no repositório

Pontos de fala:

- O CI roda em `develop`, `master` e `main`.
- O CI executa instalação, lint, testes, validação de sintaxe shell, build frontend e build Docker.
- O pipeline valida qualidade, mas não faz deploy nem envia imagens.

## 8. Explicação e Demonstração com Docker

Comandos sugeridos quando Docker estiver disponível:

```bash
docker build -t linux-devops-dashboard .
docker run --name linux-devops-dashboard -p 8080:80 linux-devops-dashboard
docker compose up --build
```

Pontos de fala:

- O Dockerfile usa multi-stage build.
- Node gera o build da aplicação Vite.
- Nginx serve arquivos estáticos.
- Docker Compose expõe a porta `8080` no host e inclui um healthcheck.

## 9. Explicação e Demonstração com Kubernetes

Comandos sugeridos quando `kubectl` e um cluster estiverem disponíveis:

```bash
kubectl apply -f k8s/
kubectl get pods
kubectl get svc
kubectl get deployments
kubectl port-forward svc/linux-devops-dashboard 8080:80
```

Pontos de fala:

- O Deployment usa 2 réplicas.
- readinessProbe e livenessProbe verificam `/`.
- O Service expõe a porta 80 dentro do cluster.
- ConfigMap armazena configurações não sensíveis.
- O arquivo de Secret é apenas exemplo e não contém segredos reais.

Limpeza:

```bash
kubectl delete -f k8s/
```

## 10. Conclusão Final

- Resumir que o projeto demonstra uma trilha completa de aprendizado DevOps ao redor de uma aplicação frontend.
- Mencionar o que está completo: CI, testes, build Docker, Docker Compose, manifests Kubernetes, scripts Linux, logs/backups e documentação.
- Mencionar limitações com transparência: ausência de backend API, métricas do dashboard simuladas e necessidade de ferramentas locais ou ambiente remoto para demonstrações com Docker/Kubernetes.
- Apresentar melhorias futuras: API de métricas reais, publicação em registry, deploy em cluster real e stack de observabilidade.
