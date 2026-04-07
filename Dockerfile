FROM node:20-alpine

WORKDIR /app

COPY package.json package-lock.json* ./

RUN npm ci --legacy-peer-deps

EXPOSE 3000

ENV HOST=0.0.0.0

CMD ["npm", "start"]
