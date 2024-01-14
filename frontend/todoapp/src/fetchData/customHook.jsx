import { useState,useEffect } from 'react'

function useTodos(){
    const [todos, setTodos] = useState([]);
    const [change, setChange] = useState(0);

  
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
  
    return {todos, setChange};
  
  }

export default useTodos