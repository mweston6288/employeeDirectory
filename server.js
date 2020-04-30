const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 8080;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/employee", {
    useNewUrlParser: true,
    useFindAndModify: false
});

app.use(require("./server/routes/apiRoutes.js"))
app.use(express.static('client/build'));

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});