FROM node:alpine3.21
WORKDIR /app
COPY ./package.json .
RUN npm install
COPY ./feedback ./feedback
COPY ./pages ./pages
COPY ./public ./public
COPY ./temp ./temp
COPY server.js .
CMD [ "node","server.js" ]