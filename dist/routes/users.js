"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const app_1 = require("../app");
const router = (0, express_1.Router)();
// POST route to add new user
router.post('/users', (req, res) => {
    // Parse the request
    if (!req.body.name || !req.body.email) {
        res.status(400).json({ message: "Could not add user." });
        return;
    }
    const name = req.body.name;
    const email = req.body.email;
    // Create new user and add to the list
    const newUser = { name, email };
    app_1.users.push(newUser);
    // Send the response
    res.json({ message: 'User successfully added',
        user: newUser
    });
});
// GET route to fetch all users
router.get('/users', (req, res) => {
    // Send the response
    res.status(201).json({ users: app_1.users });
});
exports.default = router;
