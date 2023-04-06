#!/bin/sh -e
BUILD_ARGS="${BUILD_ARGS:-}"
CHANGE_DIR="${CHANGE_DIR:-/usr/share/nginx/html}"
echo "BUILD_ARGS: ${BUILD_ARGS}
CHANGE_DIR: ${CHANGE_DIR}"
for BUILD_ARG in $(echo "${BUILD_ARGS}" | tr ',' ' '); do
  echo "Processing BUILD_ARG ${BUILD_ARG}"
  ARG_VALUE=$(printenv "${BUILD_ARG}" || echo "")
  echo "ARG_VALUE: ${ARG_VALUE}"
  grep -rl "%%${BUILD_ARG}%%" "${CHANGE_DIR}" | sort | uniq | while read file; do
    echo "Updating file ${file}..."
    sed -ie "s;\%\%${BUILD_ARG}\%\%;${ARG_VALUE};g" "${file}"
  done;
done;
echo BUILD_ARGS processing finished
eval "$@"
