# CRM Starter

A minimal full-stack starter with FastAPI backend and React TypeScript frontend.

## Backend (FastAPI)
- Path: `backend/`
- Run locally:
  ```bash
  pip install -r backend/requirements.txt
  uvicorn app.main:app --reload --app-dir backend
  ```
- Ping endpoints:
  - `GET http://localhost:8000/ping`
  - `GET http://localhost:8000/api/ping`
- AI echo:
  - `GET http://localhost:8000/api/ai/echo?prompt=Hello`

## Frontend (React TS)
- Path: `frontend/`
- Minimal `src/` included. Use Vite or CRA as you prefer.
- Example run (Vite):
  ```bash
  npm create vite@latest frontend -- --template react-ts
  cd frontend && npm install && npm run dev
  ```
  Ensure `VITE_API_BASE=http://localhost:8000/api` is set.

## Docker
- Path: `docker/`
- Start both services:
  ```bash
  cd docker
  docker compose up --build
  ```
- Backend: `http://localhost:8000`
- Frontend: `http://localhost:5173`

## CI
- GitHub Actions workflow in `.github/workflows/ci.yml` runs backend tests.

## Tests
- Run from repo root:
  ```bash
  pip install -r backend/requirements.txt
  pytest -q backend
  ```

