import React from "react";
import TodoList from "./TodoList";
import "./App.css";
import { useState } from "react";

const App = () => {
    const [todos, setTodos] = useState([]);
    const [todo, setTodo] = useState("");

    const addTodo = () => {
        // const copyTodos = [...todos, todo]
        //copyTodos.push(todo);

        setTodos([...todos, todo]);
        setTodo("");

        
    };

    const  removeTodo = (index ) =>{
        const newTodos = [...todos];
        newTodos.splice(index,1);
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
                />
            </div>
        </div>
    );
};

export default App;