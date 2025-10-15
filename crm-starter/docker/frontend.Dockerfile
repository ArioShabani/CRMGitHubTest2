FROM node:20-alpine as build
WORKDIR /app
COPY ../frontend /app
# Support both CRA and Vite; if no lockfile, install and run dev server in runtime stage
RUN if [ -f package.json ]; then npm ci || npm install; fi && \
    if [ -f package.json ]; then npm run build || true; fi

FROM node:20-alpine
WORKDIR /srv
COPY --from=build /app /srv
EXPOSE 5173
CMD ["sh", "-c", "if [ -f \"/srv/dist/index.html\" ]; then npx serve -s dist -l 5173; else npm run dev -- --host --port 5173; fi"]



