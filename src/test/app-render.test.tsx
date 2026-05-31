import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import App from "@/App";
import ThemeToggle from "@/components/ThemeToggle";

describe("application rendering", () => {
  beforeEach(() => {
    window.history.pushState({}, "", "/");
  });

  it("renders the landing page at the root route", () => {
    render(<App />);

    expect(screen.getByRole("heading", { name: /evidencias de devops e infraestrutura/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /acessar dashboard/i })).toHaveAttribute("href", "/dashboard");
    expect(screen.getByText(/metricas do dashboard sao dados simulados\/demo/i)).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Git Flow" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Kubernetes" })).toBeInTheDocument();
  });

  it("renders the dashboard at /dashboard with operational labels", () => {
    window.history.pushState({}, "", "/dashboard");

    render(<App />);

    expect(screen.getByRole("heading", { name: /monitor de sistemas operacionais/i })).toBeInTheDocument();
    expect(screen.getByText("RAM")).toBeInTheDocument();
    expect(screen.getByText("CPU")).toBeInTheDocument();
    expect(screen.getAllByText("Uptime").length).toBeGreaterThan(0);
    expect(screen.getByText("Sistema online")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /voltar ao início/i })).toHaveAttribute("href", "/");
  });

  it("renders the theme toggle as an accessible button", () => {
    localStorage.clear();

    render(<ThemeToggle />);

    expect(screen.getByRole("button", { name: /ativar tema/i })).toBeInTheDocument();
  });
});
