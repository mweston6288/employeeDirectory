import React, { Component } from 'react';
import Table from "react-bootstrap/Table"
import apis from '../api';

function EmployeeTable(props) {
    return(
        <Table>
            <thead>
                <tr>
                    <th id="name" onClick={props.handleSort}>Name</th>
                    <th id="email" onClick={props.handleSort}>email</th>
                    <th id="role" onClick={props.handleSort}>Role</th>
                    <th id="DOB" onClick={props.handleSort}>DOB</th>
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