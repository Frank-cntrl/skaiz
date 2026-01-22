# 🔌 Backend API Documentation

Complete API reference for the SKAIZ countdown system.

---

## 📋 Table of Contents

- [Public Endpoints](#public-endpoints)
- [Admin Endpoints](#admin-endpoints)
- [Configuration](#configuration)
- [Usage Examples](#usage-examples)

---

## 🌐 Public Endpoints

These endpoints are accessible to anyone and don't require authentication.

### GET `/api/countdown`

Get the current countdown status.

**Response:**
```json
{
  "isRevealed": false,
  "revealDate": "2026-02-01T00:00:00.000Z",
  "timeRemaining": 12345678,
  "serverTime": "2026-01-22T12:00:00.000Z",
  "config": {
    "refreshInterval": 60000,
    "screen": {
      "title": "SKAIZ",
      "subtitle": "WORLD",
      "message": "Coming Soon",
      "socialLinks": {
        "instagram": "https://www.instagram.com/flyskaiz/"
      },
      "backgroundImage": "/skaiz-world.png"
    }
  }
}
```

**Fields:**
- `isRevealed` (boolean) - Whether the site should be revealed
- `revealDate` (string) - ISO date when site will be revealed
- `timeRemaining` (number) - Milliseconds until reveal (0 if revealed)
- `serverTime` (string) - Current server time (ISO)
- `config.refreshInterval` (number) - How often client should check (ms)
- `config.screen` (object) - Countdown screen configuration

---

### GET `/api/health`

Health check endpoint with basic status.

**Response:**
```json
{
  "status": "ok",
  "timestamp": "2026-01-22T12:00:00.000Z",
  "environment": "development",
  "countdown": {
    "isRevealed": false,
    "revealDate": "2026-02-01T00:00:00.000Z"
  }
}
```

---

### GET `/api/ping`

Simple ping endpoint for uptime monitoring.

**Response:**
```json
{
  "pong": true,
  "timestamp": "2026-01-22T12:00:00.000Z"
}
```

---

## 🔐 Admin Endpoints

These endpoints require authentication via API key.

### Authentication

Include your API key in one of these ways:

**Option 1: Header (Recommended)**
```bash
curl -H "X-API-Key: your-api-key" http://localhost:3001/api/...
```

**Option 2: Query Parameter**
```bash
curl http://localhost:3001/api/...?apiKey=your-api-key
```

**Setting API Key:**

In `.env` file:
```bash
ADMIN_API_KEY=your-secret-key-here
```

In development, default is: `dev-api-key-change-in-production`

---

### GET `/api/countdown/config`

Get full countdown configuration (admin only).

**Request:**
```bash
curl -H "X-API-Key: your-api-key" \
  http://localhost:3001/api/countdown/config
```

**Response:**
```json
{
  "success": true,
  "config": {
    "revealDate": "2026-02-01T00:00:00.000Z",
    "forceReveal": false,
    "clientRefreshInterval": 60000,
    "screen": {
      "title": "SKAIZ",
      "subtitle": "WORLD",
      "message": "Coming Soon",
      "socialLinks": {
        "instagram": "https://www.instagram.com/flyskaiz/"
      },
      "backgroundImage": "/skaiz-world.png"
    }
  }
}
```

---

### PUT `/api/countdown/reveal-date`

Update the reveal date (admin only).

**Request:**
```bash
curl -X PUT \
  -H "X-API-Key: your-api-key" \
  -H "Content-Type: application/json" \
  -d '{"date": "2026-03-15T18:00:00"}' \
  http://localhost:3001/api/countdown/reveal-date
```

**Body:**
```json
{
  "date": "2026-03-15T18:00:00"
}
```

**Success Response:**
```json
{
  "success": true,
  "message": "Reveal date updated successfully",
  "newDate": "2026-03-15T18:00:00.000Z"
}
```

**Error Response:**
```json
{
  "success": false,
  "error": "Invalid date format"
}
```

---

### PUT `/api/countdown/force-reveal`

Enable or disable force reveal (admin only).

**Request:**
```bash
curl -X PUT \
  -H "X-API-Key: your-api-key" \
  -H "Content-Type: application/json" \
  -d '{"enabled": true}' \
  http://localhost:3001/api/countdown/force-reveal
```

**Body:**
```json
{
  "enabled": true
}
```

**Success Response:**
```json
{
  "success": true,
  "message": "Force reveal enabled",
  "forceReveal": true
}
```

---

## ⚙️ Configuration

### Environment Variables

Create a `.env` file:

```bash
# Server
PORT=3001
NODE_ENV=development

# Countdown
FORCE_REVEAL=false

# Admin
ADMIN_ENABLED=true
ADMIN_API_KEY=your-secret-key

# Logging
LOG_LEVEL=info

# CORS (production)
CORS_ORIGIN=https://yourdomain.com
```

### Countdown Configuration File

Edit `server/config/countdown.config.js`:

```javascript
export const countdownConfig = {
  // Reveal date
  revealDate: new Date('2026-02-01T00:00:00'),
  
  // Force reveal (can also use FORCE_REVEAL env var)
  forceReveal: process.env.FORCE_REVEAL === 'true' || false,
  
  // Client refresh interval (ms)
  clientRefreshInterval: 60000,
  
  // Countdown screen config
  screen: {
    title: 'SKAIZ',
    subtitle: 'WORLD',
    message: 'Coming Soon',
    socialLinks: {
      instagram: 'https://www.instagram.com/flyskaiz/',
    },
    backgroundImage: '/skaiz-world.png',
  },
};
```

---

## 💡 Usage Examples

### Using curl

**Check countdown status:**
```bash
curl http://localhost:3001/api/countdown
```

**Update reveal date (admin):**
```bash
curl -X PUT \
  -H "X-API-Key: dev-api-key-change-in-production" \
  -H "Content-Type: application/json" \
  -d '{"date": "2026-12-25T00:00:00"}' \
  http://localhost:3001/api/countdown/reveal-date
```

**Enable force reveal (admin):**
```bash
curl -X PUT \
  -H "X-API-Key: dev-api-key-change-in-production" \
  -H "Content-Type: application/json" \
  -d '{"enabled": true}' \
  http://localhost:3001/api/countdown/force-reveal
```

**Disable force reveal (admin):**
```bash
curl -X PUT \
  -H "X-API-Key: dev-api-key-change-in-production" \
  -H "Content-Type: application/json" \
  -d '{"enabled": false}' \
  http://localhost:3001/api/countdown/force-reveal
```

---

### Using JavaScript/Fetch

**Check countdown status:**
```javascript
const response = await fetch('http://localhost:3001/api/countdown');
const data = await response.json();

if (data.isRevealed) {
  console.log('Site is revealed!');
} else {
  console.log(`Time remaining: ${data.timeRemaining}ms`);
}
```

**Update reveal date (admin):**
```javascript
const response = await fetch('http://localhost:3001/api/countdown/reveal-date', {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
    'X-API-Key': 'your-api-key',
  },
  body: JSON.stringify({
    date: '2026-12-25T00:00:00'
  }),
});

const data = await response.json();
console.log(data);
```

---

### Using Postman

1. **Create a new request**
2. **Set method:** GET/PUT
3. **Set URL:** `http://localhost:3001/api/countdown`
4. **Add header (for admin endpoints):**
   - Key: `X-API-Key`
   - Value: `dev-api-key-change-in-production`
5. **Add body (for PUT requests):**
   - Type: JSON
   - Content: `{"date": "2026-12-25T00:00:00"}`

---

## 🔒 Security Notes

### Production Checklist

- [ ] Change `ADMIN_API_KEY` to a strong, unique value
- [ ] Set `NODE_ENV=production`
- [ ] Set `CORS_ORIGIN` to your domain
- [ ] Don't commit `.env` file to git
- [ ] Use HTTPS in production
- [ ] Consider rate limiting for admin endpoints
- [ ] Monitor server logs for unauthorized access attempts

### API Key Best Practices

1. **Generate strong keys:** Use random 32+ character strings
2. **Rotate regularly:** Change keys periodically
3. **Keep secret:** Never commit to git or share publicly
4. **Use environment variables:** Store in `.env`, not code
5. **Different keys per environment:** Dev, staging, production

---

## 🐛 Error Responses

All endpoints return errors in this format:

```json
{
  "success": false,
  "error": "Error message here"
}
```

**Common HTTP Status Codes:**

- `200` - Success
- `400` - Bad request (invalid input)
- `401` - Unauthorized (missing API key)
- `403` - Forbidden (invalid API key)
- `404` - Not found
- `500` - Internal server error

---

## 📊 Response Times

Expected response times:

- `/api/countdown` - < 10ms
- `/api/health` - < 5ms
- `/api/ping` - < 5ms
- Admin endpoints - < 20ms

---

## 🔄 Caching

The frontend caches countdown status and refreshes based on `config.refreshInterval` (default: 60 seconds).

To force immediate update on client:
1. User refreshes page
2. Wait for next auto-refresh cycle

---

## 📝 Logging

Server logs include:

- Request method and path
- Response status code
- Response time
- Timestamp
- Errors with stack traces

Example log output:
```
[2026-01-22T12:00:00.000Z] GET /api/countdown 200 8ms
[2026-01-22T12:01:00.000Z] PUT /api/countdown/reveal-date 200 15ms
[ERROR] PUT /api/countdown/reveal-date
Error: Invalid date format
```

---

**Need help?** Check the main [README.md](README.md) or [QUICK_START.md](QUICK_START.md)
