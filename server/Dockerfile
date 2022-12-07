FROM node:14-slim

WORKDIR /usr/src/app

COPY ./package.json ./
COPY ./package-lock.json ./

RUN npm install -g nodemon

RUN npm install

COPY . .

EXPOSE 5000

CMD [ "nodemon", "start" ]