import axios from "axios"

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})

export const addEmployee = ({name,DOB,role,email}) => api.post("./employee", {name,DOB,role,email});
export const getAllEmployees = ()=>api.get("./employee");
export const getEmployeesBySort = (id) => api.get("./employee/"+id)

const apis = {
    addEmployee,
    getAllEmployees,
    getEmployeesBySort
}

export default apis;