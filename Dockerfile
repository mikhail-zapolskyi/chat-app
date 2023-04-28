# syntax = docker/dockerfile:1.2
FROM node:18-alpine
WORKDIR /app
COPY . .
RUN ls -la
RUN npm run install && npm run build
RUN --mount=type=secret,id=secret,dst=/etc/secrets/secret cat /app/.env
CMD ["npm", "start"]
EXPOSE 4000
