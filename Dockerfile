# --- ETAP 1: Budowanie aplikacji (Node.js) ---
FROM node:20-alpine AS builder
WORKDIR /app

# Kopiujemy pliki i instalujemy zależności
COPY package*.json ./
RUN npm ci

# Kopiujemy resztę kodu źródłowego
COPY . .

# Przekazujemy zmienne środowiskowe potrzebne PODCZAS BUDOWANIA (Next.js ich potrzebuje)
ARG NEXT_PUBLIC_SERVER_URL
ARG NEXT_PUBLIC_WEATHER_SERVER_URL
ARG NEXT_PUBLIC_WEATHER_API_KEY

ENV NEXT_PUBLIC_SERVER_URL=$NEXT_PUBLIC_SERVER_URL
ENV NEXT_PUBLIC_WEATHER_SERVER_URL=$NEXT_PUBLIC_WEATHER_SERVER_URL
ENV NEXT_PUBLIC_WEATHER_API_KEY=$NEXT_PUBLIC_WEATHER_API_KEY

# Budujemy produkcyjną wersję (generuje folder dist lub out)
RUN npm run build


# --- ETAP 2: Serwer produkcyjny (Nginx) ---
FROM nginx:alpine

# Kopiujemy Twoją własną konfigurację Nginxa
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Kopiujemy ZBUDOWANE pliki z pierwszego etapu (builder)
# Uwaga: Upewnij się, czy Next.js wyrzuca pliki do /app/dist czy do /app/out!
COPY --from=builder /app/out /usr/share/nginx/html

# Informujemy ECS/Dockera, że kontener działa na porcie 3000
EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]