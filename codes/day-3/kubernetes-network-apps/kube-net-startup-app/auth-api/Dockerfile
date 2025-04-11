FROM node:alpine3.21

WORKDIR /app

COPY package.json .

RUN npm install

COPY ./auth-app.js ./

EXPOSE 3000

CMD [ "node", "auth-app.js" ]