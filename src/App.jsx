import { useState } from 'react'

const StatisticLine = (props) => {
  if (props.text == "Positive") {
    return(<tr><td>{props.text}</td><td>{props.value}%</td></tr>)
  }
  else {
  return(<tr><td>{props.text}</td><td>{props.value}</td></tr>)
  }
}

const Statistics = (props) => {
  const total = props.good + props.neutral + props.bad 
  const average = total === 0 ? 0 : (props.good - props.bad)/(total)
  const positive = total === 0 ? 0 : ((props.good)/(total))*100
  if (total == 0) {
    return(<h3>No feedback given.</h3>)
  }
  else {
    return(
      <table>
        <tbody>
          <StatisticLine text = "Good" value = {props.good}/>
          <StatisticLine text = "Neutral" value = {props.neutral}/>
          <StatisticLine text = "Bad" value = {props.bad}/>
          <StatisticLine text = "Total" value = {total}/>
          <StatisticLine text = "Average" value = {average}/>
          <StatisticLine text = "Positive" value = {positive}/>
        </tbody>
      </table>
    )}}

const Button = (props) => {
  return <button onClick = {props.onClick}>{props.text}</button>
}

const chooseAnecdote = (anecdotes,setSelected) => {
  const randomVal = Math.floor(Math.random()*anecdotes.length)
  setSelected(randomVal)
}

const voteAnecdote = (setVotes, votes, selected) => {
  const votesCopy = [...votes]
  votesCopy[selected]++
  setVotes(votesCopy)
}

const getMaxIndex = (votes) => {
    let maxIndex = 0
    for (let i = 1; i < votes.length; i++){
      if (votes[i] > votes[maxIndex]) {
        maxIndex = i
      }
      else {
        continue
      }
    }
    return maxIndex

  }


const App = () => {
  // save clicks of each button to its own state
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))

  return (
    <div>
      <h1>Provide feedback here:</h1>
      <Button onClick={() => setGood(good + 1)} text="Good"/>
      <Button onClick={() => setNeutral(neutral + 1)} text="Neutral"/>
      <Button onClick={() => setBad(bad + 1)} text="Bad"/>
      <Button onClick={() => chooseAnecdote(anecdotes,setSelected)} text="Anecdote"/>
      <Button onClick={() => voteAnecdote(setVotes, votes, selected)} text="Vote"/>
      <p>Anecdote: {anecdotes[selected]} Votes: {votes[selected]}<br/></p>
      <p>Anecdote with most votes: {anecdotes[getMaxIndex(votes)]} Votes {votes[getMaxIndex(votes)]}</p>
      <h2>Results: <br/></h2>
      <Statistics  good = {good} neutral = {neutral} bad = {bad}/>
    </div>
  )
}

export default App