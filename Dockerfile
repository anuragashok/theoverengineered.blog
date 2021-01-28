FROM node:lts
RUN mkdir -p /app
WORKDIR /app
COPY package*.json /app/
COPY yarn.lock /app/
RUN yarn install
COPY . .
RUN yarn build

FROM nginx:1.19.6-alpine
COPY --from=0 /app/out /usr/share/nginx/html