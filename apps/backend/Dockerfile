FROM node:16-alpine

# Installing libvips-dev for sharp Compatability
RUN apk update && apk add build-base gcc autoconf automake zlib-dev libpng-dev nasm bash vips-dev

WORKDIR /opt/

COPY ./package.json ./package-lock.json ./
ENV PATH /opt/node_modules/.bin:$PATH
RUN npm install --legacy-peer-deps
WORKDIR /opt/app
COPY ./ .

RUN npm run build

EXPOSE ${PORT}

# on production: ["npm", "run", "start"]
CMD ["npm", "run", "develop"]