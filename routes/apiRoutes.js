const Router = require("express").Router();
const Employee = require("../models/employee.js");

Router.post("/api/employee",(req,res)=>{
    const employee = new Employee(req.body);
    Employee.insert(employee).then((response)=>{
        return res(response);
    })
});
Router.get("/api/employee",(req,res)=>{
     Employee.find({}).then((response)=>{
         res(response);
     })
})
module.exports = Router