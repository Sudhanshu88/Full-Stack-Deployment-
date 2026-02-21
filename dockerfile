
FROM python:3.11-slim AS builder

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

WORKDIR /app

# Install build dependencies
RUN apt-get update \
    && apt-get install -y build-essential \
    && rm -rf /var/lib/apt/lists/*

# Copy dependency file
COPY requirement.txt .

# Upgrade pip and build wheels
RUN pip install --upgrade pip \
    && pip wheel --no-cache-dir --no-deps -r requirement.txt -w /wheels


# ================================
# Stage 2: Runtime
# ================================
FROM python:3.11-slim

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

WORKDIR /app

# Install runtime dependencies only (from wheels)
COPY --from=builder /wheels /wheels
RUN pip install --no-cache-dir /wheels/*

# Copy application source code
COPY . .

EXPOSE 8000

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
