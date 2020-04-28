import axios from "axios"

const api = axios.create({
    baseURL: process.env.MONGODB_URI || 'http://localhost:3000',
})

export const addEmployee = ({ name, DOB, role, email }) => api.post("./api/employee", {name,DOB,role,email});
export const getAllEmployees = ()=>api.get("./api/employee");
export const getEmployeesBySort = (id) => api.get("./api/employee/"+id)

const apis = {
    addEmployee,
    getAllEmployees,
    getEmployeesBySort
}

export default apis;