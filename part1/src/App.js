import './App.css';

const Mensaje = (props) => {
  
  return <h1 style = {{color: props.color}}>{props.mesage}</h1> 
};

function App() {
  return (
    <div className="App">
     <Mensaje color = 'red' mesage = 'estamos trabajando en un curso de react'/>
    </div>
  );
}

export default App;
