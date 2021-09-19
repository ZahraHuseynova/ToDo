import React from "react";
import "./Todo.css"


const TodoList =(props)=> {
    
        return (
            <div className="toDoList ui middle aligned divided list">
                
                {
                props.addList.map((task,index)=>{
                    const onClickCallBack=()=>{
                        props.removeTodo(index);
                    }
                                       
                    return(

                        <div key={index}   className="item">
                            <div className="right floated content">
                                <div className="ui button"><i className=" clickIcon edit icon"></i></div>
                                <div className="ui button" onClick={onClickCallBack}><i className=" clickIcon trash alternate icon"></i></div>
                            </div>
                            <div className="text content">
                                {task}
                            </div>
                        </div>
                    )
                    
                })
                
                }


            </div>    
        )
    
}

export default TodoList;