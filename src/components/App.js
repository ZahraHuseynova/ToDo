import React,{}from "react";
import TodoList from "./TodoList";
import "./App.css";
import { useState } from "react";
import {connect} from 'react-redux';
import {addTodo}from '../actions'

const App = () => {
    const [todos, setTodos] = useState([]);
        
    const [todo, setTodo] = useState("");

    const addTodo = () => {
        
        setTodos([...todos, {
            todo: todo,
            isCompleted:false
        }
        ]);
        setTodo("");       
    };

    const  removeTodo = (index ) =>{
        const newTodos = [...todos];
        newTodos.splice(index,1);
        setTodos(newTodos);
    };

    const completeTodo = (task,index)=> {
        const completedArr = [...todos];
        setTodos (completedArr.filter((element)=>{
            if(completedArr.indexOf(element)===index){
                element.isCompleted=!element.isCompleted;
            }
            return element;
        }))
        // const newTodos = [...todos];
        // newTodos[index].isCompleted = true;
        // setTodos(newTodos);
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
                />
            </div>
        </div>
    );
};

export default connect()(App);