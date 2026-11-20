import { useState } from 'react'

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
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

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