# 🕐 Countdown Timer Setup Guide

This website features a backend-managed countdown timer that shows a reveal screen until a specified date/time.

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure the Countdown Date

Edit `server/server.js` and set your reveal date:

```javascript
const REVEAL_DATE = new Date('2026-02-01T00:00:00'); // Your reveal date
const FORCE_REVEAL = false; // Set to true to bypass countdown for testing
```

### 3. Run in Development Mode

**Option A: Run both frontend and backend together (recommended)**
```bash
npm run dev:all
```

**Option B: Run separately in two terminals**

Terminal 1 - Backend:
```bash
npm run dev:server
```

Terminal 2 - Frontend:
```bash
npm run dev
```

The site will be available at: `http://localhost:5173`

### 4. Production Build & Deploy

Build the frontend:
```bash
npm run build
```

Start the production server:
```bash
npm start
```

## 📝 Configuration Options

### Server Configuration (`server/server.js`)

| Setting | Description | Example |
|---------|-------------|---------|
| `REVEAL_DATE` | The date/time when the site will be revealed | `new Date('2026-02-01T00:00:00')` |
| `FORCE_REVEAL` | Bypass countdown (for testing) | `true` or `false` |
| `PORT` | Server port | `3001` (default) |

### Date Format Examples

```javascript
// Specific date and time
new Date('2026-02-01T00:00:00')

// With timezone
new Date('2026-02-01T00:00:00-05:00') // EST

// Alternative formats
new Date('February 1, 2026 00:00:00')
new Date(2026, 1, 1, 0, 0, 0) // Month is 0-indexed!
```

## 🔒 Security Features

### Code Splitting
- The main website code is lazy-loaded only after the countdown ends
- Users cannot access the main site code until the reveal date
- All page components are split into separate chunks

### Backend Control
- Countdown status is controlled server-side
- Client cannot manipulate the countdown
- Server verifies the current time against the reveal date

## 🎨 Customizing the Countdown Screen

Edit `src/components/CountdownScreen.jsx` to customize:
- Background image (currently uses `/skaiz-world.png`)
- Colors and styling
- Text and messaging
- Timer display format
- Social links

## 📦 Production Deployment

### Environment Variables

For production, you can set:
```bash
export NODE_ENV=production
export PORT=3001
```

### Deployment Steps

1. Build the frontend:
   ```bash
   npm run build
   ```

2. Upload to your server:
   - Copy the entire project directory
   - Or copy `dist/`, `server/`, `package.json`, `package-lock.json`

3. Install production dependencies:
   ```bash
   npm install --production
   ```

4. Start the server:
   ```bash
   npm start
   ```

### Nginx Configuration (Optional)

If using Nginx as a reverse proxy:

```nginx
server {
    listen 80;
    server_name yourdomain.com;

    location / {
        proxy_pass http://localhost:3001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## 🧪 Testing the Countdown

### Test the countdown screen:
1. Set `FORCE_REVEAL = false` in `server/server.js`
2. Set a future date for `REVEAL_DATE`
3. Run `npm run dev:all`
4. You should see the countdown screen

### Test the main site:
1. Set `FORCE_REVEAL = true` in `server/server.js`
2. Run `npm run dev:all`
3. The countdown will be bypassed and show the main site

### Test the reveal transition:
1. Set `REVEAL_DATE` to 1-2 minutes in the future
2. Set `FORCE_REVEAL = false`
3. Run `npm run dev:all`
4. Wait for the countdown to reach zero
5. Refresh the page - you should see the main site

## 🐛 Troubleshooting

### "Failed to fetch countdown status"
- Make sure the backend server is running (`npm run dev:server`)
- Check that port 3001 is not in use by another application
- Verify the proxy configuration in `vite.config.js`

### Countdown not updating
- The client checks the server every 60 seconds
- Refresh the page to force an immediate check
- Check browser console for errors

### Main site showing when it shouldn't
- Verify `FORCE_REVEAL` is set to `false`
- Check that `REVEAL_DATE` is in the future
- Look at server console for the reveal date being used

### Image not loading
- Verify `/Users/franccescopetta/Desktop/Projects/Kaiya-Website/skaiz/public/skaiz-world.png` exists
- Check browser console for 404 errors
- Try accessing `http://localhost:5173/skaiz-world.png` directly

## 📱 Features

- ✅ Responsive countdown timer
- ✅ Server-side time verification
- ✅ Code splitting for security
- ✅ Automatic reveal on countdown end
- ✅ Beautiful animated background
- ✅ Days/Hours/Minutes/Seconds display
- ✅ Social media links
- ✅ Smooth transitions

## 🔄 After Launch

Once the countdown ends and the site is revealed:
1. The countdown will automatically hide
2. Users will see the main SKAIZ portfolio site
3. No further changes needed - it's permanent!

To set up a new countdown later:
1. Update `REVEAL_DATE` to a new future date
2. Restart the server
3. The countdown will appear again

---

**Need help?** Check the browser console and server logs for error messages.
