import React, {useState, useEffect} from "react";

function MyComponent(){
    const [count, setCount]=useState(0);
    const [color, setColor]=useState("green");

    const [width, setWidth]=useState(window.innerWidth);
    const [height, setHeight]=useState(window.innerHeight);

    //event Listener without useEffect 
    // window.addEventListener("resize", handleResize);
    // invokes too many eventListeners: every time there is a change

    //adding an event listener for only when the component mounts
    useEffect(()=>{
        window.addEventListener("resize", handleResize);

        return()=>{
            window.removeEventListener("resize", handleResize);
            console.log("Event Listener Removed!");
        }
    }, []);

    useEffect(() => {
        document.title= `Count: ${count} ${color}`;

        return ()=>{
            //SOME CLEANUP CODE BEFORE THE NEXT RE-RENDER OR MOUNT

        }
    }, [count, color]);

    function addCount(){
        setCount(c=>c+1);
    }

    function subtractCount(){
        setCount(c=>c-1);
    }

    function changeColor(){
        setColor(c=>c === "green" ? "red":"green");
    }

    function handleResize(){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    return(<>
        <p style={{color:color}}>Count:{count}</p>
        <button onClick={addCount}>Add</button>
        <button onClick={subtractCount}>Subtract</button><br/>
        <button onClick={changeColor}>Change Color</button>

        <p>Window Width: {width}px</p>
        <p>Window Height: {height}px</p>
    </>);
}

export default MyComponent;