import {todoAtom} from '../store/atoms/singleTodoAtom'
import {RecoilRoot, useRecoilValue,useRecoilState} from 'recoil'
import {useEffect} from 'react'

export function SingleTodo(){
    const [todo, setTodo] = useRecoilState(todoAtom)
    
    // return <h1>{todo}</h1>
    return <div className="singleTodo">
        <h1>{todo.title}</h1>
                <h4>{todo.description}</h4>
                <button onClick={()=>{
                    setTodo({
                        title : "setted",
                        description : "setted"
                    });
                }}>change</button>
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