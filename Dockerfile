FROM node:stretch-slim

COPY package.json index.js /usr/src/app/

WORKDIR /usr/src/app
RUN npm install

ADD entrypoint.sh /usr/bin
ENTRYPOINT ["entrypoint.sh"]

