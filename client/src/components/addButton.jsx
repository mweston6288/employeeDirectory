// The add employee button component. Due to how data interacts, the employee table branches under this component

import React, { Component } from 'react';
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"
import AddForm from "./addForm"
import api from "../api"
import EmployeeTable from "./EmployeeTable"

// AddButton receives information from the searchBar. Searchbar informs this component if the employee table is currently being filtered.
class AddButton extends Component{
    constructor(props){
        super(props);
        this.state = {
            usingForm: false,
            name: "",
            role: "",
            DOB: "",
            email: "",
            result: [],
            filter: props.filter
        };
    }
    componentDidMount() {
        api.getAllEmployees().then(res => {
            this.setState({ ...this.state, result: res.data })
        })
    }
    // Update if searchbar updates.
    componentDidUpdate(prevProps){
        if (this.props.filter !== prevProps.filter){
            if(this.props.filter !== ""){
                api.getEmployeesByName(this.props.filter).then(res=>{
                    this.setState({ ...this.state, filter: this.props.filter, result: res.data })

                })
            }
            else{
                api.getAllEmployees().then(res => {
                    this.setState({ ...this.state, filter: this.props.filter, result: res.data })
                })
            }
        }
    }
    // When the add button is clicked, show the employee form and hide the button
    renderForm=()=>{
        this.setState({usingForm:true})
        const addBtn = document.getElementById("add-btn");
        addBtn.setAttribute("hidden", true);
    };
    // Update the appropriate fields on change
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
    }
    // When the submit button is clicked, do some checks and then add the employee to the database.
    handleFormSubmit = async event=>{
        event.preventDefault()
        // Make sure all fields are filled in
        if (!this.state.name || !this.state.role || !this.state.DOB || !this.state.email){
            this.setState({...this.state, usingForm: false})
            const addBtn = document.getElementById("add-btn");
            addBtn.removeAttribute("hidden");
            return;
        }
        // Reset the state and set the result array to all employees
        api.addEmployee(this.state).then(()=>{
            api.getAllEmployees().then(res => {
       
            this.setState({...this.state,
                    usingForm: false,
                    name: "",
                    role: "",
                    DOB: "",
                    email: "",
                    result: res.data
            });
            });
        })

        // Restore the button
        const addBtn = document.getElementById("add-btn");
        addBtn.removeAttribute("hidden");
    }
    // Manage when you sort the employees
    handleSort=event=>{
        console.log(event.target)
        // Pass the sorting method to the API then display the results.
        api.getEmployeesBySort(event.target.id).then(res=>{
            console.log(res);
            this.setState({...this.state, result:res.data})
        })
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
                <EmployeeTable 
                    employees={this.state.result} 
                    handleSort={this.handleSort}
                />

            </Container>
        )
    }
}
export default AddButton;