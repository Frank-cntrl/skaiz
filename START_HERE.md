# 🚀 START HERE - SKAIZ Website

Your countdown timer system is ready to go!

---

## ⚡ Quick Start (30 seconds)

```bash
# 1. Start both frontend and backend
npm run dev:all

# 2. Open browser
# http://localhost:5173

# ✨ Done!
```

---

## 📅 Set Your Reveal Date

Edit `server/config/countdown.config.js`:

```javascript
revealDate: new Date('2026-02-01T00:00:00'),  // ← Change this date
```

---

## 🎯 What You Have

### ✅ Countdown Timer System
- Beautiful countdown screen with SkaizWorld image
- Server-controlled reveal date
- Automatic transition to main site when countdown ends

### ✅ Professional Backend
- Organized file structure
- Admin API endpoints
- Authentication system
- Request logging
- Environment variable support

### ✅ Code-Split Frontend
- Main site code hidden until reveal
- Users can't access portfolio pages early
- Lazy-loaded components
- Responsive design

---

## 📚 Documentation Files

### Essential
1. **[BACKEND_REMODEL_SUMMARY.md](BACKEND_REMODEL_SUMMARY.md)** ⭐ READ THIS FIRST
   - Complete overview of new backend
   - All new features explained
   - Examples and usage

2. **[QUICK_START.md](QUICK_START.md)** - Fast setup guide

### Backend
3. **[BACKEND_GUIDE.md](BACKEND_GUIDE.md)** - Architecture guide
4. **[BACKEND_API.md](BACKEND_API.md)** - API reference

### General
5. **[README.md](README.md)** - Main documentation
6. **[COUNTDOWN_SETUP.md](COUNTDOWN_SETUP.md)** - Countdown config
7. **[PROJECT_STRUCTURE.md](PROJECT_STRUCTURE.md)** - Project overview

---

## 🎨 Key Features

### 1. Change Countdown WITHOUT Restarting Server

```bash
curl -X PUT \
  -H "X-API-Key: dev-api-key-change-in-production" \
  -H "Content-Type: application/json" \
  -d '{"date": "2026-12-25T00:00:00"}' \
  http://localhost:3001/api/countdown/reveal-date
```

### 2. Backend Controls Frontend

Change title, subtitle, message, or image in `server/config/countdown.config.js`:

```javascript
screen: {
  title: 'SKAIZ',              // ← Change title
  subtitle: 'WORLD',           // ← Change subtitle
  message: 'Coming Soon',      // ← Change message
  socialLinks: { ... },        // ← Change links
  backgroundImage: '/skaiz-world.png',  // ← Change image
}
```

Frontend updates automatically!

### 3. Environment Variables

Create `.env` file (already created):

```bash
PORT=3001
FORCE_REVEAL=false
ADMIN_API_KEY=dev-api-key-change-in-production
```

---

## 🧪 Testing

### See Countdown Screen

1. Set future date in `server/config/countdown.config.js`
2. Run `npm run dev:all`
3. Should see countdown

### Skip Countdown (Test Main Site)

```bash
curl -X PUT \
  -H "X-API-Key: dev-api-key-change-in-production" \
  -H "Content-Type: application/json" \
  -d '{"enabled": true}' \
  http://localhost:3001/api/countdown/force-reveal
```

Then refresh browser.

---

## 📖 What Changed from Before

### Old Backend
```
server/
├── server.js    # Everything in one file
└── config.js    # Basic config
```

### New Backend (Now)
```
server/
├── config/       # Organized configuration
│   ├── countdown.config.js
│   └── server.config.js
├── middleware/   # Reusable middleware
│   ├── auth.js
│   └── logger.js
├── routes/       # Clean API routes
│   ├── countdown.routes.js
│   └── health.routes.js
└── server.js     # Clean entry point
```

### New Features
✅ Admin API endpoints
✅ API key authentication
✅ Request logging  
✅ Environment variables
✅ Better error handling
✅ Health check endpoints
✅ Backend-controlled frontend

---

## 🔌 API Endpoints

### Public
```
GET  /api/countdown    Get countdown status
GET  /api/health       Health check
GET  /api/ping         Ping
```

### Admin (Require API Key)
```
GET  /api/countdown/config         Get full config
PUT  /api/countdown/reveal-date    Update reveal date
PUT  /api/countdown/force-reveal   Toggle force reveal
```

---

## 📝 Files You Can Edit

### To Change Countdown Date/Settings
- `server/config/countdown.config.js`

### To Change Server Settings
- `server/config/server.config.js`
- `.env`

### To Change Frontend
- `src/pages/` - Portfolio pages
- `src/components/CountdownScreen.jsx` - Countdown UI

---

## ⚙️ Available Commands

```bash
# Development
npm run dev           # Frontend only
npm run dev:server    # Backend only
npm run dev:all       # Both (recommended)

# Production
npm run build         # Build
npm start             # Run production server

# Other
npm run lint          # Check code
```

---

## 🔐 Security Notes

**⚠️ Before Production:**
1. Change `ADMIN_API_KEY` in `.env`
2. Set `NODE_ENV=production`
3. Set `CORS_ORIGIN` to your domain
4. Don't commit `.env` to git

---

## 🎯 Next Steps

1. ✅ **Read** [BACKEND_REMODEL_SUMMARY.md](BACKEND_REMODEL_SUMMARY.md)
2. ✅ **Set** your reveal date
3. ✅ **Run** `npm run dev:all`
4. ✅ **Test** the countdown
5. ✅ **Customize** as needed

---

## 🆘 Quick Troubleshooting

**Server won't start:**
```bash
lsof -ti:3001 | xargs kill -9
npm run dev:server
```

**Admin API not working:**
```bash
# Check API key
cat .env | grep ADMIN_API_KEY
```

**Changes not showing:**
- Restart server: `npm run dev:server`
- Or use admin API (no restart needed)

---

## 📞 Help & Documentation

- **Backend:** [BACKEND_GUIDE.md](BACKEND_GUIDE.md)
- **API:** [BACKEND_API.md](BACKEND_API.md)
- **Setup:** [QUICK_START.md](QUICK_START.md)

---

**Everything is ready! Start with:**

```bash
npm run dev:all
```

**Then open:** `http://localhost:5173`

🎉 **Enjoy!**
