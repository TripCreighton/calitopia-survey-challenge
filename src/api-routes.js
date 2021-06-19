const router = require("express").Router();

// Health
router.get("/health", (req, res) => {
    res.status(200).send({
        ping: "pong"
    })
});

module.exports = router;