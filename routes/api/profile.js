const express = require('express');
const router = express.Router();

// Route GET api/profile/
// Tests profile route
// Access public
router.get('/', (req, res) => {
    res.json({ msg: "Profile works" });
});

module.exports = router;