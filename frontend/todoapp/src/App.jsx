import { useState,useEffect } from 'react'
import './App.css'

import {CreateTodo} from './components/CreateTodo'
import {RenderTodo} from './components/RenderTodo'

function App() {
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

  return(
    <div>
        <CreateTodo ></CreateTodo>
        <RenderTodo todos={todos} ></RenderTodo>
        
    </div>

  )
}

export default App
