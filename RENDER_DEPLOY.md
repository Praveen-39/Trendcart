# Render Deployment Guide for Trend Cart Backend

## 🚀 Deploy to Render.com

### Step 1: Push Your Code to GitHub (Already Done ✅)
Your code is at: https://github.com/Praveen-39/Trendcart

### Step 2: Sign Up on Render
1. Go to: https://render.com
2. Sign up with your GitHub account (recommended)

### Step 3: Create a New Web Service

1. **Click "New +" → "Web Service"**

2. **Connect Your Repository:**
   - Authorize Render to access your GitHub
   - Select: `Praveen-39/Trendcart`

3. **Configure the Service:**
   - **Name:** `trendcart-backend` (or any name)
   - **Region:** Choose closest to you
   - **Branch:** `main`
   - **Root Directory:** `backend`
   - **Runtime:** `Node`
   - **Build Command:** `npm install`
   - **Start Command:** `node server.js`
   - **Plan:** `Free` (select Free tier)

4. **Add Environment Variables:**
   Click "Advanced" → "Add Environment Variable"
   
   Add these:
   ```
   MONGO_URI = mongodb+srv://praveenpraveen3944_db_user:praveen3944@cluster0.a0mu76e.mongodb.net/trendcart?retryWrites=true&w=majority&appName=Cluster0
   
   PORT = 10000
   ```
   (Render automatically uses port 10000, but it will override with their assigned port)

5. **Click "Create Web Service"**

### Step 4: Wait for Deployment (2-3 minutes)
- Render will install dependencies
- Start your server
- Give you a live URL like: `https://trendcart-backend.onrender.com`

### Step 5: Test Your Deployment
Once deployed, test these endpoints:
- `https://your-app-name.onrender.com/api/health`
- `https://your-app-name.onrender.com/api/products`

### Step 6: Update Frontend
After deployment, update your frontend to use the Render URL:

In `index.html`, change:
```javascript
const API_URL = 'http://localhost:3000/api';
```

To:
```javascript
const API_URL = 'https://your-app-name.onrender.com/api';
```

## 📝 Important Notes

### Free Tier Limitations:
- ⚠️ **Service spins down after 15 minutes of inactivity**
- First request after inactivity may take 30-60 seconds (cold start)
- 750 hours/month free
- Enough for testing and small projects

### MongoDB Atlas:
- Your MongoDB is already hosted (Atlas cloud)
- It will work perfectly with Render
- Make sure your Atlas cluster allows connections from anywhere (0.0.0.0/0)

### CORS:
- Your server already has CORS enabled
- It will accept requests from any frontend domain

## 🔄 Auto-Deploy Updates

Every time you push to GitHub:
```bash
git add .
git commit -m "Update backend"
git push origin main
```

Render will automatically redeploy! 🎉

## 🐛 Troubleshooting

### "Application failed to respond"
- Check Render logs: Dashboard → Your Service → Logs
- Verify MONGO_URI is correct
- Make sure PORT uses process.env.PORT

### MongoDB Connection Failed
- Verify connection string in environment variables
- Check MongoDB Atlas Network Access (allow 0.0.0.0/0)

### Build Failed
- Check that package.json is in the backend folder
- Verify all dependencies are listed

## 🎯 Your Deployed API Will Be:
```
https://your-app-name.onrender.com/api/products
https://your-app-name.onrender.com/api/orders
https://your-app-name.onrender.com/api/users
```

Good luck! 🚀
