FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY src/ .

USER node

EXPOSE 3000

CMD ["npm", "start"]
