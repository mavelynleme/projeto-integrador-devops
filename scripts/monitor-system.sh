#!/usr/bin/env bash
set -euo pipefail

PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
LOG_DIR="${PROJECT_ROOT}/logs"
LOG_FILE="${LOG_DIR}/system-monitor.log"

mkdir -p "${LOG_DIR}"

log_section() {
  printf '\n[%s]\n' "$1"
}

run_or_warn() {
  local label="$1"
  shift

  log_section "${label}"
  if command -v "$1" >/dev/null 2>&1; then
    "$@" || printf 'Warning: command failed: %s\n' "$*"
  else
    printf 'Warning: command not found: %s\n' "$1"
  fi
}

{
  printf '============================================================\n'
  printf 'System monitor execution\n'
  printf 'Timestamp: '
  date '+%Y-%m-%d %H:%M:%S %z' || true

  run_or_warn "Hostname" hostname
  run_or_warn "Current user" whoami
  run_or_warn "Uptime" uptime

  log_section "Load average"
  if [[ -r /proc/loadavg ]]; then
    cat /proc/loadavg
  elif command -v uptime >/dev/null 2>&1; then
    uptime
  else
    printf 'Warning: load average unavailable\n'
  fi

  run_or_warn "Memory usage" free -h
  run_or_warn "Disk usage" df -h

  log_section "Process count"
  if command -v ps >/dev/null 2>&1; then
    ps -e --no-headers 2>/dev/null | wc -l || ps aux | wc -l
  else
    printf 'Warning: command not found: ps\n'
  fi

  log_section "Top processes by CPU"
  if command -v ps >/dev/null 2>&1; then
    ps -eo pid,user,comm,%cpu,%mem --sort=-%cpu 2>/dev/null | head -n 11 || ps aux | head -n 11
  else
    printf 'Warning: command not found: ps\n'
  fi

  printf '============================================================\n'
} >> "${LOG_FILE}" 2>&1

printf 'System monitoring data appended to %s\n' "${LOG_FILE}"
