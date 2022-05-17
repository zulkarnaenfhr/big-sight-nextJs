# Define Base Image
FROM telkomindonesia/alpine:nodejs-14

# Change Working Directory
WORKDIR /usr/src/app

# Copy Package Dependencies List to Working Directory
COPY . /usr/src/app/

RUN mkdir /usr/src/app/node_modules

RUN chmod 777 -Rf /usr/src/app/node_modules

# Install Package Dependencies
# RUN apk add --update --no-cache --virtual .build-dev \
#       build-base \
#       python python-dev \
#     && npm i -g npm \
#     && npm i -g node-gyp \
#     && npm i \
#     && npm run build \
#     && apk del .build-dev

RUN npm i -g npm
RUN npm i -g node-gyp
RUN npm i
RUN npm run build

#install phantomJS

  
# Copy All Source Code to Working Directory
# COPY . /usr/src/app/

# Expose Application Port
EXPOSE 3000

# Run Application
CMD ["npm", "start"]
