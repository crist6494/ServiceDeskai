FROM node:22

WORKDIR /backend

COPY package*.json ./
RUN npm install

EXPOSE 3001

CMD ["npm", "run", "dev"]