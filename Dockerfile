# --- Step 1: App build (Node.js) ---
FROM node:20-alpine AS builder
WORKDIR /app

# Copying files and installing dependencies
COPY package*.json ./
RUN npm ci

# Copying rest of the files
COPY . .

COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]


# Building production versions
RUN npm run build


# --- Step 2: Production server (Nginx) ---
FROM nginx:alpine

# Copying Nginx configuration files
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copying files from step 1
COPY --from=builder /app/out /usr/share/nginx/html

# Exposing port 3000
EXPOSE 3000


CMD ["nginx", "-g", "daemon off;"]