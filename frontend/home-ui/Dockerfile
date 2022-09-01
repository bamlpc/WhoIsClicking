FROM node:16-alpine3.15

RUN npm install -g pnpm

#USER node

WORKDIR /usr/app

COPY --chown=node:node ["index.html", "tsconfig.json", "tsconfig.node.json", "vite.config.ts", "./"]

COPY --chown=node:node ["package.json", "pnpm-lock.yaml", "./"]

RUN pnpm install

CMD [ "pnpm", "dev", "--host" ]