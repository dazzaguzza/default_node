FROM node:20.9.0

WORKDIR /app

COPY . .

RUN npm install

ENV TZ=Asia/Seoul

EXPOSE 80 

CMD ["npm", "start"]
