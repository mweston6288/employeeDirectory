import React, { Component } from 'react';
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"
import AddForm from "./addForm"

class AddButton extends Component{
    state={
        usingForm: false
    }
    renderForm=()=>{
        this.setState({usingForm:true})
        const addBtn = document.getElementById("add-btn");
        addBtn.setAttribute("hidden", true);
        console.log(this.state.usingForm);
    };
    render(){
        return(
            <Container>
                <Button id="add-btn" onClick={this.renderForm}>
                    Add new Employee
                </Button>
                <AddForm inUse={this.state.usingForm}/>
            </Container>
        )
    }
}
export default AddButton;