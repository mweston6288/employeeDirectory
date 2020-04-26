import React from 'react';
import Container from 'react-bootstrap/Container';
import SearchBar from "./components/searchbar"
import AddButton from "./components/addButton"
import './App.css';

function App() {
  return (
    <Container fluid>
      <SearchBar/>
      <AddButton/>
    </Container>
  );
}

export default App;
