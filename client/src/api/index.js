import axios from "axios"


// Call on the api routes in server/routes/apiRoutes
export const addEmployee = ({ name, DOB, role, email }) => axios.post("./api/employee", {name,DOB,role,email});
export const getAllEmployees = ()=>axios.get("./api/employee");
// id is the data field to sort by
export const getEmployeesBySort = (id) => axios.get("./api/employee/"+id)
// id is the name to filter the search by
export const getEmployeesByName = (id) => axios.get("./api/employee/name/" + id)


const apis = {
    addEmployee,
    getAllEmployees,
    getEmployeesBySort,
    getEmployeesByName
}

export default apis;