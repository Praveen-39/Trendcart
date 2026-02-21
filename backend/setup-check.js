const mongoose = require('mongoose');
require('dotenv').config();

console.log('🔍 Checking MongoDB Connection...\n');

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/trendcart';

console.log('Attempting to connect to:', MONGO_URI.replace(/:[^:]*@/, ':****@')); // Hide password

mongoose.connect(MONGO_URI, {
  serverSelectionTimeoutMS: 5000,
  socketTimeoutMS: 45000,
})
  .then(() => {
    console.log('✅ SUCCESS! MongoDB is connected and working!\n');
    console.log('You can now run:');
    console.log('  1. node seed.js     (to add sample products)');
    console.log('  2. npm start        (to start the server)\n');
    mongoose.connection.close();
    process.exit(0);
  })
  .catch((err) => {
    console.log('❌ FAILED! Cannot connect to MongoDB\n');
    console.log('Error:', err.message, '\n');
    
    console.log('═══════════════════════════════════════════════════════════');
    console.log('📝 QUICK FIX - Choose ONE option:\n');
    
    console.log('🌟 OPTION 1: MongoDB Atlas (Cloud - RECOMMENDED for beginners)');
    console.log('   ✅ No installation needed');
    console.log('   ✅ Free forever');
    console.log('   ✅ Works immediately\n');
    console.log('   Steps:');
    console.log('   1. Visit: https://www.mongodb.com/cloud/atlas/register');
    console.log('   2. Sign up (Google/GitHub login works)');
    console.log('   3. Create FREE cluster (M0 Sandbox)');
    console.log('   4. Click "Connect" → "Connect your application"');
    console.log('   5. Copy the connection string');
    console.log('   6. Open: backend\\.env');
    console.log('   7. Replace MONGO_URI with your connection string');
    console.log('   8. Replace <password> in the string with your actual password\n');
    
    console.log('💻 OPTION 2: Install MongoDB Locally');
    console.log('   Download: https://www.mongodb.com/try/download/community');
    console.log('   (Takes 10-15 minutes to install)\n');
    
    console.log('═══════════════════════════════════════════════════════════\n');
    
    mongoose.connection.close();
    process.exit(1);
  });

// Prevent hanging
setTimeout(() => {
  console.log('⏱️  Connection timeout - MongoDB is not responding');
  mongoose.connection.close();
  process.exit(1);
}, 10000);
