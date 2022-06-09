FROM node:16-alpine3.15

WORKDIR /usr/app

COPY package.json ./

RUN npm install

#COPY ./src ./src
COPY ./public ./public

CMD [ "npm", "start" ]