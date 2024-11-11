"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
// Add route for id echoing
router.get('/echo/:id', (req, res) => {
    const { id } = req.params;
    res.json({
        id: id
    });
});
exports.default = router;
