# Fase de construcción
FROM node:alpine AS build
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install
COPY . .
RUN yarn build

# Fase de producción
FROM node:alpine
WORKDIR /app
COPY --from=build /app/dist ./build
RUN yarn global add serve
EXPOSE 3000
CMD ["serve", "-s", "build"]
