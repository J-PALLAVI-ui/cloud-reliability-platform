const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "Welcome to the Cloud Reliability Engineering Platform!",
        status: "Running"
    });
});

app.get("/health", (req, res) => {
    res.json({
        status: "UP",
        uptime: process.uptime()
    });
});

app.get("/users", (req, res) => {
    res.json([
        { id: 1, name: "Pallavi" },
        { id: 2, name: "Cloud Admin" }
    ]);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

