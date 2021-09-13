import React from "react";
import TodoList from "./TodoList";
import "./InputBar.css"

class InputBar extends React.Component{
    state={
        term:[],
        addToList:"",
    }

    addTodo = (e) =>{
        e.preventDefault();
        const term=[...this.state.term]
        term.push(this.state.addToList);

        console.log(term);

        this.setState({
            addToList:"",
            term,
        });
    };

    

    render() {
        return (
            <div  className=" input-bar ui container">
                <h1>ToDo App</h1>
                <div className="ui right icon input">
                    
                    <input 
                    type="text" 
                    placeholder="Add your task..." 
                    value={this.state.addToList} 
                    onChange={(e)=>this.setState({addToList:e.target.value})}
                    />
                    <i className="plus squere icon"></i>
                    <div className="ui button" onClick={this.addTodo}></div>
                    
                </div>
                <TodoList addList={this.state.term}/>
                
            </div>
            
        )


    }
}

export default InputBar;