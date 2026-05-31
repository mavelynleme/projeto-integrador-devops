#!/usr/bin/env bash
set -euo pipefail

PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
LOG_DIR="${PROJECT_ROOT}/logs"
RETENTION_DAYS="${LOG_RETENTION_DAYS:-7}"
LOG_FILE="${LOG_DIR}/cleanup.log"

mkdir -p "${LOG_DIR}"

if ! [[ "${RETENTION_DAYS}" =~ ^[0-9]+$ ]]; then
  printf 'LOG_RETENTION_DAYS must be a non-negative integer. Received: %s\n' "${RETENTION_DAYS}" >&2
  exit 1
fi

{
  printf '============================================================\n'
  printf 'Log cleanup execution\n'
  printf 'Timestamp: %s\n' "$(date '+%Y-%m-%d %H:%M:%S %z')"
  printf 'Retention days: %s\n' "${RETENTION_DAYS}"
  printf 'Log directory: %s\n' "${LOG_DIR}"
  printf 'Removed files:\n'
} >> "${LOG_FILE}"

find "${LOG_DIR}" \
  -maxdepth 1 \
  -type f \
  -name '*.log' \
  ! -name 'cleanup.log' \
  -mtime +"${RETENTION_DAYS}" \
  -print \
  -delete >> "${LOG_FILE}" 2>&1

{
  printf 'Status: success\n'
  printf '============================================================\n'
} >> "${LOG_FILE}"

printf 'Log cleanup completed. Details appended to %s\n' "${LOG_FILE}"
