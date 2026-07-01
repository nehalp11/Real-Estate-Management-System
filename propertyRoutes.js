const express = require("express");
const Property = require("../models/Property");
const router = express.Router();

// Create property
router.post("/", async (req, res) => {
  try {
    const property = await Property.create(req.body);
    res.status(201).json(property);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all properties
router.get("/", async (req, res) => {
  const properties = await Property.find();
  res.json(properties);
});
router.get("/:id", async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);
    res.json(property);
  } catch (error) {
    res.status(404).json({ error: "Property not found" });
  }
});


module.exports = router;
