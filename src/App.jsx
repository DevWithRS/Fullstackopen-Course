import { useState } from 'react'

const Button = (props) => {
  return <button onClick = {props.onClick}>{props.text}</button>
}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

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
      <p>Results:<br/>Good: {good}<br/>Neutral: {neutral}<br/>Bad: {bad}</p>
    </div>
  )
}

export default App