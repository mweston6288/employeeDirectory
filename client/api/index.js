import axios from "axios"

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})

export const addEmployee = employee => api.post("./api/employee", employee);
export const getAllEmployees = ()=>api.get("./api/employee");

const apis = {
    addEmployee,
    getAllEmployees
}

export default apis;