export default addTodo = (todo)=>{
    return{
        type: "ADD_TODO",
        payload:todo,
    };
};