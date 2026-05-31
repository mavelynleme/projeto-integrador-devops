import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "@/App";
import ThemeToggle from "@/components/ThemeToggle";

describe("application rendering", () => {
  it("renders the dashboard home page with operational labels", () => {
    render(<App />);

    expect(screen.getByRole("heading", { name: /monitor de sistemas operacionais/i })).toBeInTheDocument();
    expect(screen.getByText("RAM")).toBeInTheDocument();
    expect(screen.getByText("CPU")).toBeInTheDocument();
    expect(screen.getAllByText("Uptime").length).toBeGreaterThan(0);
    expect(screen.getByText("Sistema online")).toBeInTheDocument();
  });

  it("renders the theme toggle as an accessible button", () => {
    localStorage.clear();

    render(<ThemeToggle />);

    expect(screen.getByRole("button", { name: /ativar tema/i })).toBeInTheDocument();
  });
});
