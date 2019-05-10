FROM node:alpine
WORKDIR /tmp
COPY . /tmp
RUN npm install
RUN npm run build
CMD npm run start
ENV HOST 0.0.0.0


