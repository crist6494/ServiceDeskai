FROM node:20

WORKDIR /frontend

COPY package*.json ./

RUN npm install

EXPOSE 3001

CMD ["npm", "run", "dev"]
