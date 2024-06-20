import React, { useState, createContext, useRef } from "react";
import ComponentB from "./ComponentB";

export const UserContext=createContext();

function ComponentA(){

    const [user,setUser]= useState("Aykan");
    
    const inputRef1=useRef(null);
    const inputRef2=useRef(null);
    const inputRef3=useRef(null);

    function handleClick1(){
        inputRef1.current.focus();
        inputRef1.current.style.backgroundColor="yellow";
        inputRef2.current.style.backgroundColor="";
        inputRef3.current.style.backgroundColor="";
    }

    function handleClick2(){
        inputRef2.current.focus();
        inputRef1.current.style.backgroundColor="";
        inputRef2.current.style.backgroundColor="yellow";
        inputRef3.current.style.backgroundColor="";
    }

    function handleClick3(){
        inputRef3.current.focus();
        inputRef1.current.style.backgroundColor="";
        inputRef2.current.style.backgroundColor="";
        inputRef3.current.style.backgroundColor="yellow";
    }

    return(
        <>
        <div className="box">
            <h1>ComponentA</h1>
            <h2>{`Hello ${user}`}</h2>
            <UserContext.Provider value={user}><ComponentB user={user}/></UserContext.Provider>
        </div>

        <button onClick={handleClick1}>Click me 1!</button>
        <input ref={inputRef1}></input>
        <button onClick={handleClick2}>Click me 2!</button>
        <input ref={inputRef2}></input>
        <button onClick={handleClick3}>Click me 3!</button>
        <input ref={inputRef3}></input>
        
        </>
        
    );
}

export default ComponentA;