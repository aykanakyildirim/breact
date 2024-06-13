import Card from "./Card.jsx"
import Button from "./Button/Button.jsx"
import Student from "./Student.jsx"

function App() {
  return(
    <>
    <Card></Card>
    <Button/>
    <Student name="Sponge Bob" age={30} isStudent={true}/>
    <Student name="Patrick" age={42} isStudent={false}></Student>
    <Student name="Squidward" age={50} isStudent={false}></Student>
    <Student name="Sandy" age={27} isStudent={true}></Student>
    <Student/>
    </>
    
  );
}

export default App
