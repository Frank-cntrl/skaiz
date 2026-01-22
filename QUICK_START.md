# ⚡ Quick Start Guide

## 🎯 What's Been Set Up

Your SKAIZ website now has a countdown timer reveal system:

- ✅ Backend server that controls the countdown
- ✅ Beautiful countdown screen with the SkaizWorld image
- ✅ Code-split architecture (main site code only loads after reveal)
- ✅ Automatic transition from countdown to full site

---

## 🚀 To Start Development RIGHT NOW

```bash
npm run dev:all
```

This starts both the frontend (Vite) and backend (Express) servers.

**Access the site at:** `http://localhost:5173`

---

## ⚙️ Configure Your Countdown Date

Open `server/server.js` and edit these lines:

```javascript
// Line 14-15
const REVEAL_DATE = new Date('2026-02-01T00:00:00'); // ← Change this date
const FORCE_REVEAL = false; // ← Set to true to skip countdown (for testing)
```

### Date Examples:
```javascript
// February 1, 2026 at midnight
new Date('2026-02-01T00:00:00')

// December 25, 2025 at 6 PM EST
new Date('2025-12-25T18:00:00-05:00')

// Tomorrow at noon
const tomorrow = new Date()
tomorrow.setDate(tomorrow.getDate() + 1)
tomorrow.setHours(12, 0, 0, 0)
```

---

## 🧪 Testing

### Test Countdown Screen
1. Set date to future: `new Date('2026-12-31T23:59:59')`
2. Set `FORCE_REVEAL = false`
3. Run: `npm run dev:all`
4. Should see countdown screen

### Test Main Site (Bypass Countdown)
1. Set `FORCE_REVEAL = true`
2. Run: `npm run dev:all`
3. Should see main portfolio site immediately

### Test Real Countdown
1. Set date 2 minutes from now
2. Set `FORCE_REVEAL = false`
3. Run: `npm run dev:all`
4. Watch countdown reach zero
5. Refresh page → main site appears!

---

## 📦 Available Commands

| Command | What It Does |
|---------|-------------|
| `npm run dev` | Start frontend only (Vite) |
| `npm run dev:server` | Start backend only (Express) |
| `npm run dev:all` | **Start both (recommended)** |
| `npm run build` | Build for production |
| `npm start` | Run production server |

---

## 🎨 Customization

### Change Countdown Screen Appearance
Edit: `src/components/CountdownScreen.jsx`
- Change colors, text, layout
- Modify the background image
- Update social links

### Change Countdown Logic
Edit: `server/server.js`
- Change reveal date
- Modify API response
- Add custom countdown logic

### Change Main Site
Edit files in: `src/pages/` and `src/components/`
- Everything works as before
- Site only accessible after countdown ends

---

## 🌐 Production Deployment

1. **Build the frontend:**
   ```bash
   npm run build
   ```

2. **Upload to your server:**
   - Copy entire project folder
   - Or at minimum: `dist/`, `server/`, `package.json`

3. **On the server, install and start:**
   ```bash
   npm install --production
   npm start
   ```

The server will serve both the API and static files on port 3001.

---

## 🔐 How Security Works

1. **Before countdown ends:**
   - Only `CountdownScreen.jsx` loads
   - Main site components are NOT sent to browser
   - Users can't inspect/view the main site code

2. **After countdown ends:**
   - Server returns `isRevealed: true`
   - Main site components lazy-load
   - Full portfolio becomes accessible

3. **Code Splitting:**
   - React lazy loading prevents premature code access
   - Vite builds separate chunks for each page
   - Chunks only download when needed

---

## 🆘 Troubleshooting

**"Failed to fetch countdown status"**
- Backend not running → Run `npm run dev:server`

**Countdown not showing**
- Check `FORCE_REVEAL` is `false`
- Check `REVEAL_DATE` is in the future
- Check server console for reveal date

**Image not loading**
- File should be at: `public/skaiz-world.png`
- Access directly: `http://localhost:5173/skaiz-world.png`

**Port already in use**
- Change port in `server/server.js`: `const PORT = 3002`

---

## 📝 Quick Checklist

Before launch:
- [ ] Set the correct `REVEAL_DATE` in `server/server.js`
- [ ] Set `FORCE_REVEAL = false`
- [ ] Test countdown screen loads
- [ ] Test countdown reaches zero and transitions
- [ ] Build for production: `npm run build`
- [ ] Test production build: `npm start`
- [ ] Deploy to server

---

**That's it! You're ready to go! 🎉**

For detailed documentation, see `COUNTDOWN_SETUP.md`
