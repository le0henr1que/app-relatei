# Build Stage
FROM node:20-alpine AS base

FROM base AS deps

WORKDIR /app

COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
COPY ./vite.config.ts /app 
RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then yarn global add pnpm && pnpm i; \
  else echo "Lockfile not found." && exit 1; \
  fi

FROM base AS build
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules

COPY . .
COPY .env.development .env
RUN npm run build

EXPOSE 5173

CMD ["npm", "run", "serve"]
