#!/usr/bin/env bash
set -euo pipefail

PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
LOG_DIR="${PROJECT_ROOT}/logs"
LOG_FILE="${LOG_DIR}/cron-install.log"
MONITOR_SCRIPT="${PROJECT_ROOT}/scripts/monitor-system.sh"
CRON_ENTRY="*/5 * * * * cd \"${PROJECT_ROOT}\" && \"${MONITOR_SCRIPT}\" >> \"${PROJECT_ROOT}/logs/cron-monitor.log\" 2>&1"

mkdir -p "${LOG_DIR}"

{
  printf '============================================================\n'
  printf 'Cron install execution\n'
  printf 'Timestamp: %s\n' "$(date '+%Y-%m-%d %H:%M:%S %z')"
  printf 'Project root: %s\n' "${PROJECT_ROOT}"
} >> "${LOG_FILE}"

if ! command -v crontab >/dev/null 2>&1; then
  {
    printf 'Warning: crontab command not found. Cron entry was not installed.\n'
    printf '============================================================\n'
  } >> "${LOG_FILE}"
  printf 'Warning: crontab command not found. Install cron before running this setup.\n'
  exit 0
fi

CURRENT_CRON="$(crontab -l 2>/dev/null || true)"
UPDATED_CRON="$(printf '%s\n' "${CURRENT_CRON}" | grep -F -v "${MONITOR_SCRIPT}" || true)"

{
  printf '%s\n' "${UPDATED_CRON}"
  printf '%s\n' "${CRON_ENTRY}"
} | sed '/^[[:space:]]*$/d' | crontab -

{
  printf 'Installed cron entry:\n%s\n' "${CRON_ENTRY}"
  printf 'Status: success\n'
  printf '============================================================\n'
} >> "${LOG_FILE}"

printf 'Installed cron entry:\n%s\n' "${CRON_ENTRY}"
