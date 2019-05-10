FROM node:alpine
WORKDIR /tmp
COPY . /tmp
RUN npm run build
CMD npm run start
ENV HOST 0.0.0.0


