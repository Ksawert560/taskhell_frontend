#!/bin/sh


echo "SERVER_URL=${SERVER_URL}" >> .env
echo "WEATHER_SERVER_URL=${WEATHER_SERVER_URL}" >> .env
echo "WEATHER_API_KEY=${WEATHER_API_KEY}" >> .env

exec "$@"