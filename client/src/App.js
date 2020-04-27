import React from 'react';
import Container from 'react-bootstrap/Container';
import EmployeeTable from "./components/EmployeeTable"
import SearchBar from "./components/searchbar"
import AddButton from "./components/addButton"

function App() {
  return (
    <Container fluid>
      <SearchBar/>
      <AddButton/>
      <EmployeeTable/>
    </Container>
  );
}

export default App;
