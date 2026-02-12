const express = require("express");
const connectDB = require("./db");
const Student = require("./StudentSchema");

const app = express();
app.use(express.json());

connectDB();

// 🔥 ADD STUDENT API
app.post("/add-student", async (req, res) => {
  try {
    const student = await Student.create(req.body);
    res.status(201).json({
      message: "Student added successfully",
      data: student
    });
  } catch (error) {
    res.status(400).json({
      message: error.message
    });
  }
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
