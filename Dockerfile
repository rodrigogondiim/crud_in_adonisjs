FROM node:16-alpine3.14
WORKDIR /usr/src/
RUN apk update && apk add --no-cache bash
RUN npm install pg --save
EXPOSE 3344
CMD ["yarn", "dev"]
