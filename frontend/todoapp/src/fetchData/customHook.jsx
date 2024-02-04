import { useState,useEffect } from 'react'
import { useRecoilValue} from 'recoil';
import {changeAtom} from '../store/atoms/change'

function useTodos(){
    const [todos, setTodos] = useState([]);
    // const [change, setChange] = useState(0);

    const change = useRecoilValue(changeAtom)
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('http://localhost:3000/todo');
          const json = await response.json();
  
          setTodos(json.todos);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      fetchData();
    }, [change]); // Empty dependency array ensures the effect runs once after the initial render
  
    return {todos};
  
  }

export default useTodos