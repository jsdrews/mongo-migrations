FROM node:latest

ARG HTTPS_PROXY

RUN npm install -g migrate-mongo
RUN mkdir /mongo_migrations
COPY migrate-mongo-config.js /mongo_migrations/migrate-mongo-config.js
WORKDIR /mongo_migrations
CMD ["migrate-mongo", "up"]
