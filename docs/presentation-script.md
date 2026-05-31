# Presentation Script

Use this roteiro as a practical guide for the final presentation. Adapt timing to the class format.

## 1. Project Introduction

- Present the project name: Linux DevOps Monitoring Dashboard.
- Explain that the application is a React/Vite/TypeScript dashboard.
- Clarify that the dashboard metrics are simulated in the frontend today, and the project focus is the DevOps and Operating Systems ecosystem around the app.
- Show the main repository folders: `src/`, `scripts/`, `k8s/`, `.github/workflows/`, `docs/`, `logs/` and `backups/`.

## 2. Git Flow Demonstration

Suggested commands:

```bash
git branch -a
git log --oneline --graph --decorate -n 10
```

Talking points:

- Explain the role of `develop` as the integration branch.
- Explain feature branches such as `feature/nome-da-etapa`.
- Explain that Pull Requests into `develop` trigger CI.

## 3. Dashboard Demonstration

Suggested commands:

```bash
npm ci
npm run dev
```

Talking points:

- Open the local Vite URL.
- Show the dashboard title and operational labels such as CPU, RAM and uptime.
- Explain that the layout was preserved while DevOps features were added around it.

## 4. Linux Scripts Demonstration

Suggested commands on Linux, WSL or Git Bash:

```bash
chmod +x scripts/*.sh
bash -n scripts/*.sh
./scripts/monitor-system.sh
./scripts/backup.sh
./scripts/cleanup-logs.sh
```

Talking points:

- `monitor-system.sh` collects hostname, user, uptime, load average, memory, disk and process data.
- `backup.sh` creates a timestamped `.tar.gz` backup.
- `cleanup-logs.sh` removes old logs based on retention.
- `install-cron.sh` installs monitoring every 5 minutes when `crontab` exists.

## 5. Logs Demonstration

Suggested commands:

```bash
ls -la logs backups
tail -n 50 logs/system-monitor.log
tail -n 50 logs/backup.log
```

Talking points:

- Logs are generated locally and ignored by Git.
- `.gitkeep` keeps empty evidence folders in the repository.
- Backups are generated locally under `backups/` and ignored by Git.

## 6. Tests Demonstration

Suggested command:

```bash
npm run test
```

Talking points:

- Vitest is the test runner.
- Testing Library validates user-visible app behavior.
- Tests also validate DevOps evidence files without requiring Docker, Kubernetes, Bash or kubectl.

## 7. CI/CD Demonstration

Suggested place to show:

- `.github/workflows/ci.yaml`
- GitHub Actions tab in the repository

Talking points:

- CI runs on `develop`, `master` and `main`.
- CI executes install, lint, tests, shell syntax validation, frontend build and Docker build.
- The pipeline validates quality but does not deploy or push images.

## 8. Docker Explanation and Demo

Suggested commands when Docker is available:

```bash
docker build -t linux-devops-dashboard .
docker run --name linux-devops-dashboard -p 8080:80 linux-devops-dashboard
docker compose up --build
```

Talking points:

- Dockerfile uses multi-stage build.
- Node builds the Vite app.
- Nginx serves static files.
- Docker Compose exposes port `8080` on the host and includes a healthcheck.

## 9. Kubernetes Explanation and Demo

Suggested commands when kubectl and a cluster are available:

```bash
kubectl apply -f k8s/
kubectl get pods
kubectl get svc
kubectl get deployments
kubectl port-forward svc/linux-devops-dashboard 8080:80
```

Talking points:

- Deployment uses 2 replicas.
- Readiness and liveness probes check `/`.
- Service exposes port 80 inside the cluster.
- ConfigMap stores non-sensitive config.
- Secret file is example-only and does not contain real secrets.

Cleanup:

```bash
kubectl delete -f k8s/
```

## 10. Final Conclusion

- Summarize that the project demonstrates a complete DevOps learning path around a frontend app.
- Mention what is complete: CI, tests, Docker build, Docker Compose, Kubernetes manifests, Linux scripts, logs/backups and documentation.
- Mention honest limitations: no backend API, dashboard metrics are simulated, Docker/Kubernetes demos require local tools or a remote environment.
- Present future improvements: real metrics API, registry publishing, real cluster deploy and observability stack.
