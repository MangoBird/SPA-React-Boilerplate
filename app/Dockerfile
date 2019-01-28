FROM node:lts-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

# copy current building directory content to pwd
COPY . . 

EXPOSE 3013

CMD [ "npm", "start" ]