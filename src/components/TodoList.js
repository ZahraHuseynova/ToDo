import React from "react";
import "./Todo.css";
import { connect } from "react-redux";
import { completeTodo, removeTodo } from "../actions";

const TodoList = (props) => {
    return (
        <div className="toDoList ui middle aligned divided list">
            {props.todos.map((task, index) => {
                let completedTask =
                    task.isCompleted === true ? "line-through" : "";
                return (
                    <div
                        key={index}
                        className="item"
                        style={{ textDecoration: completedTask }}
                    >
                        <div className="right floated content">
                            <div
                                className="ui button"
                                onClick={() => props.completeTodo(index)}
                            >
                                <i className=" clickIcon edit icon"></i>
                            </div>
                            <div
                                className="ui button"
                                onClick={() => props.removeTodo(index)}
                            >
                                <i className=" clickIcon trash alternate icon"></i>
                            </div>
                        </div>
                        <div className="text content">{task.todo}</div>
                    </div>
                );
            })}
        </div>
    );
};

const mapStateToProps = (state) => {
    return { todos: state.todos };
};

export default connect(mapStateToProps, { completeTodo, removeTodo })(TodoList);
