#!/usr/bin/env bash
set -e
cd /srv/express-app || exit 1

git fetch --all
git reset --hard origin/main
npm ci

./scripts/init_db.sh

pm2 startOrReload ecosystem.config.js || true
pm2 restart express-postgres-ci-demo || pm2 start src/app.js --name express-postgres-ci-demo
pm2 save
