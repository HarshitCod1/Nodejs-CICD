#!/usr/bin/env bash
set -e

# Use env vars or defaults
DB_HOST=${DB_HOST:-localhost}
DB_PORT=${DB_PORT:-5432}
DB_USER=${DB_USER:-dev_user}
DB_PASSWORD=${DB_PASSWORD:-DevPass123!}
DB_NAME=${DB_NAME:-devdb}

export PGPASSWORD="\${DB_PASSWORD}"

psql -h "\$DB_HOST" -p "\$DB_PORT" -U "\$DB_USER" -tc "SELECT 1 FROM pg_database WHERE datname = '\$DB_NAME'" | grep -q 1 || \
  psql -h "\$DB_HOST" -p "\$DB_PORT" -U "\$DB_USER" -c "CREATE DATABASE \$DB_NAME;"

psql -h "\$DB_HOST" -p "\$DB_PORT" -U "\$DB_USER" -d "\$DB_NAME" -c "
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);"

echo "DB initialized"
