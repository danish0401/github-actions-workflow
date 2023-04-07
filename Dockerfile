# Stage 1 - the build process
FROM nginx:latest
ARG ENVIRONMENT
ARG NAMESPACE

# COPY ./ci-configs/envs/dev/c360/envs/.build-env local .
COPY ci-configs/envs/$ENVIRONMENT/$NAMESPACE/envs/.build-env ./.env

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
