FROM nginx:1.16-alpine
COPY /public/under-construction.html /usr/share/nginx/html/index.html
RUN rm /etc/nginx/conf.d/default.conf
COPY ci-configs/docker-content/nginx.conf /etc/nginx/conf.d
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
