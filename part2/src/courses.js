const Header = (props) =>{
    return(
    <div>
      <h1>{props.name}</h1>
    </div> 
    )
  }
  
  const Part = (props) =>{
    return(
      <div>
        <p>
          {/* {props.part.name} {props.part.exercises} */}
          {props.part} {props.exercises}
        </p>
      </div>
    )
  }
  
  const Content = ({name, exercises}) =>{
      return(
      <div>
      <Part part={name} exercises={exercises} />
      {/* <Part part={props.parts.parts[1]} exercises={props.parts.parts[1]} />
      <Part part={props.parts.parts[2]} exercises={props.parts.parts[2]} /> */}
      </div>
  
    )
  }
  
  const Total = (props) =>{
    return(
      <div>
        {console.log(props)}
        <p> <strong> Total of {props.parts.reduce((previousValue, currentValue) => previousValue + currentValue.exercises,0)}  exercises </strong> </p>   
      </div>
    )
  }
  
export const Course = ({course}) =>{
        return(<div>
          <Header name={course.name}/>
          {course.parts.map(cours=><Content key={cours.id} name={cours.name} exercises={cours.exercises}/>)}
          <Total  parts={course.parts}/>
        </div>
        )}