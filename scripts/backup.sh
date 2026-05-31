#!/usr/bin/env bash
set -euo pipefail

PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
BACKUP_DIR="${PROJECT_ROOT}/backups"
LOG_DIR="${PROJECT_ROOT}/logs"
TIMESTAMP="$(date '+%Y%m%d-%H%M%S')"
BACKUP_FILE="${BACKUP_DIR}/project-backup-${TIMESTAMP}.tar.gz"
LOG_FILE="${LOG_DIR}/backup.log"

mkdir -p "${BACKUP_DIR}" "${LOG_DIR}"

{
  printf '============================================================\n'
  printf 'Backup execution\n'
  printf 'Timestamp: %s\n' "$(date '+%Y-%m-%d %H:%M:%S %z')"
  printf 'Project root: %s\n' "${PROJECT_ROOT}"
  printf 'Backup file: %s\n' "${BACKUP_FILE}"
} >> "${LOG_FILE}"

tar \
  --exclude='./node_modules' \
  --exclude='./dist' \
  --exclude='./build' \
  --exclude='./.git' \
  --exclude='./backups' \
  --exclude='./logs' \
  --exclude='./.env' \
  --exclude='./coverage' \
  -czf "${BACKUP_FILE}" \
  -C "${PROJECT_ROOT}" \
  . >> "${LOG_FILE}" 2>&1

{
  printf 'Status: success\n'
  printf 'Backup created: %s\n' "${BACKUP_FILE}"
  printf '============================================================\n'
} >> "${LOG_FILE}"

printf 'Backup created successfully: %s\n' "${BACKUP_FILE}"
