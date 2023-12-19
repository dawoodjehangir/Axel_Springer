# FROM node:18.19.0-alpine3.19 as build
# WORKDIR /app
# COPY package.json /app
# RUN npm install
# COPY . /app
# RUN npm run build

# FROM nginx
# COPY --from=build /app/build /usr/share/nginx/html


FROM node:18.19.0-alpine3.19
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
EXPOSE 3000
CMD ["npm", "start"]
