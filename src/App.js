import React from 'react'
import './App.css';


import PersonCard from './components/PersonCard';



function App() {
  return (
    <>
    <div className="App">
      <PersonCard firstName={"michael"} lastName={"stovall"} age={33} hairColor={"brown"}  />
      <PersonCard firstName={"joe"} lastName={"blow"} age={40} hairColor={"brown"}  />
      <PersonCard firstName={"dan"} lastName={"wan"} age={15} hairColor={"brown"}  />
      <PersonCard firstName={"zac"} lastName={"mac"} age={35} hairColor={"brown"}  />

    </div>
    </>
  );
}

export default App;
