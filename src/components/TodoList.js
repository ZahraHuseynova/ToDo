import React from "react";
import "./Todo.css"


const TodoList =(props)=> {
    
        return (
            <div className="toDoList ui middle aligned divided list">
                
                {
                props.addList.map((task,index)=>{
                    const onClickCallBack=()=>{
                        props.removeTodo(index);
                        
                    };
                    const onClickComplete=()=>{
                        props.completeTodo(task,index)
                    };
                    
                    let completedTask = task.isCompleted === true? "line-through":"";
                    return(

                        <div key={index}   className="item" style={{textDecoration: completedTask}}>
                            
                            <div className="right floated content"  >
                                <div className="ui button"  onClick={onClickComplete}><i className=" clickIcon edit icon"></i></div>
                                <div className="ui button" onClick={onClickCallBack}><i className=" clickIcon trash alternate icon"></i></div>
                            </div>
                            <div className="text content">
                                {task.todo}
                            </div>
                        </div>
                    )
                    
                })
                
                }


            </div>    
        )
    
}

export default TodoList;