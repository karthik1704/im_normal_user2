FROM node:14.15.1-alpine3.12

WORKDIR /usr/src/webapp/normal_user

RUN npm install -g serve
RUN npm install pm2 -g

ENV NODE_PORT 3000

EXPOSE 3000

CMD pm2-runtime start pm2.config.json
