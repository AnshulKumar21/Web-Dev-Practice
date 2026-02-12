const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://anshulkashyap118_db_user:c6qEvY0GdVAQgAfM@cluster0.ptc7hxl.mongodb.net/schema_practice"
    );

    console.log("MongoDB Connected Successfully");
  } catch (error) {
    console.log("MongoDB Connection Error:", error.message);
  }
};

module.exports = connectDB;
