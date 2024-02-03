export function SingleTodo(){
    const todo = {
        title : "CODE",
        description : "code daily 8 hours",
        completed : true,
    }
    return <div className="singleTodo">
        <h1>{todo.title}</h1>
                <h4>{todo.description}</h4>
                <button onClick={()=>{
                    try{
                        fetch('http://localhost:3000/completed',{
                        method : "PUT",
                        body : JSON.stringify({
                            _id : todo._id
                        }),
                        headers : {
                            "content-type" : "application/json"
                        }
                        })
                    }
                    catch(e){
                        console.log(e)
                    }
                    setChange( preState => preState+1);
                }}>{todo.completed == true ? "Completed" : "Mark as done"}</button>

                <button onClick={()=>{
                    try{
                        fetch('http://localhost:3000/todo',{
                        method : "DELETE",
                        body : JSON.stringify({
                            _id : todo._id
                        }),
                        headers : {
                            "content-type" : "application/json"
                        }
                        })
                    }
                    catch(e){
                        console.log(e)
                    }
                    setChange( preState => preState+1);
                }}>Delete</button>
        
    </div>
}