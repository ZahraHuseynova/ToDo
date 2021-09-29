import React from "react";
import TodoList from "./TodoList";
import "./App.css";
import { connect } from "react-redux";
import { changeInput, addTodo } from "../actions";

const App = ({ todo, changeInput, addTodo }) => {
    return (
        <div>
            <div className=" inputBar ui container">
                <h1>ToDo App</h1>
                <div className="ui right icon input">
                    <input
                        type="text"
                        placeholder="Add your task..."
                        value={todo}
                        onChange={(e) => changeInput(e.target.value)}
                    />
                    <i className="clickIcon plus squere icon"></i>
                    <div
                        className="ui button"
                        onClick={() => {
                            addTodo(todo);
                            changeInput("");
                        }}
                    ></div>
                </div>
            </div>
            <div>
                <TodoList />
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return { todo: state.todo };
};

export default connect(mapStateToProps, { changeInput, addTodo })(App);
