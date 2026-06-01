# Jeff's Planner — Setup Guide

A PWA task planner that works on Samsung (Android) and Mac, with real-time sync via Firebase.

---

## Step 1 — Deploy to GitHub Pages

```bash
cd ~/Documents/Claude/planner-app
git init
git add .
git commit -m "init planner app"
gh repo create jeffd1130/planner --public --push --source .
```

Then in GitHub: **Settings → Pages → Source: main / (root)** → Save.

Your URL: `https://jeffd1130.github.io/planner/`

---

## Step 2 — Set up Firebase (for cross-device sync)

1. Go to [console.firebase.google.com](https://console.firebase.google.com)
2. **Add project** → name it `jeff-planner` → Create
3. **Project Settings** (gear icon) → **Your apps** → `</>` (web) → Register app → copy the `firebaseConfig`
4. Open `app.js` and paste the values into `FIREBASE_CONFIG` at the top
5. Back in Firebase Console: **Build → Firestore Database → Create database** → Start in test mode → Next → Enable
6. Commit + push:
   ```bash
   git add app.js && git commit -m "add firebase config" && git push
   ```

---

## Step 3 — Install on Samsung S23 Ultra

1. Open **Chrome** → `https://jeffd1130.github.io/planner/`
2. Chrome will show an **"Add to Home Screen"** banner at the bottom — tap it
3. Or: tap the **3-dot menu (⋮)** → **Add to Home Screen** → Add

> Also works in Samsung Internet: tap the menu → **Add page to** → **Home screen**

---

## Step 4 — Install on Mac

1. Open Chrome → `https://jeffd1130.github.io/planner/`
2. Click the **install icon** in the address bar (or Chrome menu → Install Jeff's Planner)

---

## Sync indicator (top-right dot)

- **Gray** — offline / Firebase not configured (localStorage only)
- **Gold** — syncing
- **Green** — synced across devices

---

## Without Firebase

The app still works on one device using browser localStorage. Set up Firebase when you're ready for cross-device sync.
