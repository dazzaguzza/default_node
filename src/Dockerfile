FROM node:20.9.0

WORKDIR /app

COPY package*.json ./

RUN npm install

ENV TZ=Asia/Seoul 

COPY . .

CMD ["npm", "start"]