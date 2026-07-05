const express = require("express");
const app = express();
app.use(express.json());
const taskRoutes = require("./routes/taskRoutes");

app.use("/api/tasks", taskRoutes);

app.get("/health", (req, res) => {
    res.send("Taskly API is running");
})

module.exports = app;