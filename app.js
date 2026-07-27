const express = require("express");
const client = require("prom-client");
const app = express();
const PORT = 3000;
client.collectDefaultMetrics();

const requestCounter = new client.Counter({
    name: "http_requests_total",
    help: "Total number of HTTP requests",
    labelNames: ["method", "status"]
});

const responseTime = new client.Histogram({
    name: "http_request_duration_seconds",
    help: "HTTP request duration in seconds",
    buckets: [0.1, 0.3, 0.5, 1, 2, 5]

});
app.use((req, res, next) => {
    const start = Date.now();

    console.log(`${req.method} ${req.url}`);
    res.on("finish", () => {

    requestCounter.inc({
        method: req.method,
        status: res.statusCode
    });

    const duration = (Date.now() - start) / 1000;

    responseTime.observe(duration);

    console.log(`${req.method} ${req.url} ${res.statusCode} ${duration}s`);
});
    next();
});


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
app.get("/error", (req, res) => {
    res.status(500).json({
        error: "Internal Server Error"
    });
});
app.get("/users", (req, res) => {
    res.json([
        { id: 1, name: "Pallavi" },
        { id: 2, name: "Cloud Admin" }
    ]);
});
app.get("/metrics", async (req, res) => {
    res.set("Content-Type", client.register.contentType);
    res.end(await client.register.metrics());
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

