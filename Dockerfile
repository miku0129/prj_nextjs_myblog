FROM node:18-alpine

WORKDIR /app

RUN apk add --no-cache openssl

COPY package.json ./

COPY . .

RUN npm install

ENTRYPOINT ["./entrypoint.sh"]