FROM node:21.2-alpine3.18
WORKDIR /app
COPY . /app
RUN npm install
RUN npm audit && ncu
RUN ncu -u
RUN npm upgrade
EXPOSE 8000
CMD ["npm","start"]
