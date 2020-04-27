import React, { Component } from 'react';
import Table from "react-bootstrap/Table"

class EmployeeTable extends Component{
    render(){
        return(
            <Table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>email</th>
                        <th>Role</th>
                        <th>DOB</th>
                    </tr>
                </thead>
            </Table>
        )

    }
}

export default EmployeeTable;