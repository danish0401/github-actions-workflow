# Stage 1 - the build process
FROM nginx:latest
ARG ENVIRONMENT
ARG NAMESPACE

RUN mv ci-configs/envs/dev/C360/envs/.build-env ./.env
# RUN mv ci-configs/envs/$ENVIRONMENT/.build-env ./.env

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
