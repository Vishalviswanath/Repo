const mongoose = require('mongoose');
const connectDB = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://ecommerceUser:ecommerceUser@ecommerceuser.5g8dx.mongodb.net/?retryWrites=true&w=majority&appName=EcommerceUser'
    );
    console.log('connected..................................');
  } catch (error) {
    console.log(`Error connecting to database: ${error}`);
    process.exit(1);
  }
};

module.exports = connectDB;
