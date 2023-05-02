FROM node:18.12.1-alpine

WORKDIR /usr/app

COPY ./package.json . 

RUN npm i

COPY . . 

CMD ["npm", "run", 'start']