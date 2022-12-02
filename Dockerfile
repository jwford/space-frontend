FROM node:14.15.4 as node

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build --prod


FROM nginx:alpine

COPY --from=node /app/dist/snapi /usr/share/nginx/html
