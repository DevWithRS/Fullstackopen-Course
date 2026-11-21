import { useState, useEffect } from 'react'
import axios from 'axios'


const Filter = (props) => {
  return(
        <div>Search: 
          <input 
            value = {props.filter}
            onChange = {props.handleSearch}/>
        </div>)
}

const AddPersonForm = (props) => {
  return(     
      <form onSubmit={props.addPerson}>
          <div>
            name: <input 
              value = {props.newName}
              onChange ={props.handleNameChange} />
          </div>
          <div>
            number: <input
              value = {props.newNumber}
              onChange = {props.handleNumberChange}/>
          </div>
          <div>
            <button type="submit">add</button>
          </div>
        </form>)
}

const NumbersSection = (props) => {
  return(<div>
              <h2>Numbers: </h2>
              <ul>{props.personToShow.map(person => <li key = {person.name}>{person.name} - {person.number}</li>)}</ul>
          </div>)
}

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])


  const addPerson = (event) => {
    event.preventDefault()
    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already added to the phonebook!`)
      return
    }
    else {
      setPersons(persons.concat({name: newName, number: newNumber}))
    }
  }

  const personToShow = persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleSearch = (event) => {
    setFilter(event.target.value)
  } 



  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter = {filter} handleSearch = {handleSearch}/>
      <br/>
      <AddPersonForm addPerson = {addPerson} newName = {newName} handleNameChange = {handleNameChange} newNumber = {newNumber} handleNumberChange = {handleNumberChange}/>
      <NumbersSection personToShow = {personToShow}/>
    </div>
  )
}

export default App