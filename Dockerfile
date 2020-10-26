# Build production app
FROM node:alpine
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

# Build nginx
FROM nginx
COPY --from=0 /app/build /usr/share/nginx/html
