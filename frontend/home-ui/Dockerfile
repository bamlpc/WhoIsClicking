FROM node:16-alpine3.15

RUN npm install --location=global pnpm

USER node

WORKDIR /usr/app

COPY --chown=node:node ["package.json", "pnpm-lock.yaml", "./"]

RUN pnpm install

COPY --chown=node:node ["index.html", "tsconfig.json", "tsconfig.node.json", "vite.config.ts", "./"]

CMD [ "pnpm", "dev" ]