FROM node:alpine3.21

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

# documentation about internal port that while running docker container SHOULD BE USED

EXPOSE 3001

# ENV MONGODB_USERNAME=joydip
# ENV MONGODB_PASSWORD=secret

CMD ["npm", "start"]