import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [count, setCount] = useState({0:0,1:0,2:0,3:0,4:0,5:0})

  const getRandom = (min,max) =>{
    return Math.floor(Math.random() * (max - min) + min)
  }
  const selectedAncdot =()=> {
    return setSelected(getRandom(0,anecdotes.length))
  }
  const countAnecdot =() =>{
    const newCount ={...count}
    newCount[selected] += 1 
    return setCount(newCount)
  }
  const maxim = () =>{
    const val = Object.values(count)
    const keys = Object.keys(count)
    const max = Math.max(...val)
    for (let index = 0; index < val.length; index++) {
      if(max === val[index]){
        return keys[index]
      }
    
    }
    
  }
  return (
    <div>
      {props.anecdotes[selected]}
      <p>{count[selected]}</p>
      {console.log(count)}
      <br/>
      <button onClick={countAnecdot}>vote</button>
      <button onClick={selectedAncdot}>Next Anecdote</button>
      <p>{anecdotes[maxim()]}</p>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)