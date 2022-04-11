FROM node:17.8.0-alpine3.15
WORKDIR /app
COPY package.json .
RUN npm install
RUN npm audit fix        
COPY . ./
