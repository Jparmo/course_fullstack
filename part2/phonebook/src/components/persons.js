export const Persons = ({persons, filtered}) =>{
    return(persons.filter((person)=> {
        if(filtered){
          return person.name.toLowerCase()===filtered;
        }else{
        return person.name!==filtered;}
        }).map(person=><p key={person.name}>{person.name}{person.number}</p>)
    )
} 