const express = require('express');
const router = express.Router();

// Route GET api/posts/
// Tests post route
// Access public
router.get('/', (req, res) => {
    res.json({ msg: "Posts works" });
});

module.exports = router;