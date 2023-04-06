# Stage 1 - the build process
FROM 681420559112.dkr.ecr.us-east-1.amazonaws.com/node:16.14-slim as build-deps
ARG ENVIRONMENT

WORKDIR /usr/src/app
COPY package.json .
COPY yarn.lock .
RUN yarn install --frozen-lockfile
COPY . .
# RUN mv ci-configs/envs/dev/.build-env ./.env
RUN mv ci-configs/envs/$ENVIRONMENT/.build-env ./.env

RUN yarn build

# Stage 2 - the production environment
FROM 681420559112.dkr.ecr.us-east-1.amazonaws.com/nginx:1.22.1-alpine
COPY --from=build-deps /usr/src/app/dist /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY ./ci-configs/docker-content/nginx.conf /etc/nginx/conf.d
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
