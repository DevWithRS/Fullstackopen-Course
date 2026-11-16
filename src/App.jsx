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
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Provide feedback here:</h1>
      <Button onClick={() => setGood(good + 1)} text="Good"/>
      <Button onClick={() => setNeutral(neutral + 1)} text="Neutral"/>
      <Button onClick={() => setBad(bad + 1)} text="Bad"/>
      <h2>Results: <br/></h2>
      <Statistics  good = {good} neutral = {neutral} bad = {bad}/>
    </div>
  )
}

export default App