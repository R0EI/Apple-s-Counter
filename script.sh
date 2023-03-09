#!/bin/bash

./install-docker.sh
./install-docker-compose.sh

echo ============================= starting containers =============================
docker-compose up -d --build
