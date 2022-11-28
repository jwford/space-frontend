FROM node

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

EXPOSE 4200

RUN npm run build

CMD ["npm", "start"]

