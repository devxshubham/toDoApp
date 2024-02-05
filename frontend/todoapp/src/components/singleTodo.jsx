import {RecoilRoot, useRecoilValue,useRecoilState} from 'recoil'
import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'

export function SingleTodo(props){
    const [todo, setTodo] = useState({title:"title",description:"description"})
    const {id} = useParams();

    useEffect(()=>{
        const fetchData = async () => {
            try {
              const response = await fetch(`http://localhost:3000/todo/${id}`);
              console.log(response);
              const json = await response.json();
              setTodo(json);
            } catch (error) {
              console.error('Error fetching data:', error);
            }
          };
          fetchData();
    },[])

    
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