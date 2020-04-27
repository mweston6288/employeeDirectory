const Router = require("express").Router();
const Employee = require("../models/employee.js");

Router.post("/api/employee",(req,res)=>{
    Employee.create(req.body).then((response)=>{
        res.json(response);
    })
});
Router.get("/api/employee",(req,res)=>{
     Employee.find({}).then((response)=>{
        res.json(response);
     })
})
module.exports = Router