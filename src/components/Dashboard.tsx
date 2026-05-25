import { useEffect, useState } from "react";
import {
  Activity,
  HardDrive,
  Monitor,
  Server,
  Timer,
  User,
} from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import iconCpu from "@/assets/icon-cpu.png";
import iconRam from "@/assets/icon-ram.png";
import iconNetwork from "@/assets/icon-network.png";
import ThemeToggle from "./ThemeToggle";

const SYSTEM = {
  hostname: "lab5-08",
  platform: "win32",
  arch: "x64",
  totalMemMB: 15741,
  freeMemMB: 8900,
  cpus: 12,
  uptimeMinutes: 36,
  cpuModel: "Intel Core i7-12700",
  release: "10.0.22631",
  os: "Windows",
  user: "lab5",
  ip: "192.168.1.108",
  nodeVersion: "v20.11.1",
  port: 3000,
};

const usedMemMB = SYSTEM.totalMemMB - SYSTEM.freeMemMB;
const memPercent = Math.round((usedMemMB / SYSTEM.totalMemMB) * 100);
const totalGB = (SYSTEM.totalMemMB / 1024).toFixed(2);
const usedGB = (usedMemMB / 1024).toFixed(2);
const freeGB = (SYSTEM.freeMemMB / 1024).toFixed(2);

const formatUptime = (min: number) => {
  const d = Math.floor(min / 1440);
  const h = Math.floor((min % 1440) / 60);
  const m = min % 60;
  return `${d}d ${h}h ${m}m`;
};

const coreUsages = Array.from({ length: SYSTEM.cpus }, (_, i) => 25 + ((i * 37) % 55));
const cpuAverage = Math.round(coreUsages.reduce((a, b) => a + b, 0) / coreUsages.length);

function GlowCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`group relative rounded-2xl border border-border bg-gradient-card p-5 shadow-card backdrop-blur-md transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-[1.02] hover:border-primary/60 hover:shadow-glow ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-glow opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="relative">{children}</div>
    </div>
  );
}

function Stat({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
  return (
    <GlowCard className="text-center">
      <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{label}</p>
      <p
        className={`mt-2 text-2xl font-bold tabular-nums ${
          accent ? "text-status-success" : "text-foreground"
        }`}
      >
        {value}
      </p>
    </GlowCard>
  );
}

function Row({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="flex justify-between gap-3 border-b border-border/40 py-1.5 text-[13px] last:border-0">
      <span className="text-muted-foreground">{label}</span>
      <span className="font-medium text-foreground">{value}</span>
    </div>
  );
}

function Bar({ percent, color = "bg-primary" }: { percent: number; color?: string }) {
  return (
    <div className="h-1.5 w-full overflow-hidden rounded-full bg-secondary">
      <div
        className={`h-full rounded-full ${color} transition-all duration-700`}
        style={{
          width: `${percent}%`,
          boxShadow: "0 0 10px hsl(var(--primary) / 0.6)",
        }}
      />
    </div>
  );
}

function SectionTitle({
  icon,
  title,
  iconClass = "",
}: {
  icon: React.ReactNode;
  title: string;
  iconClass?: string;
}) {
  return (
    <div className="mb-4 flex items-center gap-3">
      <div
        className={`flex h-10 w-10 items-center justify-center rounded-xl bg-secondary/60 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110 ${iconClass}`}
      >
        {icon}
      </div>
      <h3 className="text-sm font-bold uppercase tracking-wider text-foreground">{title}</h3>
    </div>
  );
}

export default function Dashboard() {
  const [uptime, setUptime] = useState(SYSTEM.uptimeMinutes);
  useEffect(() => {
    const id = setInterval(() => setUptime((u) => u + 1), 60_000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <header className="relative overflow-hidden border-b border-border">
        <img
          src={heroBg}
          alt="Sala de servidores futurista"
          width={1536}
          height={640}
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
        <div className="relative mx-auto max-w-[1400px] px-6 py-14 animate-fade-in">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              <span className="inline-block h-2 w-2 animate-glow-pulse rounded-full bg-primary shadow-glow" />
              Sistema online
            </div>
            <ThemeToggle />
          </div>
          <h1 className="mt-3 text-4xl font-black leading-tight md:text-6xl">
            Monitor de{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Sistemas Operacionais
            </span>
          </h1>
          <p className="mt-3 max-w-xl text-sm text-muted-foreground md:text-base">
            Visão em tempo real de <span className="text-foreground">{SYSTEM.hostname}</span> ·{" "}
            {SYSTEM.platform} · {SYSTEM.arch}
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-[1400px] space-y-6 px-6 py-8">
        {/* Stats */}
        <section className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          <Stat label="RAM" value={`${memPercent}%`} />
          <Stat label="CPU" value={`${cpuAverage}%`} />
          <Stat label="Uptime" value={formatUptime(uptime)} />
          <Stat label="CPUs" value={String(SYSTEM.cpus)} />
          <Stat label="IP" value={SYSTEM.ip} />
          <Stat label="Status" value="NORMAL" accent />
        </section>

        {/* Hero feature cards with images */}
        <section className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          <GlowCard>
            <SectionTitle
              icon={
                <img
                  src={iconCpu}
                  alt="CPU"
                  width={40}
                  height={40}
                  loading="lazy"
                  className="h-10 w-10 animate-float object-contain"
                />
              }
              title="Processador"
            />
            <Row label="Modelo" value={SYSTEM.cpuModel} />
            <Row label="Núcleos" value={SYSTEM.cpus} />
            <Row label="Uso médio" value={`${cpuAverage}%`} />
            <div className="mt-3 grid grid-cols-2 gap-x-3 gap-y-2">
              {coreUsages.map((u, i) => (
                <div key={i}>
                  <div className="flex justify-between text-[11px] text-muted-foreground">
                    <span>Core {i}</span>
                    <span className="font-semibold text-foreground">{u}%</span>
                  </div>
                  <Bar percent={u} />
                </div>
              ))}
            </div>
          </GlowCard>

          <GlowCard>
            <SectionTitle
              icon={
                <img
                  src={iconRam}
                  alt="RAM"
                  width={40}
                  height={40}
                  loading="lazy"
                  className="h-10 w-10 animate-float object-contain"
                />
              }
              title="Memória RAM"
            />
            <Row label="Total" value={`${totalGB} GB`} />
            <Row label="Usada" value={`${usedGB} GB`} />
            <Row label="Livre" value={`${freeGB} GB`} />
            <div className="mt-6 flex flex-col items-center">
              <div className="relative flex h-36 w-36 items-center justify-center">
                <svg className="h-full w-full -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="42" stroke="hsl(var(--secondary))" strokeWidth="10" fill="none" />
                  <circle
                    cx="50"
                    cy="50"
                    r="42"
                    stroke="hsl(var(--primary))"
                    strokeWidth="10"
                    fill="none"
                    strokeDasharray={`${(memPercent / 100) * 263.9} 263.9`}
                    strokeLinecap="round"
                    style={{ filter: "drop-shadow(0 0 6px hsl(var(--primary)))" }}
                  />
                </svg>
                <div className="absolute text-center">
                  <div className="text-3xl font-black tabular-nums">{memPercent}%</div>
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground">em uso</div>
                </div>
              </div>
            </div>
          </GlowCard>

          <GlowCard>
            <SectionTitle
              icon={
                <img
                  src={iconNetwork}
                  alt="Rede"
                  width={40}
                  height={40}
                  loading="lazy"
                  className="h-10 w-10 animate-float object-contain"
                />
              }
              title="Rede"
            />
            <Row label="IP Principal" value={SYSTEM.ip} />
            <Row label="Hostname" value={SYSTEM.hostname} />
            <Row label="Porta" value={SYSTEM.port} />
            <Row label="Status" value={<span className="text-status-success">● Conectado</span>} />
            <div className="mt-4 rounded-lg border border-border bg-secondary/30 p-3 font-mono text-[11px] text-muted-foreground">
              <div>$ ping {SYSTEM.ip}</div>
              <div className="text-status-success">↳ 64 bytes · time=0.4ms</div>
              <div>$ uname -s</div>
              <div className="text-foreground">↳ {SYSTEM.platform}</div>
            </div>
          </GlowCard>
        </section>

        {/* Info cards */}
        <section className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          <GlowCard>
            <SectionTitle
              icon={<Server className="h-5 w-5 text-primary" />}
              title="Sistema"
            />
            <Row label="Host" value={SYSTEM.hostname} />
            <Row label="SO" value={SYSTEM.os} />
            <Row label="Release" value={SYSTEM.release} />
            <Row label="Plataforma" value={SYSTEM.platform} />
            <Row label="Arquitetura" value={SYSTEM.arch} />
            <Row label="Node" value={SYSTEM.nodeVersion} />
          </GlowCard>

          <GlowCard>
            <SectionTitle
              icon={<User className="h-5 w-5 text-primary" />}
              title="Usuário"
            />
            <Row label="Usuário" value={SYSTEM.user} />
            <Row label="Home" value="C:\\Users\\lab5" />
            <Row label="Shell" value="powershell" />
            <Row label="Temp" value="C:\\Temp" />
          </GlowCard>

          <GlowCard>
            <SectionTitle
              icon={<Timer className="h-5 w-5 text-primary" />}
              title="Tempo"
            />
            <Row label="Uptime" value={formatUptime(uptime)} />
            <Row label="Timezone" value="America/Sao_Paulo" />
            <Row label="Iniciado" value="há pouco" />
          </GlowCard>

          <GlowCard>
            <SectionTitle
              icon={<Monitor className="h-5 w-5 text-primary" />}
              title="Aplicação"
            />
            <Row label="PID" value="4821" />
            <Row label="Porta" value={SYSTEM.port} />
            <Row label="NODE_ENV" value="development" />
            <Row label="Memória" value="68.4 MB" />
          </GlowCard>
        </section>

        <footer className="flex items-center justify-center gap-2 pb-4 pt-6 text-xs text-muted-foreground">
          <Activity className="h-3 w-3 text-primary" />
          SO Dashboard · {SYSTEM.hostname} · {new Date().getFullYear()}
          <HardDrive className="ml-2 h-3 w-3" />
        </footer>
      </main>
    </div>
  );
}