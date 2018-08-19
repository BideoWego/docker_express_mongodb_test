FROM node

RUN mkdir -p /src
COPY ./src ./src
WORKDIR /src

RUN npm install
CMD npm start

EXPOSE 3000
