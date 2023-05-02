FROM node:18.12.1-alpine

WORKDIR /home/gustavo/git/Saturday_Night_API/

RUN npm i

COPY . . 

EXPOSE 3080

CMD ["npm", "run", 'start']