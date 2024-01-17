FROM node:20

WORKDIR /app

COPY ./package.json .
COPY ./package-lock.json .
COPY ./tsconfig.json .
COPY ./src ./src

RUN npm install
RUN npm run typescript

EXPOSE 5000

CMD ["npm", "start"]
