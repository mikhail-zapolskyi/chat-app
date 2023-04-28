FROM node:18-alpine
WORKDIR /app
COPY . .
RUN ls -la
RUN npm run install && npm run build
CMD ["npm", "start"]
EXPOSE 4000
