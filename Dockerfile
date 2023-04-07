# Stage 1 - the build process
FROM nginx:latest
ARG ENVIRONMENT
ARG NAMESPACE
# testing push
# COPY ./ci-configs/envs/dev/compulse-360/envs/.build-env .
COPY ci-configs/envs/$ENVIRONMENT/$NAMESPACE/envs/.build-env ./.env

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
