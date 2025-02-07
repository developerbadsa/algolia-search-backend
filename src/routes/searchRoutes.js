const express = require('express');
const { search, addProduct, test } = require('../controllers/searchController');

const router = express();

router.get('/search', search);
router.get('/test', test);
router.post('/add', addProduct);

module.exports = router;
