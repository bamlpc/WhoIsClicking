FROM node:16-alpine3.15

RUN npm install --location=global pnpm

WORKDIR /usr/app

COPY . .

RUN pnpm install

CMD [ "pnpm", "dev" ]