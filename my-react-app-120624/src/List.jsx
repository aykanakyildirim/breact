
function List(){

    const fruits =[{id: 1, name: "apple", calories: 95}, 
                    {id: 2, name:"orange", calories: 45}, 
                    {id: 3, name: "banana", calories: 105}, 
                    {id: 4, name: "kiwi", calories: 80},
                    {id 5, name: "coconut", calories: 55}
                ];
    //fruits.sort((a,b)=>a.name.localeCompare(b.name)); //Alphabetical
    const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);

    /* const listItems = lowCalFruits.map(lowCalFruit => <li key = {lowCalFruit.id}>
                                                    {lowCalFruit.name}: &nbsp;
                                                    <b>{lowCalFruit.calories}</b>
                                                    </li>);
    */
   
                                        
    const listItems = fruits.map(fruit=>    <li key={fruit.id}>
                                            {fruit.name}:&nbsp;
                                            <b>{fruit.calories}</b>
                                            </li>);
    return(<u1>{listItems}</u1>);
}

export default List