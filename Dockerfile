FROM  node:20-alpine AS builder

WORKDIR /usr/src/app

COPY  ./prisma/schemas ./prisma/schemas
COPY  package*.json tsconfig*.json ./
RUN npm i -g npm && npm ci

COPY . .
RUN npm run build && npm prune --omit=dev

FROM node:20-alpine AS runner

RUN apk add --no-cache tini

ENTRYPOINT  ["/sbin/tini", "--"]

WORKDIR /usr/src/app

COPY  --from=builder /usr/src/app/node_modules ./node_modules
COPY  --from=builder /usr/src/app/prisma/client ./prisma/client
COPY  --from=builder /usr/src/app/build ./build

EXPOSE  4000
CMD [ "node", "build/main" ]