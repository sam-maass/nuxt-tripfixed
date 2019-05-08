FROM node:alpine
WORKDIR /tmp
COPY . /tmp
RUN ls -als
RUN apk add --no-cache --virtual .gyp python make g++ && npm install
RUN npm run build
CMD npm run start


