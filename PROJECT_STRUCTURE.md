# 📁 Project Structure

## New Files Added for Countdown Feature

```
skaiz/
├── 📄 QUICK_START.md              ← Start here! Quick setup guide
├── 📄 COUNTDOWN_SETUP.md          ← Detailed documentation
├── 📄 PROJECT_STRUCTURE.md        ← This file
├── 📄 .env.example                ← Environment variables template
│
├── 🎛️ server/                     ← NEW: Backend server
│   ├── server.js                  ← Main Express server + countdown logic
│   └── config.js                  ← Configuration file (optional)
│
├── 🎨 src/
│   ├── App.jsx                    ← MODIFIED: Added countdown check + lazy loading
│   │
│   ├── components/
│   │   ├── CountdownScreen.jsx   ← NEW: Countdown timer component
│   │   └── Navbar.jsx
│   │
│   └── pages/
│       ├── Home.jsx               ← Code-split (loads after countdown)
│       ├── Video.jsx              ← Code-split
│       ├── Editorial.jsx          ← Code-split
│       ├── Documentary.jsx        ← Code-split
│       └── Contact.jsx            ← Code-split
│
├── 🖼️ public/
│   ├── skaiz-world.png           ← NEW: SkaizWorld countdown image
│   └── vite.svg
│
├── ⚙️ vite.config.js              ← MODIFIED: Added proxy for API
├── 📦 package.json                ← MODIFIED: Added backend deps + scripts
└── 🚫 .gitignore                  ← MODIFIED: Added .env files
```

---

## How It Works

### 1. User Visits Site

```
Browser → http://yourdomain.com
         ↓
      App.jsx loads
         ↓
  Fetches /api/countdown
         ↓
      Server responds
```

### 2. Server Decision

```javascript
// server/server.js
const now = new Date()
const timeRemaining = REVEAL_DATE - now

if (timeRemaining > 0) {
  return { isRevealed: false, timeRemaining: ... }
} else {
  return { isRevealed: true }
}
```

### 3. Client Renders

```
If isRevealed === false:
  → Show CountdownScreen.jsx
  → Main site code NOT loaded
  
If isRevealed === true:
  → Lazy load all pages
  → Show full portfolio site
```

---

## File Purposes

### Backend Files

| File | Purpose |
|------|---------|
| `server/server.js` | Express server, countdown API endpoint, production static file serving |
| `server/config.js` | Configuration file (optional, for organization) |

### Frontend Files

| File | Purpose |
|------|---------|
| `src/App.jsx` | Checks countdown status, conditionally renders countdown or main site |
| `src/components/CountdownScreen.jsx` | Beautiful countdown timer with SkaizWorld image |
| `public/skaiz-world.png` | Background image for countdown screen |

### Documentation

| File | Purpose |
|------|---------|
| `QUICK_START.md` | Fast setup guide - read this first! |
| `COUNTDOWN_SETUP.md` | Detailed configuration and deployment guide |
| `PROJECT_STRUCTURE.md` | This file - explains the architecture |

---

## Key Technologies

- **Backend:** Express.js (Node.js server)
- **Frontend:** React 19 + Vite
- **Routing:** React Router DOM
- **Styling:** Tailwind CSS v4
- **Code Splitting:** React.lazy() + Suspense

---

## Data Flow

```
┌─────────────────────────────────────────────────┐
│  Browser / User                                 │
└─────────────┬───────────────────────────────────┘
              │
              │ GET /api/countdown
              ↓
┌─────────────────────────────────────────────────┐
│  Express Server (port 3001)                     │
│  ├── Checks current time vs REVEAL_DATE         │
│  ├── Calculates time remaining                  │
│  └── Returns { isRevealed, timeRemaining }      │
└─────────────┬───────────────────────────────────┘
              │
              │ JSON response
              ↓
┌─────────────────────────────────────────────────┐
│  React App (App.jsx)                            │
│  ├── Receives countdown status                  │
│  ├── Decides what to render                     │
│  └── Updates every 60 seconds                   │
└─────────────┬───────────────────────────────────┘
              │
         ┌────┴────┐
         │         │
    false│         │true
         │         │
         ↓         ↓
┌──────────────┐ ┌──────────────────────┐
│ Countdown    │ │ Main Site            │
│ Screen       │ │ (lazy loaded)        │
│              │ │ ├── Home.jsx         │
│ [Image]      │ │ ├── Video.jsx        │
│ [Timer]      │ │ ├── Editorial.jsx    │
│ [Date]       │ │ ├── Documentary.jsx  │
│              │ │ └── Contact.jsx      │
└──────────────┘ └──────────────────────┘
```

---

## Security Notes

### Before Countdown Ends:
- ✅ Main site components are code-split
- ✅ They are NOT sent to the browser
- ✅ Users cannot view source of main site
- ✅ Network inspector won't show main site files

### After Countdown Ends:
- ✅ Server returns `isRevealed: true`
- ✅ React lazy loads main components
- ✅ Full site becomes accessible
- ✅ No manual intervention needed

### Important:
- Server time is source of truth
- Client cannot manipulate countdown
- `FORCE_REVEAL` is for developer testing only
- Remove or set to `false` in production

---

## Configuration Checklist

Before going live:

1. **Set Reveal Date**
   - [ ] Edit `server/server.js`
   - [ ] Set `REVEAL_DATE` to your launch date/time
   - [ ] Include timezone if needed

2. **Disable Force Reveal**
   - [ ] Set `FORCE_REVEAL = false`

3. **Test Countdown**
   - [ ] Run `npm run dev:all`
   - [ ] Verify countdown shows
   - [ ] Verify timer counts down correctly
   - [ ] Verify image displays

4. **Test Reveal**
   - [ ] Set date 2 minutes away
   - [ ] Wait for countdown to reach zero
   - [ ] Refresh page
   - [ ] Verify main site appears

5. **Build & Deploy**
   - [ ] Run `npm run build`
   - [ ] Test production: `npm start`
   - [ ] Deploy to server
   - [ ] Verify on live domain

---

## Maintenance

### To Change Countdown Date:
1. Stop server
2. Edit `REVEAL_DATE` in `server/server.js`
3. Restart server

### To Reset Countdown:
1. Set new future date
2. Restart server
3. Countdown reappears!

### To Permanently Show Site:
1. Set `FORCE_REVEAL = true`
2. Or set `REVEAL_DATE` to past date
3. Restart server

---

## Performance Notes

- Countdown checks server every 60 seconds
- Minimal overhead on server
- Code splitting reduces initial bundle size
- Images optimized for web
- Lazy loading improves performance

---

**Questions?** Check `QUICK_START.md` or `COUNTDOWN_SETUP.md`
