// Packages
const path = require("path");
const express = require('express');
const app = express();
app.use(express.json());

// Handlers
const apiRoutes = require("./api-routes");

app.use("/api/v1", apiRoutes);

// Default
app.listen(8050, () => {
    console.log(`Running on :8050`)
});