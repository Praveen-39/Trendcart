# Vercel Deployment Guide for Trend Cart Frontend

## 🚀 Deploy to Vercel

### Step 1: Update API URL (Important!)

Before deploying, you need to update the API URL in `index.html`:

**Option A: Using Render Backend (after you deploy backend)**
```javascript
const API_URL = 'https://your-render-url.onrender.com/api';
```

**Option B: Keep localhost for testing**
```javascript
const API_URL = 'http://localhost:3000/api';
```

### Step 2: Push to GitHub

```bash
git add .
git commit -m "Prepare frontend for Vercel deployment"
git push origin main
```

### Step 3: Deploy to Vercel

1. **Go to:** https://vercel.com/signup
2. **Sign up** with your GitHub account
3. **Click "Add New..." → "Project"**
4. **Import your repository:** `Praveen-39/Trendcart`
5. **Configure Project:**
   - **Framework Preset:** Other
   - **Root Directory:** `./` (leave as root)
   - **Build Command:** (leave empty)
   - **Output Directory:** `./` (leave as root)
6. **Click "Deploy"**

### Step 4: Wait for Deployment (30 seconds)

Vercel will give you a URL like:
```
https://trendcart-xyz123.vercel.app
```

### Step 5: Update Backend CORS (if using Render)

If you deployed backend to Render, update the CORS in `backend/server.js` to allow your Vercel URL:

```javascript
app.use(cors({
  origin: ['https://your-vercel-url.vercel.app', 'http://localhost:3000']
}));
```

## 🎯 Complete Flow

### For Full Deployment:

1. **Backend on Render:**
   - Deploy backend first
   - Get URL: `https://trendcart-backend.onrender.com`

2. **Update Frontend API URL:**
   - Change `API_URL` in index.html to Render URL
   - Commit and push

3. **Frontend on Vercel:**
   - Deploy frontend
   - Get URL: `https://trendcart.vercel.app`

4. **Test:**
   - Visit your Vercel URL
   - App fetches data from Render backend
   - Everything works! 🎉

## 🔄 Auto-Deploy

Every time you push to GitHub:
```bash
git add .
git commit -m "Update frontend"
git push origin main
```

Vercel automatically redeploys! ⚡

## 📝 Important Notes

- **Free Tier:** Unlimited deployments
- **Custom Domain:** Can add your own domain
- **HTTPS:** Automatically enabled
- **Fast:** Global CDN for quick loading

## 🐛 Troubleshooting

### CORS Error
- Update backend CORS to allow your Vercel domain
- Make sure API_URL is correct

### API Not Working
- Check if backend is running (Render URL)
- Verify API_URL in index.html
- Check browser console for errors

## 🎉 Your Live App URLs

After deployment:
```
Frontend: https://your-app.vercel.app
Backend API: https://your-backend.onrender.com/api
```

Good luck! 🚀
