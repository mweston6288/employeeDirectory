import React, { Component } from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button"
import api from "../api"

class SearchBar extends Component{
    state={
        search:"",
        result:[]
    };

    handleInputChange = event => {
        this.setState({ search: event.target.value })
    };
    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.search){
        api.getEmployeesByName(this.state.search).then(res=>{
            console.log(res);
        })}
        else{
            api.getAllEmployees().then(res=>{
                console.log(res);
            })
        }
    }
    render(){
        return (
            <Form onSubmit={this.handleFormSubmit}>
                <Form.Group controlId="searchform">
                    <Form.Label>
                        Search By Name
                    </Form.Label>
                    <Form.Control type="text" placeholder="Search" onChange={this.handleInputChange}/>
                </Form.Group>
                <Button variant="primary" type="Submit">
                    Submit
                </Button>
            </Form>
        )
    }

}

export default SearchBar;