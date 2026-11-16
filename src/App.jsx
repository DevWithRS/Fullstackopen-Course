import { useState } from 'react'

const Statistics = (props) => {
  const average = props.total === 0 ? 0 : (props.good - props.bad)/(props.total)
  const positive = props.total === 0 ? 0 : ((props.good)/(props.total))*100
  if (average == 0 && positive == 0 && props.neutral == 0) {
    return(<h3>No feedback given.</h3>)
  }
  else {
    return(<p>Average: {average} <br/>Positive: {positive} %</p>)}
}

const Button = (props) => {
  return <button onClick = {props.onClick}>{props.text}</button>
}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const total = good + neutral + bad 

  const incrementGood = () => {
    setGood(good + 1)
  }

  const incrementNeutral = () => {
    setNeutral(neutral + 1)
  }

  const incrementBad = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>Provide feedback here:</h1>
      <Button onClick={() => incrementGood()} text="Good"/>
      <Button onClick={() => incrementNeutral()} text="Neutral"/>
      <Button onClick={() => incrementBad()} text="Bad"/>
      <h2>Results: <br/></h2>
      <p>Good: {good}<br/>Neutral: {neutral}<br/>Bad: {bad}<br/>Total: {total}</p>
      <Statistics  good = {good} neutral = {neutral} bad = {bad} total = {total}/>
    </div>
  )
}

export default App