const express = require("express");
const router = express.Router();
const Supplier = require("../models/supplier");
const { where } = require("sequelize");

//GET Semua Supplier
router.get("/", async (req, res) => {
  const supplier = await Supplier.findAll();
  res.json(supplier);
});

//GET supplier by ID
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const supplier = await Supplier.findByPk();
  if (supplier) {
    res.json(supplier);
  } else {
    res.status(404).json({ message: "Supplier not found" });
  }
});

//POST Tambah Supplier
router.post("/", async (req, res) => {
  const { idSup, namaSupplier, Perusahaan, barang, kuota, hari } = req.body;
  try {
    const newSupplier = await Supplier.create({
      idSup,
      namaSupplier,
      Perusahaan,
      barang,
      kuota,
      hari,
    });
    res.status(201).json(newSupplier);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

//PUT Update Supplier
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { idSup, namaSupplier, Perusahaan, barang, kuota, hari } = req.body;
  try {
    const update = await Supplier.update(
      { idSup, namaSupplier, Perusahaan, barang, kuota, hari },
      { where: { idSup: req.params.id } }
    );
    res.json({ message: "Supplier updated", update });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

//DELETE Supplier
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await Supplier.destroy({ where: { idSup: id } });

    if (deleted) {
      res.json({ message: "Supplier deleted" });
    } else {
      res.status(400).json({ message: "Supplier not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
