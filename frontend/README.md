# ClaudMD Patient Portal

Next.js (JavaScript) frontend for the ClaudMD Patient Portal. Hardcoded demo data — no backend.

## Run

```bash
cd frontend
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Demo login: `patient@demo.com` (any password).

## Structure

- `src/components/ui` — reusable UI primitives
- `src/components/layout` — sidebar / top bar shell
- `src/features` — module views (dashboard, visits, appointments, …)
- `src/data` — mock data
- `src/app` — thin App Router pages
