import React, { Component } from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button"
import api from "../api"
import AddButton from "./addButton"

class SearchBar extends Component{
    state={
        search:"",
        filter:"",
    };
    handleInputChange = event => {
        this.setState({ search: event.target.value })
    };
    handleFormSubmit = event => {
        event.preventDefault();
        this.setState({...this.state, filter: this.state.search, search:""});
        document.getElementsByClassName("searchBar")[0].value="";
    }
    render(){
        return (
            <div>
            <Form onSubmit={this.handleFormSubmit}>
                <Form.Group controlId="searchform">
                    <Form.Label>
                        Search By Name
                    </Form.Label>
                    <Form.Control className="searchBar" type="text" placeholder="Search" onChange={this.handleInputChange}/>
                </Form.Group>
                <Button variant="primary" type="Submit">
                    Submit
                </Button>
            </Form>
            <AddButton filter={this.state.filter}/>
            </div>
        )
    }
}

export default SearchBar;