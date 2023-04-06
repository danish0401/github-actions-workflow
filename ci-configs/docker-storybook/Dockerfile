# Stage 1 - the build process
FROM node:16.14-slim as build-deps
WORKDIR /usr/src/app
COPY package.json ./
COPY package-lock.json ./
RUN npm ci
COPY . ./
RUN ls -la ./
RUN npm run build-storybook

# Stage 2 - the production environment
FROM nginx:1.16-alpine
COPY --from=build-deps /usr/src/app/dist/storybook /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY ci-configs/docker-content/nginx.conf /etc/nginx/conf.d
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
