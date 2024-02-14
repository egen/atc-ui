#!/bin/sh
set -o errexit
set -o nounset

for file in /usr/share/nginx/html/static/js/*.js; do
    cp $file $file.tmpl.js
    envsubst '${REACT_APP_API_BASE_URL}' < $file.tmpl.js > $file 
    rm -f $file.tmpl.js
done

echo "Starting nginx"
nginx -g 'daemon off;'