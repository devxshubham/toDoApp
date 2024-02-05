import { useAutoAnimate } from '@formkit/auto-animate/react'

import { useSetRecoilState, useRecoilState } from 'recoil'
import { changeAtom } from '../store/atoms/change'

export function RenderTodo({todos}){
    const [animationParent] = useAutoAnimate()

    const setChange = useSetRecoilState(changeAtom)
    
    return <div ref={animationParent} className='renderAll'>
        {todos.map( (todo) => {
            return <div className='eachTodo' key={todo._id}>
                <h1>{todo.title}</h1>
                <h4>{todo.description}</h4>
                <button onClick={()=>{
                    setSingleTodo({
                        _id : todo._id,
                        title : todo.title,
                        description : todo.description
                    });
                }}> <a href={`todo/${todo._id}`}>open</a> </button>
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
        })}
        
    </div>
}