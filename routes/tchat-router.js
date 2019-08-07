const express = require('express');
const router = express.Router();

// Tchat
router.get('/', (req, res) => {
    res.render('tchat.pug');
});

module.exports = router;