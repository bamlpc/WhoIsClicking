FROM node:16-alpine3.15

RUN npm install -g pnpm

WORKDIR /usr/app

COPY ["tsconfig.json", ".npmrc", "./"]

COPY ["package.json", "pnpm-lock.yaml", "./"]

RUN chown -R node:node /usr/app

USER node

RUN pnpm install

CMD [ "pnpm", "start" ]