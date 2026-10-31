# ==============================================================================
# OrderCraft Multi-Stage Production Dockerfile
# Stage 1: Build Angular Frontend SPA
# Stage 2: Build Spring Boot Backend Jar with embedded Frontend
# Stage 3: Minimal Secure JRE Runtime
# ==============================================================================

# ------------------------------------------------------------------------------
# Stage 1: Build Angular Frontend
# ------------------------------------------------------------------------------
FROM node:24-alpine AS frontend-builder
WORKDIR /build/frontend

ENV NG_FORCE_COMPAT=true

COPY ordercraft-frontend/package*.json ./
RUN npm ci

COPY ordercraft-frontend/ ./
RUN npm run build

# ------------------------------------------------------------------------------
# Stage 2: Build Spring Boot Backend
# ------------------------------------------------------------------------------
FROM maven:3.9-eclipse-temurin-17-alpine AS backend-builder
WORKDIR /build/backend

COPY backend/pom.xml ./
RUN mvn dependency:go-offline -B

COPY backend/src ./src

# Copy Angular production bundle directly into Spring Boot static resources
COPY --from=frontend-builder /build/frontend/dist/ordercraft-frontend/browser ./src/main/resources/static

RUN mvn clean package -DskipTests

# ------------------------------------------------------------------------------
# Stage 3: Lightweight Production JRE Runner
# ------------------------------------------------------------------------------
FROM eclipse-temurin:17-jre-alpine AS runner
WORKDIR /app

# Install curl for healthchecks and tzdata
RUN apk add --no-cache curl tzdata

# Create data directory for H2 database persistence
RUN mkdir -p /app/data

# Copy built fat JAR from backend builder
COPY --from=backend-builder /build/backend/target/*.jar /app/ordercraft.jar

ENV PORT=8085 \
    SPRING_PROFILES_ACTIVE=prod \
    JAVA_OPTS="-Xms256m -Xmx512m -XX:+UseG1GC"

EXPOSE 8085

# Healthcheck to verify the server is answering requests
HEALTHCHECK --interval=30s --timeout=5s --start-period=40s --retries=3 \
  CMD curl -f http://localhost:${PORT}/h2-console || exit 1

ENTRYPOINT ["sh", "-c", "java $JAVA_OPTS -jar /app/ordercraft.jar"]

