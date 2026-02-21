# 🚀 Quick Start Guide - Trend Cart Backend

## ⚡ Fast Setup (5 minutes)

### 1️⃣ Open Terminal in VS Code
Press `` Ctrl + ` `` or go to Terminal → New Terminal

### 2️⃣ Navigate to Backend Folder
```powershell
cd backend
```

### 3️⃣ Install Dependencies
```powershell
npm install
```
Wait 30-60 seconds for installation to complete.

### 4️⃣ Start MongoDB

**Option A: Local MongoDB**
```powershell
# Check if MongoDB is running
mongosh
```
If it connects, MongoDB is running! Type `exit` to quit.

**Option B: MongoDB Atlas (Cloud - Recommended for beginners)**
1. Go to https://www.mongodb.com/cloud/atlas
2. Create free account → Create free cluster
3. Click "Connect" → "Connect your application"
4. Copy the connection string
5. Update `backend\.env`:
   ```
   MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/trendcart
   ```

### 5️⃣ Add Sample Products (Optional)
```powershell
node seed.js
```
This adds 10 sample fashion products to your database.

### 6️⃣ Start the Server
```powershell
npm start
```

You should see:
```
✅ MongoDB Connected Successfully
🚀 Server running on http://localhost:3000
📦 API available at http://localhost:3000/api
```

### 7️⃣ Test the API
Open browser and visit:
- http://localhost:3000/api/health (Should show: "OK")
- http://localhost:3000/api/products (Should show products list)

## ✅ Success! Your backend is running!

### Next Steps:

**Test in Browser:**
1. Open http://localhost:3000
2. Your frontend should now connect to the backend

**View Your Database:**
1. Install MongoDB Compass (GUI): https://www.mongodb.com/products/compass
2. Connect to: `mongodb://localhost:27017`
3. View the `trendcart` database

## 🛑 To Stop the Server
Press `Ctrl + C` in the terminal

## 🔄 To Restart
```powershell
npm start
```

## 🆘 Troubleshooting

### "MongoDB connection error"
- Install MongoDB: https://www.mongodb.com/try/download/community
- Or use MongoDB Atlas (cloud)

### "Port 3000 already in use"
```powershell
# Find process using port 3000
netstat -ano | findstr :3000

# Kill that process (replace PID with actual number)
taskkill /PID <PID> /F
```

### "Cannot find module 'express'"
```powershell
# Reinstall dependencies
npm install
```

## 📱 API Endpoints Reference

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/health` | GET | Check server status |
| `/api/products` | GET | Get all products |
| `/api/products/:id` | GET | Get one product |
| `/api/products` | POST | Add product |
| `/api/orders` | POST | Place order |
| `/api/orders` | GET | Get all orders |
| `/api/users` | POST | Register user |

## 🎯 Ready to Code!

Your backend is now ready. Update your frontend `index.html` to fetch products from the API instead of using hardcoded data.

Example:
```javascript
// Instead of hardcoded products array, use:
async function loadProducts() {
  const response = await fetch('http://localhost:3000/api/products');
  const products = await response.json();
  displayProducts(products);
}
```

Happy coding! 🎉
