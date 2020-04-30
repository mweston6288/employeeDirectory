import axios from "axios"

const api = axios.create({
    baseURL: process.env.MONGODB_URI || 'http://localhost:8080',
})
// Call on the api routes in server/routes/apiRoutes
export const addEmployee = ({ name, DOB, role, email }) => api.post("./api/employee", {name,DOB,role,email});
export const getAllEmployees = ()=>api.get("./api/employee");
// id is the data field to sort by
export const getEmployeesBySort = (id) => api.get("./api/employee/"+id)
// id is the name to filter the search by
export const getEmployeesByName = (id) => api.get("./api/employee/name/" + id)


const apis = {
    addEmployee,
    getAllEmployees,
    getEmployeesBySort,
    getEmployeesByName
}

export default apis;