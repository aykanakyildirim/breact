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
        


    </div>);
}
export default MyComponent