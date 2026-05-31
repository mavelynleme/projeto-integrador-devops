import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

const projectFile = (path: string) => resolve(process.cwd(), path);
const readProjectFile = (path: string) => readFileSync(projectFile(path), "utf8");

describe("DevOps project evidence", () => {
  it("keeps important infrastructure files in the repository", () => {
    expect(existsSync(projectFile("docker-compose.yml"))).toBe(true);
    expect(existsSync(projectFile("k8s/deployment.yaml"))).toBe(true);
    expect(existsSync(projectFile("scripts/monitor-system.sh"))).toBe(true);
    expect(existsSync(projectFile(".github/workflows/ci.yaml"))).toBe(true);
  });

  it("documents core Docker runtime settings", () => {
    const composeFile = readProjectFile("docker-compose.yml");

    expect(composeFile).toContain("linux-devops-dashboard");
    expect(composeFile).toContain('"8080:80"');
    expect(composeFile).toContain("restart: unless-stopped");
  });

  it("documents core Kubernetes deployment settings", () => {
    const deploymentFile = readProjectFile("k8s/deployment.yaml");

    expect(deploymentFile).toContain("name: linux-devops-dashboard");
    expect(deploymentFile).toContain("replicas: 2");
    expect(deploymentFile).toContain("readinessProbe");
    expect(deploymentFile).toContain("livenessProbe");
    expect(deploymentFile).toContain("resources:");
  });

  it("keeps CI validation for tests, shell syntax and Docker build", () => {
    const workflowFile = readProjectFile(".github/workflows/ci.yaml");

    expect(workflowFile).toContain("npm run test");
    expect(workflowFile).toContain("bash -n scripts/monitor-system.sh");
    expect(workflowFile).toContain("docker build -t linux-devops-dashboard:ci .");
  });
});
