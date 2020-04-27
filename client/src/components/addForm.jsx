import React from 'react';
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"

function AddForm(props){
    return(
        <Form onSubmit={props.handleFormSubmit}>
        {props.inUse && 
            <div>
                <Form.Group controlId="employeeForm">
                    <Form.Label>
                        Name
                    </Form.Label>
                    <Form.Control type="text" placeholder="Name" onChange={props.handleNameChange}/>
                    <Form.Label>
                        Email
                    </Form.Label>
                    <Form.Control type="email" placeholder="email" onChange={props.handleEmailChange}/>
                    <Form.Label>
                        Role
                    </Form.Label>
                    <Form.Control type="text" placeholder="Role" onChange={props.handleRoleChange}/>
                    <Form.Label>
                        DOB
                    </Form.Label>
                    <Form.Control type="date" placeholder="DOB" onChange={props.handleDOBChange}/>
                </Form.Group>
                <Button variant="primary" type="Submit">
                    Submit
                </Button>
            </div>}
        </Form>
    )
}
export default AddForm;