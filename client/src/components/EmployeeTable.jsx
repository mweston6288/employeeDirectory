import React, { Component } from 'react';
import Table from "react-bootstrap/Table"
import apis from '../api';

function EmployeeTable(props) {
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

export default EmployeeTable;