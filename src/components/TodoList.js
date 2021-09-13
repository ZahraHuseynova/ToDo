import React from "react";


const TodoList =(props)=> {
    
        return (
            <div className="ui middle aligned divided list">
                {
                props.addList.map((task,index)=>{
                    return(

                        <div key={index} className="item">
                            <div className="right floated content">
                                <div className="ui button"><i className="edit icon"></i></div>
                            </div>
                            <div className="content">
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