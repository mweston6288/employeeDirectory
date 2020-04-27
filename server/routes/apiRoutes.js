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
Router.get("/api/employee/:id",(req,res)=>{
    console.log(req.params)
    id = req.params.id
    Employee.find({}).sort({[req.params.id]: 1}).then(response=>{
        res.json(response);
    })
})
module.exports = Router