import Card from "./Card.jsx"
import Button from "./Button/Button.jsx"
import Student from "./Student.jsx"
import UserGreeting from "./UserGreeting.jsx"
import List from "./List.jsx";

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
    <UserGreeting isLoggedIn={false} username="Selim"/>
    <List/>
    </>
    
  );
}

export default App
