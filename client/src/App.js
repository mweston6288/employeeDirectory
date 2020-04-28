import React from 'react';
import Container from 'react-bootstrap/Container';
import SearchBar from "./components/searchbar"
import AddButton from "./components/addButton"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Container fluid>
      <SearchBar/>
    </Container>
  );
}

export default App;
