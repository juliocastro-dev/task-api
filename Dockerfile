FROM node:22.3.0

COPY package*.json .

RUN npm install

USER node

WORKDIR /home/node/app