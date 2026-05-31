# Evaluation Checklist

This checklist reflects the current repository state. Items marked as Partial or Pending still need implementation or validation before the final presentation.

| Requirement | Status | Evidence | Missing work |
| --- | --- | --- | --- |
| Git/Git Flow | Partial | Remote branches include `develop` and `feature/*`; current branch flow still needs standardization. | Document branch strategy and continue work through feature branches and pull requests. |
| Linux OS automation | Partial, improved | `scripts/monitor-system.sh` collects date, hostname, user, uptime, load average, memory, disk and process data. `scripts/install-cron.sh` documents scheduled execution. | Validate on the target Linux environment and capture demo evidence. |
| Shell scripts | Partial, improved | `deploy.sh`, `scripts/monitor-system.sh`, `scripts/backup.sh`, `scripts/cleanup-logs.sh` and `scripts/install-cron.sh` exist. CI validates script syntax with `bash -n` without executing the scripts. | Add presentation notes explaining each script and expected output. |
| Docker | Partial, improved | `Dockerfile` builds the Vite app into an Nginx image, `docker-compose.yml` exposes the dashboard on port 8080, `.dockerignore` excludes generated files and CI validates `docker build` on Ubuntu. | Validate image run/compose locally in an environment with Docker installed and capture demo evidence. |
| Kubernetes | Partial, improved | `k8s/deployment.yaml`, `k8s/service.yaml`, `k8s/configmap.yaml` and `k8s/secret.example.yaml` exist. The Deployment uses 2 replicas, HTTP readiness/liveness probes and resource requests/limits. The Service exposes port 80 through ClusterIP. README documents `kubectl apply -f k8s/`, inspection commands and port-forward access. | Validate against a real Kubernetes cluster and capture demo evidence. |
| CI/CD | Partial | `.github/workflows/ci.yaml` runs install, lint, test and build. | Confirm workflow passes in GitHub Actions. |
| Automated tests | Partial, improved | Vitest and Testing Library are configured. `npm run test` runs in GitHub Actions. Tests validate app rendering, dashboard operational labels, the theme toggle and DevOps evidence files such as `docker-compose.yml`, `k8s/deployment.yaml`, `scripts/monitor-system.sh` and `.github/workflows/ci.yaml`. | Expand tests further if dashboard data becomes dynamic or a backend/API is added. |
| Logs and monitoring | Partial, improved | `logs/.gitkeep` keeps the folder tracked; scripts append to `logs/system-monitor.log`, `logs/backup.log`, `logs/cleanup.log` and `logs/cron-install.log` at runtime. | Run scripts on Linux and include generated log examples in the demo, without committing generated `.log` files. |
| Configuration management | Partial | `.env.example` documents initial variables. | Wire environment variables where appropriate and document usage. |
| Documentation | Partial | `README.md` and this checklist exist. | Add final demo guide, architecture notes and setup/troubleshooting details. |
