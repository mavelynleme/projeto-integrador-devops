import {
  Activity,
  BookOpenText,
  Boxes,
  ClipboardCheck,
  Code2,
  FileCog,
  GitBranch,
  ScrollText,
  ServerCog,
  Terminal,
} from "lucide-react";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";
import ThemeToggle from "@/components/ThemeToggle";

const evidenceCards = [
  {
    title: "Git Flow",
    icon: GitBranch,
    text: "Fluxo com branches de desenvolvimento e features documentado no historico do projeto.",
  },
  {
    title: "Linux Scripts",
    icon: Terminal,
    text: "Automacoes em Bash para monitoramento, backup, limpeza de logs e instalacao em cron.",
  },
  {
    title: "CI/CD",
    icon: Code2,
    text: "Pipeline valida lint, testes, build, sintaxe dos scripts e build Docker.",
  },
  {
    title: "Docker",
    icon: Boxes,
    text: "Dockerfile e docker-compose empacotam o frontend estatico servido por Nginx.",
  },
  {
    title: "Kubernetes",
    icon: ServerCog,
    text: "Manifestos descrevem Deployment, Service, ConfigMap e Secret de exemplo.",
  },
  {
    title: "Automated Tests",
    icon: ClipboardCheck,
    text: "Vitest e Testing Library cobrem renderizacao e evidencias principais do repositorio.",
  },
  {
    title: "Logs and Monitoring",
    icon: ScrollText,
    text: "Scripts geram logs locais e mantem os arquivos produzidos fora do versionamento.",
  },
  {
    title: "Configuration Management",
    icon: FileCog,
    text: "Configuracoes ficam documentadas em .env.example e nos manifestos Kubernetes.",
  },
  {
    title: "Documentation",
    icon: BookOpenText,
    text: "README e docs registram avaliacao, roteiro de apresentacao e prontidao final.",
  },
];

function EvidenceCard({
  title,
  text,
  icon: Icon,
}: {
  title: string;
  text: string;
  icon: typeof GitBranch;
}) {
  return (
    <article className="group relative overflow-hidden rounded-lg border border-border bg-gradient-card p-5 shadow-card backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:shadow-glow">
      <div className="pointer-events-none absolute inset-0 bg-gradient-glow opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="relative">
        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/70 text-primary transition-transform duration-300 group-hover:rotate-3 group-hover:scale-105">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </div>
        <h2 className="text-base font-bold text-foreground">{title}</h2>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
      </div>
    </article>
  );
}

const Index = () => (
  <div className="min-h-screen bg-background text-foreground">
    <header className="relative overflow-hidden border-b border-border">
      <img
        src={heroBg}
        alt="Sala de servidores futurista"
        width={1536}
        height={640}
        className="absolute inset-0 h-full w-full object-cover opacity-35"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/35 via-background/75 to-background" />
      <div className="relative mx-auto max-w-[1400px] px-6 py-10 md:py-14">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            <span className="inline-block h-2 w-2 animate-glow-pulse rounded-full bg-primary shadow-glow" />
            Projeto DevOps e Sistemas Operacionais
          </div>
          <ThemeToggle />
        </div>

        <div className="grid gap-8 py-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
          <div className="animate-fade-in">
            <h1 className="max-w-4xl text-4xl font-black leading-tight md:text-6xl">
              Evidencias de{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                DevOps e Infraestrutura
              </span>
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
              Landing page academica para apresentar os artefatos do projeto: Git Flow, automacao Linux,
              CI/CD, Docker, Kubernetes, testes, logs, configuracao e documentacao.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                to="/dashboard"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-bold uppercase tracking-wider text-primary-foreground shadow-glow transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <Activity className="h-4 w-4" aria-hidden="true" />
                Acessar Dashboard
              </Link>
            </div>
          </div>

          <aside className="rounded-lg border border-primary/30 bg-secondary/40 p-5 text-sm leading-relaxed text-muted-foreground shadow-card backdrop-blur-md">
            <p className="font-bold uppercase tracking-[0.2em] text-primary">Aviso honesto</p>
            <p className="mt-3">
              As metricas do dashboard sao dados simulados/demo. A automacao operacional existe nos scripts Linux,
              no pipeline CI/CD, no Docker e nos manifestos Kubernetes.
            </p>
          </aside>
        </div>
      </div>
    </header>

    <main className="mx-auto max-w-[1400px] px-6 py-8">
      <section aria-labelledby="evidence-heading">
        <div className="mb-5">
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-primary">Evidencias do projeto</p>
          <h2 id="evidence-heading" className="mt-1 text-2xl font-black text-foreground">
            Artefatos avaliaveis
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {evidenceCards.map((card) => (
            <EvidenceCard key={card.title} {...card} />
          ))}
        </div>
      </section>
    </main>
  </div>
);

export default Index;
