FROM node:lts
ARG CONTENTFUL_SPACE_ID
ARG CONTENTFUL_ACCESS_TOKEN

ENV CONTENTFUL_SPACE_ID $CONTENTFUL_SPACE_ID
ENV CONTENTFUL_ACCESS_TOKEN $CONTENTFUL_ACCESS_TOKEN

RUN mkdir -p /app
WORKDIR /app
COPY package*.json /app/
COPY yarn.lock /app/
RUN yarn install
COPY . .
RUN yarn build

FROM nginx:1.19.6-alpine
COPY --from=0 /app/out /usr/share/nginx/html