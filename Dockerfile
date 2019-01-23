FROM node:10

WORKDIR /martin-proxy

COPY . .

RUN npm install

EXPOSE 3400

CMD ["npm", "start"]