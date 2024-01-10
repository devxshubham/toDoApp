import { useState,useEffect } from 'react'

function useTodos(){
    const [todos, setTodos] = useState([]);
    console.log("todos",todos)
  
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
    }, []); // Empty dependency array ensures the effect runs once after the initial render
  
    return {todos,setTodos};
  
  }

export default useTodos