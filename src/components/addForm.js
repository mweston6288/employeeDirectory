import React from 'react';
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"

function AddForm(props){
    console.log(props)
    return(
        <Form>
        {props.inUse && 
            <div>
                <Form.Group controlId="employeeForm">
                    <Form.Label>
                        Name
                    </Form.Label>
                    <Form.Control type="text" placeholder="Name" />
                    <Form.Label>
                        Email
                    </Form.Label>
                    <Form.Control type="email" placeholder="email" />
                    <Form.Label>
                        Role
                    </Form.Label>
                    <Form.Control type="text" placeholder="Role" />
                    <Form.Label>
                        DOB
                    </Form.Label>
                    <Form.Control type="date" placeholder="DOB" />
                </Form.Group>
                <Button variant="primary" type="Submit">
                    Submit
                </Button>
            </div>}
        </Form>
    )
}
export default AddForm;