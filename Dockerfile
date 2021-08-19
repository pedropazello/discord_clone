FROM node:16.7.0

RUN npm install -g npm@7.21.0

RUN mkdir /myapp
WORKDIR /myapp

COPY . /myapp
