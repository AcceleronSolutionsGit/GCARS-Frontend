# GCARS 2.0 — Frontend Application

Modern React + Vite frontend for **Gainwell Capital Asset Requisition System (G-CARS 2.0)**.

---

## 🚀 Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite 5
- **Routing**: React Router DOM v6
- **Styling**: Tailwind CSS / Vanilla CSS Variables
- **Icons**: Lucide React
- **Data Visualizations**: Recharts
- **HTTP Client**: Axios
- **Notifications**: React Hot Toast
- **Process Manager**: PM2

---

## 🛠️ Getting Started

### 1. Prerequisites
- Node.js (v18.0.0 or higher)
- npm or yarn

### 2. Installation
```bash
npm install
```

### 3. Environment Variables
Create a `.env` file in the root directory (or use `.env.production`):
```env
VITE_API_BASE_URL=http://localhost:5000/api
VITE_APP_TITLE=GCARS 2.0
```

### 4. Development Server
```bash
npm run dev
```
Default URL: `http://localhost:5173`

### 5. Production Build
```bash
npm run build
```
Build output is saved to the `dist/` directory.

---

## 🚢 PM2 Production Deployment

The project includes an `ecosystem.config.js` file for production deployment via PM2:

```bash
# 1. Build the production bundle
npm run build

# 2. Start frontend process with PM2
pm2 start ecosystem.config.js

# 3. Reload with zero-downtime
pm2 reload ecosystem.config.js --update-env

# 4. Monitor logs
pm2 logs gcars-frontend

# 5. Persist across server reboots
pm2 save
```

---

## 📂 Key Features & Pages

- **Dashboard** (`/`): High-level capex statistics, pending approval counters, and department metrics.
- **New Request** (`/new-request`): Requisition creator with asset group/type selectors and automated approval workflow computation.
- **Requests & Approvals** (`/requests`): Smart paginated workflow inbox with filter retention.
- **Request Detail** (`/requests/:id`): Approval modal, multi-tier audit trail, sanction details, and Finance asset type reclassification.
- **Budget Mapping** (`/budget-mapping`): Approval hierarchy matrix, asset master, paginated tables, and "Export as Excel" CSV downloads.
- **Quarterly Budgets** (`/quarterly-budgets`): Budget breakdown and ratio tracking with pagination.
- **SuperAdmin** (`/superadmin`): System user management with server-side pagination across 4,300+ employees.
