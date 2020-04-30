const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");
const cors = require("cors")
const PORT = process.env.MONGODB_URI || 8080;

const app = express();

app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())
app.use(express.static("../client/public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/employee", {
    useNewUrlParser: true,
    useFindAndModify: false
});

app.use(require("./server/routes/apiRoutes.js"))

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});