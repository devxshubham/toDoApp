import { useState,useEffect } from 'react'
import { useSetRecoilState } from 'recoil';
import { changeAtom } from '../store/atoms/change';



export function CreateTodo(){
    const setChange = useSetRecoilState(changeAtom)
    const [title, setTitle] = useState("");
    const [desc, setDesc ] = useState("");
    return <div className='create'>
        <input type="text" placeholder="title" onChange={ (e) => {
            setTitle(e.target.value)
        }}></input>
        <input type="text" placeholder="description" onChange={ (e) => {
            setDesc(e.target.value)
        }}></input>
        <button onClick={ ()=>{
            try{
                fetch('http://localhost:3000/todo',{
                method : "POST",
                body : JSON.stringify({
                    title :  title,
                    description : desc
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
        }}>Add to do</button>


    </div>
}