FROM node:16-alpine AS builder

# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat

WORKDIR /app

# Assumes you are building from a cloned repo with a lockfile
COPY package.json yarn.lock ./

RUN yarn ci

FROM node:16-alpine

WORKDIR /app

COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules

COPY . .

RUN yarn build

EXPOSE 3000
CMD ["yarn", "start"]