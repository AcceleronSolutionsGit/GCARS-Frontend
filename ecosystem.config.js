/**
 * G-CARS 2 — Frontend PM2 Ecosystem Configuration
 * ─────────────────────────────────────────────────────────────
 * Deployment commands:
 *   pm2 start ecosystem.config.js
 *   pm2 reload ecosystem.config.js --update-env
 *   pm2 stop ecosystem.config.js
 *   pm2 logs gcars-frontend
 * ─────────────────────────────────────────────────────────────
 */
const path = require('path');

const FRONTEND_PORT = process.env.PORT || process.env.FRONTEND_PORT || 5173;

module.exports = {
  apps: [
    {
      name: 'gcars-frontend',
      cwd: __dirname,
      script: 'node_modules/vite/bin/vite.js',
      args: `preview --port ${FRONTEND_PORT} --host 0.0.0.0`,
      exec_mode: 'fork',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '500M',
      min_uptime: '10s',
      max_restarts: 5,
      restart_delay: 4000,
      env: {
        NODE_ENV: 'production',
      },
      time: true,
      merge_logs: true,
      out_file: path.join(__dirname, 'logs/frontend.out.log'),
      error_file: path.join(__dirname, 'logs/frontend.err.log'),
    },
  ],
};

