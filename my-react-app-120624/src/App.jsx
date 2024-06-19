import Card from "./Card.jsx"
import Button from "./Button/Button.jsx"
import Student from "./Student.jsx"
import UserGreeting from "./UserGreeting.jsx";
import List from "./List.jsx";
import MyComponent from "./MyComponent.jsx";
import Counter from "./Counter.jsx";

function App() {
  const fruits =[{id: 1, name: "apple", calories: 95}, 
                  {id: 2, name:"orange", calories: 45}, 
                  {id: 3, name: "banana", calories: 105}, 
                  {id: 4, name: "kiwi", calories: 80},
                  {id: 5, name: "coconut", calories: 55}
                ];
    const vegetables =[{id: 6, name: "potatoes", calories: 110}, 
                  {id: 7, name:"celery", calories: 15}, 
                  {id: 8, name: "carrots", calories: 25}, 
                  {id: 9, name: "corn", calories: 63},
                  {id: 10, name: "broccoli", calories: 50}
                ];
                
  return(
    <>
    <MyComponent/>
    <Counter/>
    <Card></Card>
    <Button/>
    <Student name="Sponge Bob" age={30} isStudent={true}/>
    <Student name="Patrick" age={42} isStudent={false}></Student>
    <Student name="Squidward" age={50} isStudent={false}></Student>
    <Student name="Sandy" age={27} isStudent={true}></Student>
    <Student/>
    <UserGreeting isLoggedIn={false} username="Selim"/>
    {fruits.length>0 ? <List items = {fruits} category="Fruits"/> : null}
    {vegetables.length>0 && <List items = {vegetables} category="Vegetables"></List>}
    </>
    
  );
}

export default App
