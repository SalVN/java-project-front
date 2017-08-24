# FROM node:6.10-alpine
# RUN mkdir -p /home/web
# COPY *.html /home/web/
# COPY public /home/web/public/
# COPY src /home/web/src/
# COPY *.json /home/web/
# WORKDIR "/home/web"
# RUN npm install
# ENTRYPOINT npm run start

FROM node:6.10-alpine
RUN mkdir -p /home/web
COPY public /home/web/public/
COPY src /home/web/src/
COPY package.json /home/web/
COPY .babelrc /home/web/
COPY config.js /home/web/
# COPY webpack.config.js /home/web/
# COPY webpack.dev.js /home/web/
COPY webpack.prod.js /home/web/

WORKDIR "/home/web"
RUN npm install webpack-dev-server --save-dev
RUN npm install
ENTRYPOINT ["node_modules/.bin/webpack-dev-server"]