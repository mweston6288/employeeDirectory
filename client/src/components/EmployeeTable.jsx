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
            <tbody>

            {props.employees.map(employee=>(
                    <tr>
                        <td>{employee.name}</td>
                        <td>{employee.email}</td>
                    <td>{employee.role}</td>
                    <td>{employee.DOB}</td>

                    </tr>
            ))}
            </tbody>

        </Table>
    )

    }

export default EmployeeTable;