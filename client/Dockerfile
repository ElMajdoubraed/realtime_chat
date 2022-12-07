FROM node:14-slim

WORKDIR /usr/src/app

COPY ./package.json ./
COPY ./package-lock.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx

WORKDIR /usr/src/app

COPY --from=0 /usr/src/app/build ./
RUN chown -R nginx:nginx /usr/src/app
VOLUME /usr/src/app