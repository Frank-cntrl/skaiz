# 🏗️ Backend Architecture Guide

Complete guide to the remodeled backend structure.

---

## 📁 New Backend Structure

```
server/
├── config/
│   ├── countdown.config.js    # Countdown settings & logic
│   └── server.config.js        # Server configuration
├── middleware/
│   ├── auth.js                 # Admin authentication
│   └── logger.js               # Request logging
├── routes/
│   ├── countdown.routes.js     # Countdown API endpoints
│   └── health.routes.js        # Health check endpoints
└── server.js                   # Main server file
```

---

## ✨ What's Improved

### Before (Old Structure)
```
server/
├── server.js    # Everything in one file
└── config.js    # Basic config
```

**Problems:**
- All logic in one file
- Hard to maintain
- No admin capabilities
- No logging
- No authentication
- Limited configuration

### After (New Structure)
```
server/
├── config/       # Organized configuration
├── middleware/   # Reusable middleware
├── routes/       # Clean API routes
└── server.js     # Minimal, clean entry point
```

**Benefits:**
✅ Organized and maintainable
✅ Admin API endpoints
✅ Authentication system
✅ Request logging
✅ Environment variable support
✅ Better error handling
✅ Easy to extend

---

## 🎯 Key Features

### 1. **Organized Configuration**

**`config/countdown.config.js`**
- Central countdown configuration
- Helper functions for status checks
- Easy to update settings

**`config/server.config.js`**
- Server settings
- CORS configuration
- Admin settings
- Logging configuration

### 2. **Admin API Endpoints**

Change countdown settings without restarting server:

```bash
# Update reveal date
curl -X PUT -H "X-API-Key: your-key" \
  -d '{"date": "2026-12-25T00:00:00"}' \
  http://localhost:3001/api/countdown/reveal-date

# Toggle force reveal
curl -X PUT -H "X-API-Key: your-key" \
  -d '{"enabled": true}' \
  http://localhost:3001/api/countdown/force-reveal
```

### 3. **Authentication System**

Simple API key authentication for admin endpoints:

```javascript
// Set in .env
ADMIN_API_KEY=your-secret-key

// Use in requests
headers: {
  'X-API-Key': 'your-secret-key'
}
```

### 4. **Request Logging**

Beautiful colored logs for every request:

```
[2026-01-22T12:00:00.000Z] GET /api/countdown 200 8ms
[2026-01-22T12:01:00.000Z] PUT /api/countdown/reveal-date 200 15ms
```

### 5. **Environment Variables**

Configure via `.env` file:

```bash
PORT=3001
NODE_ENV=development
FORCE_REVEAL=false
ADMIN_API_KEY=your-secret-key
LOG_LEVEL=info
```

### 6. **Better Error Handling**

Consistent error responses:

```json
{
  "success": false,
  "error": "Error message here"
}
```

---

## 🔧 Configuration Files

### `config/countdown.config.js`

**Purpose:** Manage countdown settings and logic

**Key exports:**
- `countdownConfig` - Main configuration object
- `getCountdownStatus()` - Get current status
- `updateRevealDate(date)` - Update reveal date
- `toggleForceReveal(value)` - Toggle force reveal

**Example:**
```javascript
export const countdownConfig = {
  revealDate: new Date('2026-02-01T00:00:00'),
  forceReveal: false,
  clientRefreshInterval: 60000,
  screen: {
    title: 'SKAIZ',
    subtitle: 'WORLD',
    message: 'Coming Soon',
    socialLinks: { instagram: '...' },
    backgroundImage: '/skaiz-world.png',
  },
};
```

**To change reveal date:**
1. Edit `revealDate` in this file
2. Restart server
3. Or use admin API endpoint (no restart needed)

---

### `config/server.config.js`

**Purpose:** Server and environment configuration

**Settings:**
- `port` - Server port (default: 3001)
- `env` - Environment (development/production)
- `cors` - CORS settings
- `admin` - Admin API settings
- `logging` - Logging configuration

**Example:**
```javascript
export const serverConfig = {
  port: process.env.PORT || 3001,
  env: process.env.NODE_ENV || 'development',
  cors: {
    origin: ['http://localhost:5173'],
    credentials: true,
  },
  admin: {
    enabled: true,
    apiKey: process.env.ADMIN_API_KEY,
  },
};
```

---

## 🛡️ Middleware

### `middleware/auth.js`

**Purpose:** Protect admin endpoints

**How it works:**
1. Check for API key in header or query
2. Validate against configured key
3. Allow or reject request

**Usage:**
```javascript
import { requireAdminAuth } from './middleware/auth.js';

router.put('/admin-endpoint', requireAdminAuth, (req, res) => {
  // Protected route
});
```

---

### `middleware/logger.js`

**Purpose:** Log all requests

**Features:**
- Colored output
- Request method and path
- Status code
- Response time
- Timestamps

**Example output:**
```
🚀 SKAIZ Server Started
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📍 Environment: development
🌐 Server:      http://localhost:3001
📅 Reveal Date: 2026-02-01T00:00:00.000Z
🔒 Force Reveal: ✗ Disabled
⏰ Status:      ⏳ COUNTDOWN ACTIVE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

[2026-01-22T12:00:00.000Z] GET /api/countdown 200 8ms
```

---

## 🛣️ Routes

### `routes/countdown.routes.js`

**Public Endpoints:**
- `GET /api/countdown` - Get countdown status

**Admin Endpoints:**
- `GET /api/countdown/config` - Get full config
- `PUT /api/countdown/reveal-date` - Update date
- `PUT /api/countdown/force-reveal` - Toggle reveal

---

