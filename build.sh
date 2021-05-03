#!/usr/bin/env bash
PACKAGES=(
  'utils'
  'core'
  'cli'
)
MODULE=$1

function buildPackage() {
  local package=$1
  pushd "packages/oa2ts-${package}" > /dev/null
  echo "Building ${package}..."
  yarn build
  echo ""
  popd > /dev/null
}

function buildAll() {
  for i in "${PACKAGES[@]}"
  do
    buildPackage "${i}"
  done
}

case $MODULE in
  utils | core | cli)
    buildPackage "${MODULE}"
    ;;
  *)
    buildAll
    ;;
esac

