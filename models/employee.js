// Mongo file that holds employee details

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const employeeSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: "Enter an employee name"
    },
    email: {
        type: String,
        trim: true,
        required: "Enter an email"
    },
    dob: {
        type: Date,
    },
    role: {
        type: String
    }
});

const employee = mongoose.model("Employee", employeeSchema);

module.exports = employee;