# Evaluation Checklist

This checklist reflects the current repository state. Items marked as Partial or Pending still need implementation or validation before the final presentation.

| Requirement | Status | Evidence | Missing work |
| --- | --- | --- | --- |
| Git/Git Flow | Partial | Remote branches include `develop` and `feature/*`; current branch flow still needs standardization. | Document branch strategy and continue work through feature branches and pull requests. |
| Linux OS automation | Partial | `deploy.sh` checks memory, disk, Docker and kubectl on Linux. | Add focused Linux automation examples and explain the operating system concepts demonstrated. |
| Shell scripts | Partial | `deploy.sh` exists. | Add organized scripts for monitoring, backup and log collection in a future step. |
| Docker | Partial | `Dockerfile` exists and builds the Vite app into an Nginx image. | Validate image build/run locally and document demo commands. |
| Kubernetes | Partial | `k8s/deployment.yaml` defines Deployment and Service. | Validate in a local cluster and document apply/access commands. |
| CI/CD | Partial | `.github/workflows/ci.yaml` runs install, lint, test and build. | Confirm workflow passes in GitHub Actions. |
| Automated tests | Partial | Vitest is configured and basic example tests exist. | Add meaningful tests for application behavior. |
| Logs and monitoring | Pending | Dashboard shows mocked monitoring values; `deploy.sh` prints system info. | Add log collection/storage and monitoring evidence for the demo. |
| Configuration management | Partial | `.env.example` documents initial variables. | Wire environment variables where appropriate and document usage. |
| Documentation | Partial | `README.md` and this checklist exist. | Add final demo guide, architecture notes and setup/troubleshooting details. |
