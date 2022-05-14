import './App.css';
import React, { useState } from 'react'
import { Filter } from './components/filter';
import { PersonForm } from './components/personForm';
import { Persons } from './components/persons';

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState('')
  const [ filtered, setfiltered] = useState('')
  const handleChangeName = (event)=>{ 
    setNewName(event.target.value)
  }
  const handleChangeNumber = (event)=>{ 
    setNewNumber(event.target.value)
  }
  const handleChangeFilter = (event)=>{
    setfiltered(event.target.value)
  }
  const handleClick = (event)=>{
    event.preventDefault()
    const nameToAddToState = {
      name: newName,
      number: newNumber
    }
    const repe = persons.filter(person=>person.name===newName)
    if(repe.length > 0){
      window.alert(`${newName} is already added to phonebook`);
    }else{
      console.log('funciona');
      setPersons(persons.concat(nameToAddToState))
      setNewName('')
      setNewNumber('')
    }
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleChangeFilter={handleChangeFilter} />
      <h3>add a new</h3>
      <PersonForm handleClick={handleClick} handleChangeName={handleChangeName} 
      newName={newName} handleChangeNumber={handleChangeNumber} 
      newNumber={newNumber} />
      <h3>Numbers</h3> 
      <Persons persons={persons} filtered={filtered} />
    </div>
  )
}

export default App;
