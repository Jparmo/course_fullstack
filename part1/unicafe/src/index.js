import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) =>{
  return(
    <button onClick={props.onClick}>{props.text}</button>
  )
}

const Statistic = (props) =>{
  return(
    <p>{props.text} {props.value}</p>
  )
}

const Statistics = (props) =>{
  if(props.count !== 0){
  const average = (props.good-props.bad)/props.count
  const positive = props.good/props.count *100 + '%'
  return(
    <div>
    <Statistic text='good' value={props.good}/>
    <Statistic text='neutral' value={props.neutral}/>
    <Statistic text='bad' value={props.bad}/>
    <Statistic text='all' value={props.count}/>
    <Statistic text='average' value={average}/>
    <Statistic text='positive' value={positive}/>
    </div>
  )}else{
    return <p>No feedback given</p>
  }
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [count, setCount] = useState(0)
  const increseGood = () => {
      return( 
        setGood(good+1),
        setCount(count+1)
      )
  }
  const increseNeutral = () => {
    return( 
      setNeutral(neutral+1),
      setCount(count+1)
    )
  }
  const increseBad = () => {
    return( 
      setBad(bad+1),
      setCount(count+1)
    )
  }

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button text='good' onClick={increseGood}/>
      <Button text='neutral' onClick={increseNeutral}/>
      <Button text='bad' onClick={increseBad}/>

      <h2>Statistics</h2>
      <Statistics good={good} bad={bad} neutral={neutral} count={count} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)