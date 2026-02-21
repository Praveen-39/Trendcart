const mongoose = require('mongoose');
const Product = require('./models/Product');
require('dotenv').config();

// Connect to MongoDB with timeout settings
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/trendcart', {
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
    });
    console.log('✅ Connected to MongoDB successfully!');
    return true;
  } catch (err) {
    console.error('❌ MongoDB Connection Failed!');
    console.error('Error:', err.message);
    console.error('\n📝 SETUP INSTRUCTIONS:');
    console.error('1. Install MongoDB locally: https://www.mongodb.com/try/download/community');
    console.error('   OR');
    console.error('2. Use MongoDB Atlas (Cloud - FREE & EASY):');
    console.error('   - Visit: https://www.mongodb.com/cloud/atlas/register');
    console.error('   - Create free account → Create cluster');
    console.error('   - Get connection string');
    console.error('   - Update backend\\.env file with: MONGO_URI=your_connection_string');
    console.error('\n💡 Atlas is recommended for beginners!\n');
    return false;
  }
};

// Sample products data
const sampleProducts = [
  {
    name: "Classic Blue Jeans",
    price: 1299,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Blue", "Black", "Grey"],
    category: "Jeans",
    description: "Comfortable and stylish blue jeans perfect for any occasion",
    stock: 50
  },
  {
    name: "White Cotton T-Shirt",
    price: 499,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["White", "Black", "Grey", "Navy"],
    category: "T-Shirts",
    description: "Premium cotton t-shirt for everyday wear",
    stock: 100
  },
  {
    name: "Leather Jacket",
    price: 3499,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Brown"],
    category: "Jackets",
    description: "Genuine leather jacket with stylish design",
    stock: 25
  },
  {
    name: "Summer Dress",
    price: 1999,
    image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Floral", "Red", "Blue", "White"],
    category: "Dresses",
    description: "Light and breezy summer dress",
    stock: 40
  },
  {
    name: "Formal Shirt",
    price: 899,
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["White", "Blue", "Pink", "Black"],
    category: "Shirts",
    description: "Professional formal shirt for office wear",
    stock: 60
  },
  {
    name: "Sneakers",
    price: 2499,
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772",
    sizes: ["6", "7", "8", "9", "10", "11"],
    colors: ["White", "Black", "Red", "Blue"],
    category: "Footwear",
    description: "Comfortable sneakers for daily use",
    stock: 75
  },
  {
    name: "Hoodie",
    price: 1599,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Grey", "Black", "Navy", "Red"],
    category: "Hoodies",
    description: "Cozy hoodie perfect for cold weather",
    stock: 45
  },
  {
    name: "Cargo Pants",
    price: 1499,
    image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80",
    sizes: ["28", "30", "32", "34", "36"],
    colors: ["Khaki", "Black", "Olive", "Grey"],
    category: "Pants",
    description: "Utility cargo pants with multiple pockets",
    stock: 55
  },
  {
    name: "Polo Shirt",
    price: 799,
    image: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Navy", "White", "Green", "Red"],
    category: "T-Shirts",
    description: "Classic polo shirt for casual occasions",
    stock: 70
  },
  {
    name: "Brown Pants",
    price: 799,
    image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a",
    sizes: ["28", "30", "32", "34", "36"],
    colors: ["Brown", "Beige", "Black"],
    category: "Pants",
    description: "Comfortable brown pants for everyday wear",
    stock: 50
  }
];

// Seed function
async function seedDatabase() {
  // First, connect to database
  const connected = await connectDB();
  if (!connected) {
    process.exit(1);
  }

  try {
    // Clear existing products
    console.log('🗑️  Clearing existing products...');
    await Product.deleteMany({});
    console.log('✅ Cleared existing products');

    // Insert new products
    console.log('📦 Adding new products...');
    const products = await Product.insertMany(sampleProducts);
    console.log(`✅ Successfully added ${products.length} products to database\n`);

    // Display added products
    console.log('📋 Products added:');
    products.forEach((product, index) => {
      console.log(`  ${index + 1}. ${product.name} - ₹${product.price}`);
    });

    console.log('\n🎉 Database seeded successfully!');
    await mongoose.connection.close();
    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding database:', error.message);
    await mongoose.connection.close();
    process.exit(1);
  }
}

// Run the seed function
seedDatabase();
