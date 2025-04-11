FROM node:alpine3.21

WORKDIR /app

COPY package.json .

RUN npm install

COPY ./users-app.js ./

EXPOSE 3001

CMD [ "node", "users-app.js" ]