FROM node:alpine3.21

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

# this environment variable and its value will be baked into the docker image but will be supplied to docker container process when you create and start a container
# then docker container will pass the same to the NODE JS process
ENV PORT=3000
# ENV ADDRESS=mongoserver
CMD ["node", "app.js"]