import React, { Component } from 'react';
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"
import AddForm from "./addForm"
import api from "../api"

class AddButton extends Component{
    state={
        usingForm: false,
        name:"",
        role:"",
        DOB:"",
        email:""
    };
    renderForm=()=>{
        this.setState({usingForm:true})
        const addBtn = document.getElementById("add-btn");
        addBtn.setAttribute("hidden", true);
    };

    handleNameChange = event=>{
        this.setState({...this.state,name:event.target.value})
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
        console.log(event);
        api.addEmployee(this.state)
        this.setState({
            usingForm: false,
            name: "",
            role: "",
            DOB: "",
            email: ""})
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
            </Container>
        )
    }
}
export default AddButton;