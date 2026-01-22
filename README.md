# 🌟 SKAIZ Portfolio Website

A stunning portfolio website for Kaiya "Skaiz" Lang with a countdown reveal feature.

## ✨ Features

- 🕐 **Backend-Managed Countdown Timer** - Secure, server-controlled reveal system
- 🎨 **Beautiful Countdown Screen** - Custom design with SkaizWorld branding
- 🔒 **Code-Split Architecture** - Main site code inaccessible until reveal
- 📱 **Fully Responsive** - Works on all devices
- 🎬 **Portfolio Sections:**
  - Video Work
  - Editorial Photography
  - Documentary Projects
  - Contact Form

## 🚀 Quick Start

### Install & Run

```bash
# Install dependencies
npm install

# Start both frontend and backend
npm run dev:all
```

**Visit:** `http://localhost:5173`

### Configure Countdown

Edit `server/server.js`:

```javascript
const REVEAL_DATE = new Date('2026-02-01T00:00:00'); // Your reveal date
const FORCE_REVEAL = false; // Set to true to bypass countdown for testing
```

## 📚 Documentation

- **[QUICK_START.md](QUICK_START.md)** - Get up and running in 2 minutes
- **[COUNTDOWN_SETUP.md](COUNTDOWN_SETUP.md)** - Detailed configuration guide
- **[PROJECT_STRUCTURE.md](PROJECT_STRUCTURE.md)** - Architecture overview

## 🛠️ Available Commands

```bash
npm run dev          # Start frontend only (Vite dev server)
npm run dev:server   # Start backend only (Express API)
npm run dev:all      # Start both frontend and backend
npm run build        # Build for production
npm run start        # Run production server
npm run lint         # Run ESLint
```

## 🎯 What's New - Countdown Feature

### Before Countdown Ends:
- Users see a beautiful countdown screen with SkaizWorld image
- Timer counts down days, hours, minutes, seconds
- Main portfolio site code is NOT accessible
- Server controls when site reveals

### After Countdown Ends:
- Countdown automatically hides
- Full portfolio site becomes accessible
- All pages lazy-load and display
- No manual intervention needed!

## 🏗️ Tech Stack

- **Frontend:** React 19, React Router DOM
- **Build Tool:** Vite 7
- **Styling:** Tailwind CSS 4
- **Backend:** Express.js
- **Fonts:** Playfair Display (serif), Inter (sans-serif)

## 📁 Project Structure

```
skaiz/
├── server/                    # Backend server
│   ├── server.js             # Express server + countdown API
│   └── config.js             # Configuration
│
├── src/
│   ├── App.jsx               # Main app with countdown logic
│   ├── components/
│   │   ├── CountdownScreen.jsx   # Countdown timer UI
│   │   └── Navbar.jsx
│   └── pages/
│       ├── Home.jsx
│       ├── Video.jsx
│       ├── Editorial.jsx
│       ├── Documentary.jsx
│       └── Contact.jsx
│
├── public/
│   └── skaiz-world.png       # Countdown background image
│
└── Documentation files
```

## 🎨 Customization

### Update Countdown Screen
Edit `src/components/CountdownScreen.jsx` to change:
- Colors and styling
- Background image
- Text content
- Social links

### Update Main Site
Edit files in `src/pages/` and `src/components/` as usual

### Update Countdown Date
Edit `server/server.js` to set new reveal date

## 🌐 Deployment

### Build for Production

```bash
npm run build
```

### Deploy to Server

```bash
# On your server
npm install --production
npm start
```

The server runs on port 3001 by default.

### Environment Variables

```bash
PORT=3001
NODE_ENV=production
```

## 🧪 Testing

### Test Countdown Screen
```javascript
// In server/server.js
const REVEAL_DATE = new Date('2026-12-31T23:59:59');
const FORCE_REVEAL = false;
```

### Test Main Site (Skip Countdown)
```javascript
// In server/server.js
const FORCE_REVEAL = true;
```

### Test Real Countdown
Set `REVEAL_DATE` to 2 minutes from now, watch it count down, then refresh!

## 📞 Contact

- **Instagram:** [@flyskaiz](https://www.instagram.com/flyskaiz/)
- **Location:** New York City

## 📝 License

Private - All Rights Reserved

---

**Built with ❤️ for SKAIZ**
