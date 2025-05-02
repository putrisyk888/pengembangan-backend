const express = require('express');
const router = express.Router();
const supplierController = require('../controller/supplier');

router.get('/', supplierController.get);
router.get('/:id', supplierController.get);
router.post('/', supplierController.post);
router.put('/:id', supplierController.get);
router.delete('/:id', supplierController.delete);

module.exports = router;