const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://anshulkashyap118_db_user:Kashyap321@cluster0.ptc7hxl.mongodb.net/supplier_management"
    );
    console.log("MongoDB connected to supplier_management");
  } catch (error) {
    console.log("DB connection error:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
