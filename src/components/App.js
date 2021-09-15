import React from "react";
import TodoList from "./TodoList";
import "./App.css"
import { useState } from "react";

const App=({items})=>{
    const [term , setTerm]= useState ([]);
    const [addToList ,setAddToList] = useState("");

    addTodo = (e) =>{
        e.preventDefault();
        const term=[... term]
        term.push(addToList);

        console.log(term);

        setTerm({
            addToList:"",
            term,
        });
    };
    
    
        return (
            <div>
                <div  className=" inputBar ui container">
            <h1>ToDo App</h1>
            <div className="ui right icon input">
                    
                <input 
                    type="text" 
                    placeholder="Add your task..." 
                    value={addToList} 
                    onChange={(e)=>{setAddToList(addToList(e.target.value)}
                    />
                <i className="plus squere icon"></i>
                <div className="ui button" onClick={addTodo}></div>
                    
            </div>
               
                
            </div>
                <div><TodoList addList={term}/></div>
            </div>
        )
};


export default App;