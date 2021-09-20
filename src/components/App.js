import React from "react";
import TodoList from "./TodoList";
import "./App.css";
import { useState } from "react";

const App = () => {
    const [todos, setTodos] = useState([
        {
            text:"Water plants",
            isCompleted:"false"
        },
        {
            text:"Complete the task",
            isCompleted:"false"
        },
        {
            text:"Review mistakes",
            isCompleted:"false"
        }]);
        
    const [todo, setTodo] = useState("");

    const addTodo = () => {
        
        setTodos([...todos, todo]);
        setTodo("");       
    };

    const  removeTodo = (index ) =>{
        const newTodos = [...todos];
        newTodos.splice(index,1);
        setTodos(newTodos);
    };

    const completeTodo = (index)=> {
        const newTodos = [...todos];
        newTodos[index].isCompleted = true;
        setTodos(newTodos);
    };

    

    return (
        <div>
            <div className=" inputBar ui container">
                <h1>ToDo App</h1>
                <div className="ui right icon input">
                    <input 
                        type="text"
                        placeholder="Add your task..."
                        value={todo}
                        onChange={(e) => setTodo(e.target.value)}
                    />
                    <i className="clickIcon plus squere icon"></i>
                    <div className="ui button" onClick={addTodo}></div>
                </div>
            </div>
            <div>
                <TodoList 
                addList={todos} 
                removeTodo={removeTodo}
                completeTodo={completeTodo}
                completeItem={todos.isCompleted}
                />
            </div>
        </div>
    );
};

export default App;