### `routes/health.routes.js`

**Endpoints:**
- `GET /api/health` - Detailed health check
- `GET /api/ping` - Simple ping

---

## 🚀 How Frontend Uses Backend

### 1. Initial Load

```javascript
// App.jsx
const response = await fetch('/api/countdown');
const data = await response.json();

if (data.isRevealed) {
  // Show main site
} else {
  // Show countdown with data.config
}
```

### 2. Countdown Screen

```javascript
// CountdownScreen.jsx
<CountdownScreen 
  revealDate={data.revealDate}
  timeRemaining={data.timeRemaining}
  config={data.config}  // Includes screen settings
/>
```

### 3. Auto-Refresh

```javascript
// Uses backend-provided refresh interval
const interval = data.config.refreshInterval || 60000;
setInterval(checkCountdown, interval);
```

---

## 🔄 Workflow Examples

### Update Countdown Date

**Option 1: Edit Config File**
```javascript
// server/config/countdown.config.js
revealDate: new Date('2026-12-25T00:00:00'),
```
Then restart server: `npm run dev:server`

**Option 2: Use Admin API (No Restart)**
```bash
curl -X PUT \
  -H "X-API-Key: dev-api-key-change-in-production" \
  -H "Content-Type: application/json" \
  -d '{"date": "2026-12-25T00:00:00"}' \
  http://localhost:3001/api/countdown/reveal-date
```

---

### Test Countdown

**Option 1: Force Reveal via Config**
```javascript
// server/config/countdown.config.js
forceReveal: true,
```

**Option 2: Force Reveal via Environment**
```bash
FORCE_REVEAL=true npm run dev:server
```

**Option 3: Force Reveal via API**
```bash
curl -X PUT \
  -H "X-API-Key: dev-api-key-change-in-production" \
  -H "Content-Type: application/json" \
  -d '{"enabled": true}' \
  http://localhost:3001/api/countdown/force-reveal
```

---

### Customize Countdown Screen

Edit `server/config/countdown.config.js`:

```javascript
screen: {
  title: 'YOUR TITLE',
  subtitle: 'YOUR SUBTITLE',
  message: 'Your Message',
  socialLinks: {
    instagram: 'https://instagram.com/yourhandle',
  },
  backgroundImage: '/your-image.png',
}
```

Frontend automatically uses these settings!

---

## 📊 Backend vs Frontend Responsibilities

### Backend Controls:
✅ When site is revealed (reveal date)
✅ Countdown screen content (title, subtitle, message)
✅ Social links
✅ Background image path
✅ Refresh interval
✅ Force reveal toggle

### Frontend Handles:
✅ Displaying countdown timer
✅ Rendering UI
✅ Animations and transitions
✅ Responsive design
✅ User interactions

---

## 🔐 Security Features

### 1. **API Key Authentication**
Admin endpoints require valid API key

### 2. **Environment-based Config**
Sensitive settings in `.env` (not committed)

### 3. **CORS Protection**
Configurable origin restrictions

### 4. **Error Masking**
Production errors don't expose internals

### 5. **Logging**
Track all API access

---

## 🎓 Adding New Features

### Add a New Public Endpoint

1. **Create route in `routes/countdown.routes.js`:**
```javascript
router.get('/my-endpoint', (req, res) => {
  res.json({ message: 'Hello!' });
});
```

2. **Test:**
```bash
curl http://localhost:3001/api/my-endpoint
```

---

### Add a New Admin Endpoint

1. **Create route with auth:**
```javascript
router.post('/my-admin-endpoint', requireAdminAuth, (req, res) => {
  // Your logic here
  res.json({ success: true });
});
```

2. **Test:**
```bash
curl -X POST \
  -H "X-API-Key: dev-api-key-change-in-production" \
  http://localhost:3001/api/my-admin-endpoint
```

---

### Add New Configuration

1. **Add to `config/countdown.config.js`:**
```javascript
export const countdownConfig = {
  // ... existing config
  myNewSetting: 'value',
};
```

2. **Export via API:**
```javascript
router.get('/countdown', (req, res) => {
  res.json({
    // ... existing response
    myNewSetting: countdownConfig.myNewSetting,
  });
});
```

3. **Use in frontend:**
```javascript
const data = await fetch('/api/countdown');
console.log(data.myNewSetting);
```

---

## 🐛 Troubleshooting

### Server won't start

**Check:**
- Port 3001 not already in use
- `.env` file exists
- All dependencies installed (`npm install`)

**Solution:**
```bash
# Kill process on port 3001
lsof -ti:3001 | xargs kill -9

# Reinstall dependencies
npm install

# Start server
npm run dev:server
```

---

### Admin endpoints return 401/403

**Check:**
- API key is correct
- `ADMIN_ENABLED=true` in `.env`
- Using correct header or query param

**Solution:**
```bash
# Check current key in .env
cat .env | grep ADMIN_API_KEY

# Use correct key
curl -H "X-API-Key: [your-key]" http://localhost:3001/api/...
```

---

### Changes not reflecting

**If config changes:**
- Restart server: `npm run dev:server`
- Or use admin API (no restart needed)

**If code changes:**
- Server auto-restarts in dev mode
- If not, manually restart

---

## 📚 Related Documentation

- [BACKEND_API.md](BACKEND_API.md) - Complete API reference
- [QUICK_START.md](QUICK_START.md) - Quick setup guide
- [COUNTDOWN_SETUP.md](COUNTDOWN_SETUP.md) - Countdown configuration
- [PROJECT_STRUCTURE.md](PROJECT_STRUCTURE.md) - Full project overview

---

**Questions?** The code is well-commented - check the source files!
