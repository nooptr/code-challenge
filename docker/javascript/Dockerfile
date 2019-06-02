FROM node:8.16.0-alpine

RUN apk add --no-cache bc
RUN apk add --update coreutils && rm -rf /var/cache/apk/*

WORKDIR /home/ntcd/

ADD script.sh /bin/script.sh
RUN chmod +x /bin/script.sh

ENTRYPOINT ["sh", "/bin/script.sh"]