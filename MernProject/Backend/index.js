const express = require("express");
const connectDB = require("./db");
const Supplier = require("./SupplierSchema");

const app = express();

// middleware
app.use(express.json());

// DB connect
connectDB();

/**
 * POST - Add Supplier
 */
app.post("/api/suppliers", async (req, res) => {
  try {
    const supplier = await Supplier.create(req.body);
    res.status(201).json({
      message: "Supplier added successfully",
      data: supplier,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

/**
 * GET - Get All Suppliers
 */
app.get("/api/suppliers", async (req, res) => {
  try {
    const suppliers = await Supplier.find();
    res.status(200).json({
      count: suppliers.length,
      data: suppliers,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
/**
 * PUT - Update Supplier by ID
 */
app.put("/api/suppliers/:id", async (req, res) => {
  try {
    const supplier = await Supplier.findByIdAndUpdate(
      req.params.id,      // supplier id
      req.body,            // new data
      { new: true }        // updated data return kare
    );

    if (!supplier) {
      return res.status(404).json({
        message: "Supplier not found",
      });
    }

    res.status(200).json({
      message: "Supplier updated successfully",
      data: supplier,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
});
/**
 * DELETE - Delete Supplier by ID
 */
app.delete("/api/suppliers/:id", async (req, res) => {
  try {
    const supplier = await Supplier.findByIdAndDelete(req.params.id);

    if (!supplier) {
      return res.status(404).json({
        message: "Supplier not found",
      });
    }

    res.status(200).json({
      message: "Supplier deleted successfully",
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
});


const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
