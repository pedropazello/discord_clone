FROM node:16.7.0

RUN mkdir /myapp
WORKDIR /myapp

COPY . /myapp
