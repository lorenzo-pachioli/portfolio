import React, {useContext}  from 'react';
import logo from './logo.svg';
import { AppContext } from './context/AppContext3';
import './App.css';

function App() {
  
  const {name,  setName, age, setAge} = useContext(AppContext)

  const handleName = (e:any)=> {
    setName(e.target.value)
  }

  const handleAge = (e:any)=> {
    setAge(e.target.value)
  }
  

  console.log(name)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Name is: {name}
        </p>
        <br/>
        <p>
          Age is: {age}
        </p>
        <input type='text' value={name} placeholder="name" onChange={handleName} />
        <input type='number' value={age} placeholder="age" onChange={handleAge} />
      </header>
    </div>
  );
}

export default App;
