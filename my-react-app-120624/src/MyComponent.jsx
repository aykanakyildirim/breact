import React, {useState} from "react";

function MyComponent(){
    const [name, setName] = useState("Guest"); 
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] =useState(false);

    const [lastName, setLastName] = useState("Guest Last Name");
    const [quantity, setQuantity] = useState(1);
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("");
    const [shipping, setShipping]= useState("Delivery");

    const [car, setCar] = useState({year: 2024 , make:"Ford" , model: "Mustang"});

    const [foods, setFoods]= useState(["Hamburger", "Pizza", "Pasta"]);

    const [books, setBooks] = useState([]);
    const [bookYear, setBookYear] = useState(new Date().getFullYear());
    const [bookPublisher, setBookPublisher] = useState("");
    const [bookGenre, setBookGenre] = useState("");


    const updateName = ()=>{
        setName("Aykan");
    }

    const incrementAge = ()=>{
        setAge(age + 1);
    }

    const toggleEmployedStatus=()=>{
        setIsEmployed(!isEmployed);
    }
    
    function handleLastNameChange(event){
        setLastName(event.target.value);
    }

    function handleQuantityChange(event){
        setQuantity(event.target.value);
    }

    function handleCommentChange(event){
        setComment(event.target.value);
    }

    function handlePaymentChange(event){
        setPayment(event.target.value);
    }

    function handleShippingChange(event){
        setShipping(event.target.value);
    }

    function handleYearChange(event){
        setCar(c=>({...c, year: event.target.value})); //...car is a spread operator
    }

    function handleMakeChange(event){
        setCar(c=>({...c, make:event.target.value}));
    }

    function handleModelChange(event){
        setCar(c=>({...c, model:event.target.value}));
    }

    function handleAddFood(){
        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value= " ";

        setFoods(f=>[...f, newFood]);
    }

    function handleRemoveFood(index){
        setFoods(foods.filter((_, i)=> i!==index));
    }

    function handleAddBook(){
        const newBook = {year: bookYear, publisher: bookPublisher, genre: bookGenre };
        setBooks(b =>[...b, newBook]);

        setBookYear(new Date().getFullYear());
        setBookPublisher("");
        setBookGenre("");
        
    }

    function handleRemoveBook(index){
        setBooks(b=>b.filter((_,i)=>i!==index));
    }

    function handleBookYearChange(event){
        setBookYear(event.target.value);
    }

    function handleBookPublisherChange(event){
        setBookPublisher(event.target.value);
    }

    function handleBookGenreChange(event){
        setBookGenre(event.target.value);
    }

    return(<div>
        <p>Name: {name}</p>
        <button onClick={updateName}>Set Name</button>
        <p>Age: {age}</p>
        <button onClick={incrementAge}>Increment Age</button>
        <p>Is employed: {isEmployed ? "Yes" : "No"}</p>
        <button onClick={toggleEmployedStatus}>Toggle Status</button>
        <p><input value={lastName} onChange={handleLastNameChange}></input></p>
        <p>Last Name: {lastName}</p>

        <input value={quantity} onChange={handleQuantityChange} type="number"></input>
        <p>Quantity: {quantity}</p>

        <textarea value={comment} onChange={handleCommentChange} placeholder="Additional Info"></textarea>
        <p>Comment: {comment}</p>

        <select value={payment} onChange={handlePaymentChange}>
            <option value="">Select an option</option>
            <option value="Visa">Visa</option>
            <option value="Mastercar">Mastercard</option>
            <option value="Giftcard">Giftcard</option>
        </select>

        <p>Payment: {payment}</p>

        <label><input type="radio" value="Pick Up" 
                checked={shipping == "Pick Up"}
                onChange={handleShippingChange}/>Pick Up
        </label><br/>

        <label><input type="radio" value="Delivery" 
                checked={shipping == "Delivery"}
                onChange={handleShippingChange}/>Delivery
        </label>
        <p>Shipping: {shipping}</p>
        
        <p>Your favorite car is: {car.year} {car.make} {car.model}</p>
        <input type="number" value={car.year} onChange={handleYearChange}></input><br/>
        <input type="text" value={car.make} onChange={handleMakeChange}></input><br/>
        <input type="text" value={car.model} onChange={handleModelChange}></input><br/>
        
        <h2>List of Food</h2>
        <ul>
            {foods.map((food, index)=> 
                <li key={index} onClick={()=>handleRemoveFood(index)}>{food}</li>)}
        </ul>
        <input type="text" id="foodInput" placeholder="Enter food name"/>
        <button onClick={handleAddFood}>Add Food</button>

        <h2>List of Book Objects</h2>
        <ul>
            {books.map((book, index) =>
                <li key={index} onClick={()=>handleRemoveBook(index)}>
                    {book.year} {book.publisher} {book.genre}
                </li>)}
        </ul>
        <input type="number" value={bookYear} onChange={handleBookYearChange}></input><br/>
        <input type="text" value={bookPublisher} onChange={handleBookPublisherChange}
            placeholder="Enter Book Publisher"
            ></input><br/> 
        <input type="text" value={bookGenre} onChange={handleBookGenreChange}
            placeholder="Enter Book Genre"
            ></input><br/> 
        <button onClick={handleAddBook}>Add Book</button>
    </div>);
}
export default MyComponent