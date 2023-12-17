FROM node:18.19.0-alpine3.19
RUN mkdir -p /usr/server
WORKDIR /usr/server
COPY package.json /usr/server
RUN npm install
COPY . /usr/server
EXPOSE 8000
CMD ["npm", "run", "pm2"]