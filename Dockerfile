FROM node:20-bookworm-slim

WORKDIR /app

COPY package.json ./

RUN npm install

EXPOSE 3000 

COPY . .

CMD ["npm", "run", "dev"]