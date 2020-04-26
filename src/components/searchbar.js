import React from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button"
function SearchBar(){
    return (
        <Form>
            <Form.Group controlId="searchform">
                <Form.Label>
                    Search By Name
                </Form.Label>
                <Form.Control type="text" placeholder="Search"/>
            </Form.Group>
            <Button variant="primary" type="Submit">
                Submit
            </Button>
        </Form>
    )
}
export default SearchBar;