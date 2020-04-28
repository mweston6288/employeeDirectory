import React, { Component } from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button"
import api from "../api"
import AddButton from "./addButton"

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
        if (this.state.search !== ""){
        api.getEmployeesByName(this.state.search).then(res=>{
            console.log(res);
            this.setState({...this.state, result:res.data})
        })}
        else{
            api.getAllEmployees().then(res=>{
                console.log(res);
                this.setState({ ...this.state, result: res.data })

            })
        }
        this.setState({...this.state, search:""});
        document.getElementsByClassName("searchBar")[0].value="";
    }
    render(){
        console.log(this.state)
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
            <AddButton result={this.state.result}/>
            </div>
        )
    }
}

export default SearchBar;