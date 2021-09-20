import React from "react";
import "./Todo.css"


const TodoList =(props)=> {
    
        return (
            <div className="toDoList ui middle aligned divided list">
                
                {
                props.addList.map((task,index,completeItem)=>{
                    const onClickCallBack=()=>{
                        props.removeTodo(index);
                        
                    };
                    const onClickComplete=()=>{
                        props.completeTodo(index)
                    };                   
                    return(

                        <div key={index}   className="item" >
                            
                            <div className="right floated content"  >
                                <div className="ui button" style={{textDecoration: completeItem? "line-through":""}} onClick={onClickComplete}><i className=" clickIcon edit icon"></i></div>
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