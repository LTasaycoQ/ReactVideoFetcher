# Fase de construcción
FROM node:alpine AS build
WORKDIR /app
COPY package.json ./
RUN yarn install
COPY . .
RUN yarn build
RUN ls -la /app/dist
FROM node:alpine
WORKDIR /app
COPY --from=build /app/dist ./build
RUN yarn global add serve
EXPOSE 3000
CMD ["serve", "-s", "build"]
