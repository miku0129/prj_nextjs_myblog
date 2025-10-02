FROM node:20-alpine3.20

WORKDIR /app

COPY package.json ./

COPY . .

RUN npm install

ENTRYPOINT ["./entrypoint.sh"]