FROM node:12.16.3-alpine3.11

WORKDIR /home/netoviz-web-react
COPY ./dot.env /home/netoviz-web-react/.env
COPY ./build /home/netoviz-web-react/
RUN npm install -g serve

EXPOSE 5000

CMD serve -s .
