FROM node:18-alpine
WORKDIR /app
COPY . .
RUN ls -la
RUN npm run install && npm run build
RUN --mount=type=secret,id=_env,dst=/etc/secrets/.env cat /app/server/.env
CMD ["npm", "start"]
EXPOSE 4000
