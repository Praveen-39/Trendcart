# 🛍️ Trend Cart - Fashion Store Backend

A complete Node.js + Express + MongoDB backend for the Trend Cart fashion e-commerce store.

## 📁 Project Structure

```
Trend Cart/
├── backend/
│   ├── server.js          # Main server file
│   ├── package.json       # Dependencies
│   ├── .env              # Environment variables
│   ├── .gitignore        # Git ignore file
│   ├── models/
│   │   ├── User.js       # User schema
│   │   ├── Product.js    # Product schema
│   │   └── Order.js      # Order schema
│   └── routes/           # API routes (optional)
├── frontend/
│   ├── index.html        # Main frontend
│   ├── style.css         # Styles
│   └── api.js           # API helper functions
└── public/               # Static assets
```

## 🚀 Setup Instructions

### Prerequisites

1. **Node.js** (v14 or higher) - [Download here](https://nodejs.org/)
2. **MongoDB** - Choose one option:
   - **Local MongoDB**: [Download here](https://www.mongodb.com/try/download/community)
   - **MongoDB Atlas** (Cloud - Free): [Sign up here](https://www.mongodb.com/cloud/atlas)

### Step 1: Install MongoDB (if using local)

**Windows:**
1. Download MongoDB Community Server
2. Run the installer
3. MongoDB should start automatically as a Windows Service
4. Test by opening Command Prompt and typing: `mongosh`

**Or use MongoDB Atlas (Cloud):**
1. Create free account at mongodb.com/cloud/atlas
2. Create a cluster
3. Get connection string (looks like: `mongodb+srv://username:password@cluster.mongodb.net/trendcart`)
4. Update `.env` file with your connection string

### Step 2: Install Backend Dependencies

Open terminal in VS Code and navigate to backend folder:

```bash
cd backend
npm install
```

This will install:
- express (Web framework)
- mongoose (MongoDB ORM)
- dotenv (Environment variables)
- cors (Cross-origin requests)
- multer (File uploads)

### Step 3: Configure Environment Variables

The `.env` file is already created. Update if needed:

```env
MONGO_URI=mongodb://localhost:27017/trendcart
PORT=3000
```

For MongoDB Atlas, use:
```env
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/trendcart?retryWrites=true&w=majority
PORT=3000
```

### Step 4: Start the Server

```bash
npm start
```

Or for development with auto-restart:
```bash
npm run dev
```

You should see:
```
✅ MongoDB Connected Successfully
🚀 Server running on http://localhost:3000
📦 API available at http://localhost:3000/api
```

## 📡 API Endpoints

### Products

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/products` | Get all products |
| GET | `/api/products/:id` | Get single product |
| POST | `/api/products` | Add new product (admin) |
| PUT | `/api/products/:id` | Update product |
| DELETE | `/api/products/:id` | Delete product |

### Users

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/users` | Register new user |
| GET | `/api/users` | Get all users |

### Orders

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/orders` | Place new order |
| GET | `/api/orders` | Get all orders |
| GET | `/api/orders/:id` | Get single order |
| PATCH | `/api/orders/:id/status` | Update order status |

### Health Check

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/health` | Check if API is running |

## 🧪 Testing the API

### Using Browser
Open: `http://localhost:3000/api/health`

### Using curl (Command Prompt/PowerShell)

**Get all products:**
```bash
curl http://localhost:3000/api/products
```

**Add a product:**
```bash
curl -X POST http://localhost:3000/api/products -H "Content-Type: application/json" -d "{\"name\":\"Blue Jeans\",\"price\":1299,\"image\":\"https://example.com/image.jpg\",\"sizes\":[\"S\",\"M\",\"L\"],\"colors\":[\"Blue\",\"Black\"]}"
```

**Place an order:**
```bash
curl -X POST http://localhost:3000/api/orders -H "Content-Type: application/json" -d "{\"userName\":\"John Doe\",\"phone\":\"9876543210\",\"address\":\"123 Main St\",\"productId\":\"PRODUCT_ID_HERE\",\"size\":\"M\",\"color\":\"Blue\",\"quantity\":1,\"totalAmount\":1299}"
```

## 🔗 Frontend Integration

Include the API helper in your HTML:

```html
<script src="api.js"></script>
<script>
  // Load products from database
  async function loadProducts() {
    const products = await API.getProducts();
    console.log(products);
    // Display products...
  }

  // Place order
  async function placeOrder(orderData) {
    const order = await API.placeOrder(orderData);
    if (order) {
      alert('Order placed successfully!');
    }
  }
</script>
```

## 📦 Adding Initial Products to Database

You can add products via POST request or create a seed script:

Create `backend/seed.js`:

```javascript
const mongoose = require('mongoose');
const Product = require('./models/Product');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI);

const products = [
  {
    name: "Classic Blue Jeans",
    price: 1299,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Blue", "Black"],
    category: "Jeans",
    stock: 50
  },
  // Add more products...
];

async function seedDB() {
  await Product.deleteMany({});
  await Product.insertMany(products);
  console.log('✅ Database seeded!');
  process.exit();
}

seedDB();
```

Run: `node seed.js`

## 🛠️ Troubleshooting

### MongoDB Connection Error
- Ensure MongoDB is running: `mongosh` (in Command Prompt)
- Check MONGO_URI in .env file
- For Windows: Check if MongoDB service is running in Services

### Port Already in Use
- Change PORT in .env file
- Or kill process using port 3000:
  ```powershell
  netstat -ano | findstr :3000
  taskkill /PID <PID> /F
  ```

### CORS Errors
- Backend already has CORS enabled
- Check if frontend is making requests to correct URL

## 📚 Next Steps

1. ✅ Backend is ready
2. 🔄 Update frontend to use API instead of hardcoded data
3. 🔐 Add authentication (JWT)
4. 📧 Add email notifications
5. 💳 Integrate payment gateway (Razorpay/Stripe)
6. 🚀 Deploy to cloud (Render, Heroku, Railway)

## 🤝 Support

If you need help:
1. Check MongoDB is running: `mongosh`
2. Check server is running: `http://localhost:3000/api/health`
3. Check console for errors

## 📄 License

MIT License - Feel free to use for your projects!
