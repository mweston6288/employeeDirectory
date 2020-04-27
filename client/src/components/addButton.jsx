import React, { Component } from 'react';
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"
import AddForm from "./addForm"
import api from "../api"
import EmployeeTable from "./EmployeeTable"

class AddButton extends Component{
    state={
        usingForm: false,
        updated: false,
        name:"",
        role:"",
        DOB:"",
        email:"",
        response:[]
    };
    componentDidMount(){
        api.getAllEmployees().then(res=>{
            this.setState({...this.state, response:res.data})
        })
    }
    renderForm=()=>{
        this.setState({usingForm:true})
        const addBtn = document.getElementById("add-btn");
        addBtn.setAttribute("hidden", true);
    };

    handleNameChange = event=>{
        this.setState({...this.state,name:event.target.value})
        console.log(this.state)
    };
    handleEmailChange = event => {
        this.setState({ ...this.state, email: event.target.value })
    };
    handleRoleChange = event => {
        this.setState({ ...this.state, role: event.target.value })
    };
    handleDOBChange = event=>{
        this.setState({ ...this.state, DOB: new Date(event.target.value)})
        console.log(this.state)
    }
    handleFormSubmit = async event=>{
        event.preventDefault()
        api.addEmployee(this.state).then(()=>{
            api.getAllEmployees().then(res=>{
                this.setState({
                    usingForm: false,
                    name: "",
                    role: "",
                    DOB: "",
                    email: "",
                    response: res.data
                });
            })
        })


        const addBtn = document.getElementById("add-btn");
        addBtn.removeAttribute("hidden");
    }
    render(){
        return(
            <Container>
                <Button id="add-btn" onClick={this.renderForm}>
                    Add new Employee
                </Button>
                <AddForm 
                    inUse={this.state.usingForm}
                    handleNameChange={this.handleNameChange}
                    handleRoleChange={this.handleRoleChange}
                    handleEmailChange={this.handleEmailChange}
                    handleDOBChange={this.handleDOBChange}
                    handleFormSubmit={this.handleFormSubmit}
                />
                <EmployeeTable employees={this.state.response} />

            </Container>
        )
    }
}
export default AddButton;